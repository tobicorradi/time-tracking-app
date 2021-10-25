import {useState} from 'react'
import './App.css';
import TaskCreator from './components/TaskCreator';
import TaskList from './components/TaskList'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
function App() {
  const [timer, setTimer] = useState(0)
  const [list, setList] = useState([{
    id: 1,
    text: 'Estudio de react',
    time: '03:09'
  }])
  return (
    <Container>
      <Row>
        <TaskCreator timer={timer}/>
        <TaskList list={list}/>
      </Row>
    </Container>
  );
}

export default App;
