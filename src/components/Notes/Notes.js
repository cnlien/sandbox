import React from 'react';
import { connect } from 'react-redux';


//STYLES
import './Notes.scss';

// REACTSTRAP COMPONENTS
import { Container } from 'reactstrap';

// COMPONENTS
import NoteCard from '../NoteCard/NoteCard.js';

const Notes = (props) => {

    return(
        <Container className="notes-container"> 
            {props.notes.map(note => (
                <NoteCard
                    title={note.title}
                    note={note.note}
                />
            ))}
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        notes: state.notesReducer.notes
    }
}

export default connect(mapStateToProps, {}) (Notes);