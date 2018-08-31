import React, { Fragment } from 'react';

const NoteViewer = ({note, func}) => {
    return (
        <Fragment>
            <h2>{note.title}</h2>
            <p>{note.body}</p>
            <button onClick={func} >Edit</button>
        </Fragment>
    );
}

export default NoteViewer;
