import {useState} from 'react'
import Button from './Button'
import TodolistForm from './TodolistForm'
const Form = {
    
}
const AddTodolistModal = ({onSave,setShowAddTodolist}) => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [state, setState] = useState(3)
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
        setDateObj(null)
        setShowAddTodolist(false)
    }
    return (
        <>
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
        </>
    )
}

export default AddTodolistModal
