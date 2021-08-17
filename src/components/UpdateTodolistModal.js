import React from 'react'
import {useState, useEffect} from 'react'
import { createAPIEndpoint, ENDPOINTS } from '../api' 
import TodolistForm from './TodolistForm'

function UpdateTodolistModal({onSave,setShowUpdateTodolist,id}) {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [state, setState] = useState(3)
    const [dateObj, setDateObj] = useState(new Date())

    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.TODOLISTS).fetchById(id)
        .then(res => {
            setTitle(res.data.title)
            setText(res.data.text)  
            setState(res.data.state)
            setDateObj(new Date(res.data.date))
        })
    },[])

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
        const date = dateObj === null? (new Date()).toDateString():dateObj.toDateString()   
        onSave(id,{title, text, state, date});
        setTitle('');
        setText('');
        setState(1);
        setDateObj(null)
        setShowUpdateTodolist(false)
        
    }
    return (
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
        />
    )
}

export default UpdateTodolistModal
