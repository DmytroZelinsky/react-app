import React, { FormEvent } from 'react'
import DatePicker from 'react-date-picker'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
    onSubmit: (arg0: FormEvent)=>void,
    title: string,
    setTitle: (arg0: string) => void,
    text: string,
    setText : (arg0: string) => void,
    state: number,
    setState: (arg0: number) => void,
    date: Date,
    setDate : (arg0: Date) => void

}

const TodolistForm = ({onSubmit,title,setTitle,text, setText,state, setState, date, setDate} : Props) => {
    return (
        <Form onSubmit={(e) => onSubmit(e)}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Add title'
                    maxLength = {50}
                    value={title} onChange={(e) => setTitle(e.target.value)}/>
                </Form.Group>


                <Form.Group>
                <Form.Label>Text</Form.Label>
                    <Form.Control
                    placeholder='Add text'
                    as="textarea"
                    maxLength = {1250}
                    rows={6}
                    value={text} onChange={(e) => setText(e.target.value)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>State</Form.Label>
                    <Form.Select
                        value={state} 
                        onChange={(e) => setState(parseInt(e.currentTarget.value))}>
                        <option value={3}>Planning</option>
                        <option value={2}>In process</option>
                        <option value={1}>Done</option>
                    </Form.Select>
                </Form.Group>
                <div className="date-selector">
                    <Form.Label>Due date</Form.Label><br></br>
                    <DatePicker
                        value={date}
                        onChange={date => setDate(date)}
                        minDate={new Date()}
                    />
                </div >
                <div className="float-right">
                    <Button 

                    variant="primary" 
                    type="submit">
                        Submit
                    </Button>

                    {/* <Button 
                    variant ="danger" 
                    type="button"
                    onClick={() => setShow(false)}>
                        Cancel
                    </Button> */}
                </div>
            </Form>
    )
}

export default TodolistForm
