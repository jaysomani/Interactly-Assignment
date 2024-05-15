import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNode } from '../utils/flowSlice';
import { toast } from 'react-toastify';

let shape = 'rectangle';

const CreateNode = () => {
  const dispatch = useDispatch();
  const [showOptions, setShowOptions] = useState(false);

  const handleCreateNode = (shape) => {
    dispatch(addNode({ shape }));
    setShowOptions(false);
  };

  return (
    <div style={{
      position: 'absolute',
      top: '10px',
      left: '40px',
      zIndex: 4
    }}>
      <button onClick={() => setShowOptions(true)}
        style={{
          padding: '10px',
          backgroundColor: '#3B82F6',
          color: 'white',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >Create Node</button>
      {showOptions && (
        <div style={{
          marginTop: '10px'
        }}>
          <button onClick={() => { shape = 'circle'; handleCreateNode('circle') }}
            style={{
              padding: '5px 10px',
              marginRight: '10px',
              backgroundColor: '#3B82F6',
              color: 'white',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >Circle</button>
          <button onClick={() =>{ shape = 'rectangle'; handleCreateNode('rectangle') }}
            style={{
              padding: '5px 10px',
              backgroundColor: '#3B82F6',
              color: 'white',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >Rectangle</button>
        </div>
      )}
    </div>
  )
}

export { shape };
export default CreateNode;
