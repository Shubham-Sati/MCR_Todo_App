import React, { useState } from "react";
import "./Items.css";

const Items = ({
  text,
  completed,
  id,
  updateCompleted,
  deleteTodo,
  updateText,
}) => {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleKeyPress = (e) => {
    if (e.key !== "Enter") {
      return;
    }

    if (handleCheck()) {
      setEdit(false);
      return;
    }

    updateText(id, editText);
    setEdit(false);
  };

  const handleCheck = () => {
    if (text === editText) {
      return true;
    }
  };

  const handleSet = () => {
    if (completed === true) {
      return;
    }

    setEdit(true);
  };

  return (
    <div className="item">
      <div className="circle" onClick={() => updateCompleted(id)}>
        {completed ? <span>&#10003;</span> : ""}
      </div>
      <div
        className={completed ? "strike" : ""}
        onDoubleClick={() => handleSet()}
      >
        {edit ? (
          <input
            autoFocus
            type="text"
            className="inputBox"
            value={editText}
            onChange={(e) => {
              setEditText(e.target.value);
            }}
            onBlur={() => {
              setEdit(false);
              updateText(id, editText);
            }}
            onKeyPress={handleKeyPress}
          />
        ) : (
          text
        )}
      </div>
      <div className="close" onClick={() => deleteTodo(id)}>
        X
      </div>
    </div>
  );
};

export default Items;
