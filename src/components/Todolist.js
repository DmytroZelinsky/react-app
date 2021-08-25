import { FaTimes  } from 'react-icons/fa'
import {AiFillEdit} from 'react-icons/ai'
import { useState } from 'react'
// import Modal from 'react-modal'
import { Modal, ModalBody } from 'react-bootstrap'
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
                
                <FaTimes style ={{color:'red', cursor:'pointer'}}
                onClick={() => setShowDeleteModal(true)}/>

                <div className="text-display"> 
                    {todolist.text}
                </div>

                
                <AiFillEdit style = {{color:'yellow', cursor:'pointer'}}
                onClick={() => {setShowUpdateTodolist(true)
                
                }}/>

                <div className="date-display">
                    Due date: {todolist.date}
                </div>

                <DeteleModal 
                setShowDeleteModal={setShowDeleteModal}
                showDeleteModal={showDeleteModal}
                onDelete={onDelete}
                todolist={todolist}
                />
                <UpdateTodolistModal
                onSave={onSave}
                setShowUpdateTodolist={setShowUpdateTodolist}
                showUpdateTodolist = {showUpdateTodolist}
                todolist={todolist}
                />

                
            </div>

    )
}


export default Todolist
