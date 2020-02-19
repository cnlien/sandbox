import React from 'react';

import './Notes.scss';
import { Container } from 'reactstrap';
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