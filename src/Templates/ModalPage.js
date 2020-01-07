import React from "react";
import Aux from "../HOC/Aux";
import { useHistory } from "react-router-dom";
const ModalPage = props => {
  return (
    <Aux>
      <Modal>{props.children}</Modal>
    </Aux>
  );
};
const Modal = props => {
  let history = useHistory();
  let back = e => {
    e.stopPropagation();
    history.goBack();
  };
  return (
    <div className="modalpage-container">
      <div className="modalpage-inside shadow-lg">
        <button type="button" className="btn btn-link" onClick={back}>
          Close
        </button>
        {props.children}
      </div>
    </div>
  );
};
export default ModalPage;
