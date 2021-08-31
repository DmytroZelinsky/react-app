import { FormEvent, useState } from 'react'
import TodolistForm from './TodolistForm'
import { Modal } from 'react-bootstrap'
import { ITodoItem } from '../types/types'
type Props = {
    onAdd:(arg0: ITodoItem) => void,
    setShowAddTodolist: (arg0: boolean) => void,
    showAddTodolist: boolean
}
const AddTodolistModal = ({onAdd,setShowAddTodolist, showAddTodolist} : Props) => {
    const [newTitle, setTitle] = useState('')
    const [newText, setText] = useState('')
    const [newState, setState] = useState(1)
    const [newDateObj, setDateObj] = useState(new Date())

    const onSubmit = (e : FormEvent) =>
    {
        e.preventDefault()
        if(!newTitle){
            alert('Eneter title')
            return
        }
        if(!newText){
            alert('Enter text')
            return
        }    
        const newDateString = newDateObj === null? (new Date()).toDateString() : newDateObj.toDateString()   
        const newTodolist: ITodoItem = {
            id:0,
            title: newTitle,
            text: newText,
            state: newState,
            date: newDateString
        }
        onAdd(newTodolist);
        setTitle('');
        setText('');
        setState(1);
        setDateObj(new Date())
        setShowAddTodolist(false)
    }
    return (
        <>
            <Modal
            show={showAddTodolist}
            onHide={()=>setShowAddTodolist(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add todolist</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <TodolistForm
                    onSubmit={onSubmit}
                    title={newTitle}
                    setTitle={setTitle}
                    text={newText}
                    setText={setText}
                    state={newState}
                    setState={setState}
                    date={newDateObj}
                    setDate={setDateObj}
                    />
                </Modal.Body>
            </Modal>

        </>
    )
}

export default AddTodolistModal
