import React from 'react';

//STYLES
import './Notes.scss';

// REACTSTRAP COMPONENTS
import { Container } from 'reactstrap';

// COMPONENTS
import NoteCard from '../NoteCard/NoteCard.js';

const Notes = (props) => {
    return(
        <Container className="notes-container"> 
            <h1>Notes</h1>
            <NoteCard />
        </Container>
    )
}

export default Notes;