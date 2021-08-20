import { FaTimes  } from 'react-icons/fa'
import {AiFillEdit} from 'react-icons/ai'
import { useState } from 'react'
import Modal from 'react-modal'
import { Button } from 'react-bootstrap'
import UpdateTodolistModal from './UpdateTodolistModal'
import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DeteleModal from './DeteleModal'

const Todolist = ({todolist, onDelete,onSave}) => {
    const [showUpdateTodolist, setShowUpdateTodolist] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const todolistsStyle = {
        borderLeft:'1.5rem solid ' + getState(),
    }


    function getState() {
        switch(todolist.state){
            case 1: return'green';
            case 2: return'yellow';
            case 3: return'red';
            default: return 'black'
        }
    }

    return (
            <div className='todolist'
                style={todolistsStyle}
                //onDoubleClick={() => {setShowUpdateTodolist(true)}}
            >
                <h2 className="title-display">
                    {todolist.title}
                </h2>
                
                <FaTimes style ={{color:'red'}}
                onClick={() => setShowDeleteModal(true)}/>

                <div className="text-display"> 
                    {todolist.text}
                </div>

                
                <AiFillEdit style = {{color:'yellow'}}
                
                onClick={() =>setShowUpdateTodolist(true)}/>

                <div className="date-display">
                    Due date: {todolist.date}
                </div>

                <DeteleModal 
                setShowDeleteModal={setShowDeleteModal}
                showDeleteModal={showDeleteModal}
                onDelete={onDelete}
                todolist={todolist}
                />
         



                <Modal
                isOpen={showUpdateTodolist}
                ariaHideApp={false}>
                    <FaTimes style ={{color:'red', float: 'right'}}
                    onClick={() => setShowUpdateTodolist(false)}
                    cursor='pointer'/>
                    <UpdateTodolistModal
                    onSave={onSave}
                    setShowUpdateTodolist={setShowUpdateTodolist}
                    id={todolist.id}
                    />
                </Modal>

                
            </div>

    )
}


export default Todolist
