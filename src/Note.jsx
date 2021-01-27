import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Note = () => {
    return (
        <>
            <div className="note">
                <h1>title</h1>
                <br />
                <p>This is the Content</p>
                <button className="btn">
                    <DeleteIcon className="deleteIcon" />
                </button>
            </div>
        </>
    )
}


export default Note;