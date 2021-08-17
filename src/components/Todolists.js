import Todolist from './Todolist'

const Todolists = ({todolists, onDelete, onSave}) => {
    
    return (
        <>
            { todolists.length > 0 ? 
            //  <ul>
                <div className="todolist-container">
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
