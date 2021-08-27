import Header from './components/Header'
import Todolists from './components/Todolists'
import AddTodolistModal from './components/AddTodolistModal'
import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createAPIEndpoint, ENDPOINTS } from './api'; 
function App() {
  const [showAddTodolist, setShowAddTodolist] = useState(false)
  const [todolists, setTodolists] = useState ([])
  
  useEffect(async () => {
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

  const updateTodolist = async (id, updatedTodolist) => {
    await createAPIEndpoint(ENDPOINTS.TODOLISTS)
    .update(id,updatedTodolist)
    .catch(err => console.log(err))

    updatedTodolist.id = id
    setTodolists(
      todolists.map((todolist) => 
      todolist.id === id ? 
      todolist = updatedTodolist : todolist)
    )
  }

  const deleteTodolist = async (id) => {
    await createAPIEndpoint(ENDPOINTS.TODOLISTS)
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

     
      
      <AddTodolistModal 
      onSave={addTodolist}
      showAddTodolist = {showAddTodolist}
      setShowAddTodolist={setShowAddTodolist}
      />

      <Todolists 
      todolists={todolists}
      onDelete={deleteTodolist}
      onSave={updateTodolist}
      setShowAddTodolist={setShowAddTodolist}
      />

    </div>
  );
}

export default App;
