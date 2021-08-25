import React from 'react'
import DatePicker from 'react-date-picker'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const TodolistForm = ({onSubmit,title,setTitle,text, setText,state, setState, date, setDate, setShow}) => {
    return (
        <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Add title'
                    value={title} onChange={(e) => setTitle(e.target.value)}/>
                </Form.Group>


                <Form.Group>
                <Form.Label>Text</Form.Label>
                    <Form.Control
                    placeholder='Add text'
                    as="textarea"
                    
                    rows={6}
                    value={text} onChange={(e) => setText(e.target.value)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>State</Form.Label>
                    <Form.Select
                        value={state} 
                        onChange={(e) => setState(parseInt(e.target.value))}>
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
                <div class="float-right">
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
