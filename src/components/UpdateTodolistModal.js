import React from 'react'
import {useState, useEffect} from 'react'
import TodolistForm from './TodolistForm'
import { Modal } from 'react-bootstrap'
import { createAPIEndpoint, ENDPOINTS } from '../api';

function UpdateTodolistModal({onSave,setShowUpdateTodolist,showUpdateTodolist,todolist}) {
    const [title, setTitle] = useState(todolist.title);
    const [text, setText] = useState(todolist.text);
    const [state, setState] = useState(todolist.state);
    const [dateObj, setDateObj] = useState(new Date(todolist.date));
   
    // if(showUpdateTodolist) {
    //     setTitle(todolist.title)
    //     setText(todolist.text)
    //     setState(todolist.state)
    //     setDateObj(new Date(todolist.date))
    // }

    useEffect(() => {
        setTitle(todolist.title)
        setText(todolist.text)
        setState(todolist.state)
        setDateObj(new Date(todolist.date))
        console.log('loaded')

      },[showUpdateTodolist])


    const onSubmit = (e) => {
        e.preventDefault()

        if(!title){
            alert('Eneter title')
            return
        }

        if(!text){
            alert('Enter text')
            return
        }

        let date

        if(dateObj === null) {
            setDateObj(new Date())
            date = new Date().toDateString()

        }
        else{
            setDateObj(dateObj)
            date = dateObj.toDateString()
        }
        onSave(todolist.id,{title, text, state, date})
        setTitle(title);
        setText(text);
        setState(state);
        setShowUpdateTodolist(false)

        
        
    }
    return (
        <Modal
        show={showUpdateTodolist}
        onHide={()=>setShowUpdateTodolist(false)}
        >
            <Modal.Header closeButton>
                <Modal.Title>Change todolist</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TodolistForm
                onSubmit={onSubmit}
                title={title}
                setTitle={setTitle}
                text={text}
                setText={setText}
                state={state}
                setState={setState}
                date={dateObj}
                setDate={setDateObj}
                setShow={setShowUpdateTodolist}
                />
            </Modal.Body>


        </Modal>

    )
}

export default UpdateTodolistModal
