import React from 'react';

function ResetButton({ resetTodos }) {
  return (
    <button className="reset-button" onClick={resetTodos}>
      Reset
    </button>
  );
}

export default ResetButton;
