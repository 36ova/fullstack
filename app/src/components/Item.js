import { useState } from "react";

export function Item({ value, onSave, isNew = false }) {
  const [isEdit, setIsEdit] = useState(isNew);
  const [pValue, setPValue] = useState(value);

  const handleChange = (event) => {
    setPValue(event.target.value);
  };

  const handleSave = () => {
    onSave(pValue);
    setIsEdit(false);
  };

  return isEdit ? (
    <div>
      <input value={pValue} onChange={handleChange} />
      <button onClick={handleSave}>Save</button>
    </div>
  ) : (
    <span onClick={() => setIsEdit(true)}>{value}</span>
  );
}
