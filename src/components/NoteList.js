import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, func }) => {
    
    const limitContent = (title, limit = 25) => {
        const newTitle = [];
        if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
            newTitle.push(cur);
            }
        return acc + cur.length;
        }, 0);
        return `${newTitle.join(' ')} ...`;
        }
    return title;
    }

    let notesArray = notes.map(note => {
        const newBody = limitContent(note.body, 25)
        return <NoteItem key={note.id} body={newBody} note={note} func={func}/>
        }
    )

    return (
        <ul>
            {notesArray}
        </ul>
    );
}

export default NoteList;
