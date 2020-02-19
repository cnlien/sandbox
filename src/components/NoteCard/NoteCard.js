import React from 'react';
import { connect } from 'react-redux';

import './NoteCard.scss';
import { Card, Row, CardHeader, CardText, CardBody, Button, CardFooter } from 'reactstrap';

const NoteCard = (props) => {
    // console.log(props)
    return(
        <Row>
            <Card className="note-card">
                <CardHeader>
                    <h2>{props.title}</h2>
                </CardHeader>
                <CardBody>
                    <CardText>{props.note}</CardText>
                </CardBody>

                <CardFooter>
                    <div className="note-buttons">
                        <Button size="sm">Delete Note</Button>
                        <Button size="sm">Edit Note</Button>
                    </div>
                </CardFooter>
            </Card>
        </Row>
    )
}

const mapStateToProps = (state) => {
    // console.log(state.notesReducer.notes);
    return {
        notes: state.notesReducer.notes
    }
}



export default connect(mapStateToProps, {}) (NoteCard);