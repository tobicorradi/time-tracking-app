import { useState } from "react";
import "./App.css";
import TaskCreator from "./components/TaskCreator";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
function App() {
  const [timer, setTimer] = useState(0);
  const [newTask, setNewTask] = useState("");
  const [timerActive, setTimerActive] = useState(false);
  const [list, setList] = useState([
    {
      id: 1,
      text: "Estudio de react",
      time: 128,
    },
  ]);
  return (
    <Container className="mt-4">
      <Row>
        <TaskCreator
          timer={timer}
          setTimer={setTimer}
          newTask={newTask}
          setNewTask={setNewTask}
          list={list}
          setList={setList}
          timerActive={timerActive}
          setTimerActive={setTimerActive}
        />
        <TaskList list={list} setList={setList}/>
      </Row>
    </Container>
  );
}

export default App;
