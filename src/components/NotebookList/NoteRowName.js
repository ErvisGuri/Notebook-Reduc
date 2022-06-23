import React from 'react'
import './NotebookList.css'

const NoteRowName = ({ note, filterNotes, foundNotes }) => {

    console.log(foundNotes)
    return (
        <>
            <ul className="note_list">
                <li
                    onChange={() => filterNotes}
                    onClick={() => foundNotes}
                    className='note1'>
                    {note.name}
                </li>
            </ul>
        </>
    )
}

export default NoteRowName 