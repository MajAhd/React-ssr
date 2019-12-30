import "@babel/polyfill";
import express from "express";
import "isomorphic-fetch";
import { matchRoutes } from "react-router-config";
import Routes from "../src/routesServer";
import Template from "./template";
const PORT = 8000;
const app = express();
const path = require("path");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "build")));
const ssr = require("../src/server");
import configureStore from "../src/store";

app.get("*", async (req, res) => {
  const store = configureStore({});
  const routes = matchRoutes(Routes, req.path);

  const promises = routes
    .map(({ route }) => {
      return route.component.request_initialData
        ? route.component.request_initialData(store, routes)
        : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
      return null;
    });

  Promise.all(promises).then(() => {
    try {
      let context = {};
      let helmetContext = {};
      const { preloadedState, content } = ssr(store, req.url, helmetContext);
      const { helmet } = helmetContext;
      const Html = Template(content, helmet, preloadedState);
      if (context.notFound) {
        res.status(404);
      }
      res.setHeader("Cache-Control", "assets, max-age=604800");
      res.send(Html);
    } catch (err) {
      console.log(err);
    }
  });
});

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500);
  res.send(err.message || "Internal server error.");
});

app.listen(PORT, () => console.log(`App Ready On ${PORT}`));
