// MyForm.js
import React, { useState, useEffect } from 'react';

function MyForm({ onUpdate }) {
  const [option, setOption] = useState('A');
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    onUpdate({ option, checked });
  }, [option, checked, onUpdate]);

  return (
    <form>
      <select value={option} onChange={e => setOption(e.target.value)}>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
      </select>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
        />
        Check me!
      </label>
    </form>
  );
}

export default MyForm;
