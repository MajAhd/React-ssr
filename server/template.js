export default (content, helmet, preloadedState) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="theme-color" content="#313030" />
  ${helmet.title.toString()}
  ${helmet.meta.toString()}
  <link rel="manifest" href="/manifest.json" />
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Solway&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <link rel="stylesheet" href="/plugins/bootstrap/dist/css/bootstrap.css" />
  <link rel="stylesheet" href="/plugins/theme/Footer.css" />
  <link rel="stylesheet" href="/plugins/theme/ModalPage.css" />
  <link rel="stylesheet" href="/plugins/theme/navbar.css" />
  <link rel="stylesheet" href="/plugins/theme/style.css" />
</head>
<body><noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root">${content}</div> 
  <script>window.__initialData__ = ${JSON.stringify(
    preloadedState
  )}</script>      
   <script src="/bundle.js"></script>         
   <script src="/plugins/jquery/dist/jquery.js"></script>
   <script src="/plugins/popper/popper.js"></script>
   <script src="/plugins/bootstrap/dist/js/bootstrap.min.js"></script>
</body>
</html>`;
};
