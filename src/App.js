import Header from './components/Header'
import Todolists from './components/Todolists'
import AddTodolistModal from './components/AddTodolistModal'
import {useState,useEffect} from 'react'
import Modal from 'react-modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createAPIEndpoint, ENDPOINTS } from './api'; 
import {FaTimes} from 'react-icons/fa'

function App() {
  const [showAddTodolist, setShowAddTodolist] = useState(false)
  const [todolists, setTodolists] = useState ([])
  
  useEffect( async () => {
    await createAPIEndpoint(ENDPOINTS.TODOLISTS)
    .fetchAll()
    .then(res => {
      setTodolists(res.data)})
    .catch(err => console.log(err))
    console.log(todolists)
  },[])
 
  const addTodolist = async (todolist) => {

    await createAPIEndpoint(ENDPOINTS.TODOLISTS)
    .create(todolist)
    .then(res => {
     setTodolists(res.data)})
    .catch(err => console.log(err))

  }

  const updateTodolist = (id, updatedTodolist) => {
    createAPIEndpoint(ENDPOINTS.TODOLISTS)
    .update(id,updatedTodolist)
    .catch(err => console.log(err))

    updatedTodolist.id = id
    setTodolists(
      todolists.map((todolist) => 
      todolist.id === id ? 
      todolist = updatedTodolist : todolist)
    )
  }

  const deleteTodolist = (id) => {
    createAPIEndpoint(ENDPOINTS.TODOLISTS)
    .delete(id)
    .then(res => {
      setTodolists(res.data)
    })
    .catch(err => console.log(err))

    
  }

  return (
    <div className="App">
      <Header 
        title = "Add your notes"
      />

      <button className="add-button" 
      className="add-button"
       variant="primary"
        onClick = {() => {
          setShowAddTodolist(!showAddTodolist)
        }}
      ><b>+</b></button>{' '}

      <Modal
        ariaHideApp={false}
        isOpen={showAddTodolist}>
        <FaTimes style ={{color:'red', float: 'right'}}
        onClick = {() => setShowAddTodolist(false)}
        cursor='pointer'/>
        <AddTodolistModal 
        onSave={addTodolist}
        showAddTodolist = {showAddTodolist}
        setShowAddTodolist={setShowAddTodolist}/>
      </Modal>


     

      <Todolists 
      todolists={todolists}
      onDelete={deleteTodolist}
      onSave={updateTodolist}
      />

    </div>
  );
}

export default App;
