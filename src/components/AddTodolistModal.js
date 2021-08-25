import {useState} from 'react'
import TodolistForm from './TodolistForm'
import { Modal } from 'react-bootstrap'
const Form = {
    
}
const AddTodolistModal = ({onSave,setShowAddTodolist, showAddTodolist}) => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [state, setState] = useState(1)
    const [dateObj, setDateObj] = useState(new Date())

    const onSubmit = (e) =>
    {
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
        onSave({title, text, state, date});
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
                    title={title}
                    setTitle={setTitle}
                    text={text}
                    setText={setText}
                    state={state}
                    setState={setState}
                    date={dateObj}
                    setDate={setDateObj}
                    setShow={setShowAddTodolist}
                    />
                </Modal.Body>
            </Modal>

        </>
    )
}

export default AddTodolistModal
