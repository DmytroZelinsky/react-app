import React, { FormEvent } from 'react'
import {useState, useEffect} from 'react'
import TodolistForm from './TodolistForm'
import { Modal } from 'react-bootstrap'
import { createAPIEndpoint, ENDPOINTS } from '../api';
import { ITodoItem } from '../types/types';

type Props = {
    onUpdate: (arg0: number,arg1: ITodoItem) => void,
    setShowUpdateTodolist: (arg0: boolean) => void,
    showUpdateTodolist: boolean,
    todolist: ITodoItem
}

function UpdateTodolistModal({onUpdate,setShowUpdateTodolist,showUpdateTodolist,todolist}: Props) {
    const [updatedTitle, setTitle] = useState(todolist.title);
    const [updatedText, setText] = useState(todolist.text);
    const [updatedState, setState] = useState(todolist.state);
    const [updatedDateObj, setDateObj] = useState(new Date(todolist.date));
   

    useEffect(() => {
        setTitle(todolist.title)
        setText(todolist.text)
        setState(todolist.state)
        setDateObj(new Date(todolist.date))
        console.log('loaded11')

    },[showUpdateTodolist])


    const onSubmit = (e:FormEvent) => {
        e.preventDefault()

        if(!updatedTitle){
            alert('Eneter title')
            return
        }

        if(!updatedText){
            alert('Enter text')
            return
        }

        let updatedDateString

        if(updatedDateObj === null) {
            setDateObj(new Date())
            updatedDateString = new Date().toDateString()

        }
        else{
            setDateObj(updatedDateObj)
            updatedDateString = updatedDateObj.toDateString()
        }
        const updatedTodolist:ITodoItem = {
            id: todolist.id,
            title: updatedTitle,
            text: updatedText,
            state: updatedState,
            date: updatedDateString
        }
        onUpdate(todolist.id,updatedTodolist)
        // setTitle(title);
        // setText(text);
        // setState(state);
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
                title={updatedTitle}
                setTitle={setTitle}
                text={updatedText}
                setText={setText}
                state={updatedState}
                setState={setState}
                date={updatedDateObj}
                setDate={setDateObj}
                />
            </Modal.Body>


        </Modal>

    )
}

export default UpdateTodolistModal
