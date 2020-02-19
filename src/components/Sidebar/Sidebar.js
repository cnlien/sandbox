import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Container, Form, Input, Button } from 'reactstrap';
import { addNote } from '../../actions/actions';

import './Sidebar.scss';

const Sidebar = (props) => {
    const [note, setNote] = useState({title:"", note:"",});

    const handleChange = (e) => {
        setNote(
            {[e.target.title]: e.target.value}
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setNote({title:"", note:"",})
    }

    {console.log(note)}

    return(
        <Container className="sidebar">
            <h2>New Note</h2>
            <Form>
                <Input
                    type="text"
                    name="title"
                    className="noteTitle"
                    placeholder="New Note Title"
                    onChange={handleChange}
                />

                <Input
                    type="textarea"
                    name="note"
                    className="newNote"
                    placeholder="Click Here to Start Typing Your Note"
                    onChange={handleChange}
                />
                <Button block>Add Note</Button>
            </Form>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        notes: state.notesReducer.notes
    }
}

export default connect(mapStateToProps, { addNote }) (Sidebar);