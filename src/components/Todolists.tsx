import { ITodoItem } from '../types/types'
import Todolist from './Todolist'

type Props = {
    todolists: ITodoItem[],
    onDelete: (arg0: number) => void,
    onUpdate: (arg0: number, arg1: ITodoItem) => void,
    setShowAddTodolist: (arg0: boolean) => void
}

const Todolists = ({todolists, onDelete, onUpdate,setShowAddTodolist} :Props) => {
    
    return (
        <>
        <div className="todolist-container">
            <button 
                className="add-button"
               
                onClick = {() => {
                    setShowAddTodolist(true)
                    console.log(todolists)
                }}
                >
                <b>+</b>
            </button>
            </div>
            { todolists.length > 0 ? 
            //  <ul>
                <div className="todolist-container">

                
               { todolists.map((todolist) => (
                    
                // <li key={todolist.id} >
                
                    <Todolist
                    onUpdate={onUpdate} 
                    todolist={todolist}
                    onDelete={onDelete}
                    />
                /* </li> */
                ))
               }
               </div>
                
            //  </ul>
            :<h2>No todolists</h2>
            }   
        </>
    )
}

export default Todolists
