import { useState } from "react";

export function Word(props) {
    const [IsEdit, setIsEdit] = useState(false);
    const onToggleEdit = ()=>{
        setIsEdit(!IsEdit);
    }
    return IsEdit ? <input onClick={onToggleEdit} value={props.children}/> : <span onClick={onToggleEdit}>{props.children}</span>;
}