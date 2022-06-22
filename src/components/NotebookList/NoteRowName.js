import React from 'react'
import noteSlice from '../../features/noteSlice'
import './NotebookList.css'

const NoteRowName = ({ note }) => {

    return (
        <>
            <ul className="note_list">
                <li className='note1'>
                    {note.name}
                </li>
            </ul>
        </>
    )
}

export default NoteRowName