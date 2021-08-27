import Todolist from './Todolist'

const Todolists = ({todolists, onDelete, onSave,setShowAddTodolist}) => {
    
    return (
        <>

            
            { todolists.length > 0 ? 
            //  <ul>
                <div className="todolist-container">

                <button className="add-button" 
                className="add-button"
                variant="primary"
                onClick = {() => {
                    setShowAddTodolist(true)
                    console.log(todolists)
                }}
                >
                <b>+</b>
                </button>
               { todolists.map((todolist) => (
                    
                // <li key={todolist.id} >
                
                    <Todolist
                    onSave={onSave} 
                    todolist={todolist}
                    onDelete={onDelete}
                    />
                /* </li> */
                ))
               }
               </div>
                
            //  </ul>
            :<h2>Not todolists</h2>
            }   
        </>
    )
}

export default Todolists
