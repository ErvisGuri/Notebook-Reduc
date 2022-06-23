import React, { useState } from 'react'
import './NotebookList.css'

const NoteRowName = ({ note, handleVisible, filterNotes }) => {

    console.log(note.name)
    console.log(filterNotes)

    return (
        <>
            <ul className="note_list">
                <li
                    onChange={() => filterNotes}
                    onClick={() => handleVisible}
                    className='note1'>
                    {note.name}
                </li>
            </ul>
        </>
    )
}

export default NoteRowName 