import React from 'react'
import './NotebookList.css'

const NoteRowName = ({ note, onChangeContent }) => {

    const handleNoteRowNameClick = () => {
        onChangeContent(note.id);
    }

    return (
        <>
            <ul className="note_list">
                <li

                    onClick={handleNoteRowNameClick}
                    className='note1'>
                    {note.name}
                </li>
            </ul>
        </>
    )
}

export default NoteRowName