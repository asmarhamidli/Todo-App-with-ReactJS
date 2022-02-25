import React from "react";
import { Alert, ListGroupItem, ListGroupItemText } from "reactstrap";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ToDoLists(props) {
  return (
    <div>
      <ListGroupItem
        className="d-flex align-items-center justify-content-between my-1"
        color="danger"
      >
        <ListGroupItemText className="my-auto ml-2">
          {props.text}
        </ListGroupItemText>
        <FontAwesomeIcon
          aria-hidden="true"
          icon={faTimes}
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
      </ListGroupItem>
    </div>
  );
}

export default ToDoLists;
