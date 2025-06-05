import React, { useState, useEffect } from 'react';

const DIMENSIONS = [
  '6x6x6', '8x8x8', '8x6x4', '10x8x6', '12x12x12', '6x6x4',
  '10x10x10', '12x6x6', '8x8x4', '14x14x14'
];
const MATERIALS = ['White', 'Kraft'];

function MyForm({ onUpdate }) {
  const [orderNo, setOrderNo] = useState('');
  const [weight, setWeight] = useState('');
  const [dimension, setDimension] = useState(DIMENSIONS[0]);
  const [material, setMaterial] = useState(MATERIALS[0]);

  useEffect(() => {
    onUpdate({ orderNo, weight, dimension, material });
  }, [orderNo, weight, dimension, material, onUpdate]);

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 300 }}>
      <label>
        Order Number:
        <input
          type="number"
          value={orderNo}
          onChange={e => setOrderNo(e.target.value)}
          placeholder="e.g. 12345"
        />
      </label>

      <label>
        Dimensions:
        <select value={dimension} onChange={e => setDimension(e.target.value)}>
          {DIMENSIONS.map(dim => (
            <option key={dim} value={dim}>{dim}</option>
          ))}
        </select>
      </label>

      <label>
        Weight (ECT):
        <input
          type="number"
          value={weight}
          onChange={e => setWeight(e.target.value)}
          placeholder="e.g. 32"
        />
      </label>

      <label>
        Material:
        <select value={material} onChange={e => setMaterial(e.target.value)}>
          {MATERIALS.map(mat => (
            <option key={mat} value={mat}>{mat}</option>
          ))}
        </select>
      </label>
    </form>
  );
}

export default MyForm;
