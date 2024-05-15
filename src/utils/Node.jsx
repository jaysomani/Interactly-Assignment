
import React from 'react';
import ColorfulNode from './ColorfulNode';

const Node = ({ node }) => {

  return (
    <ColorfulNode
      id={node.id}
      data={node.data}
      isConnectable={node.isConnectable}
      shape={node.shape} 
    />
  );
};

export default Node;
