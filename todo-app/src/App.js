import React, { Component, useState } from "react";
import {
  Card,
  CardTitle,
  Button,
  Input,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Container,
} from "reactstrap";
import ToDoLists from "./ToDoLists";

function App() {
  const [listInput, setListInput] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (e) => {
    setListInput(e.target.value);
  };

  const listOfItems = () => {
    if (!listInput) {
      alert("Please enter a task");
    } else {
      setItems((oldItems) => {
        return [...oldItems, listInput];
      });
    }

    setListInput("");
  };

  const deleteTasks = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrayEl, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Container className="my-1" fluid>
        <Row>
          <Col className="mx-auto" sm="6">
            <Card body color="danger" inverse>
              <CardTitle className="text-center" tag="h1">
                Todo App
              </CardTitle>
              <Input
                type="text"
                placeholder="Enter Todo"
                onChange={itemEvent}
                value={listInput}
              />
              <Button className="my-2" onClick={listOfItems}>
                Add Todo
              </Button>
              <h1 className="text-center">Todos</h1>
              <ListGroup>
                {/* <ListGroupItem  color="danger">{listInput}</ListGroupItem>*/}
                {Items.map((itemValue, index) => {
                  return (
                    <ToDoLists
                      id={index}
                      key={index}
                      text={itemValue}
                      onSelect={deleteTasks}
                    />
                  );
                })}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
