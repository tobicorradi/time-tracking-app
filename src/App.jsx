import { useState } from "react";
import "./App.css";
import TaskCreator from "./components/TaskCreator";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useSelector } from 'react-redux';
function App() {
  const [timer, setTimer] = useState(0);
  const [newTask, setNewTask] = useState("");
  const [timerActive, setTimerActive] = useState(false);
  const [list, setList] = useState([]);
  const state = useSelector((state) => (state.list))
  return (
    <Container className="mt-4">
      <Row>
        <TaskCreator
          timer={timer}
          setTimer={setTimer}
          newTask={newTask}
          setNewTask={setNewTask}
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
