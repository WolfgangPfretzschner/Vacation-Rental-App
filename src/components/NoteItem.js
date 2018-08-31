import React from 'react';

const NoteList = ({ note, body, func }) => {

    return (
        <li onClick={() => func(note.id)}>
            <h2>{note.title}</h2>
            <p>{body}</p>
        </li>
    );
}

export default NoteList;
