import React from 'react';

import './NoteCard.scss';
import { Card, Row, CardTitle, CardHeader, CardText, CardBody, Button, CardFooter } from 'reactstrap';

const NoteCard = (props) => {
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

export default NoteCard;