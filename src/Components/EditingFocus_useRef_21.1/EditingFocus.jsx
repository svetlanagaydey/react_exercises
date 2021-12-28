import React, { useState, useEffect, useRef } from 'react';

const Input = () => {
    const inputRef = useRef();
    useEffect(()=> {
        inputRef.current.focus();
        console.log(inputRef.current);
    })
    return (
        <input type="text" ref={inputRef} />
    )
}

const EditingFocus = () => {
    const [editMode, setEditMode] = useState(false);
    return (
        <div>
            <button onClick={() => setEditMode(!editMode)}>{editMode?"Edit":"Save"}</button>
            {!editMode && <Input />}         
        </div>
    )
}

export default EditingFocus;