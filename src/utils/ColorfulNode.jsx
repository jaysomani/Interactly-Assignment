import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNode } from "../utils/flowSlice";
import { Handle, Position } from "reactflow";
import styles from "./ColorfulNode.module.css";
import close from "/close.svg";
import { shape } from "../components/CreateNode";
import { toggleSidebar } from "./sidebarSlice";


const ColorfulNode = ({ id, data, isConnectable }) => {
  const [deleteIconVisible, setDeleteIconVisible] = useState(false);
  const dispatch = useDispatch();
  console.log('Shape:', shape);

  const removeNode = (e) => {
    e.stopPropagation(); 
    dispatch(deleteNode({ id: id }));
  };

  const handleNodeClick = (e) => {
    e.stopPropagation();
    dispatch(toggleSidebar({ isOpen: true, nodeId: id }));
  };

  return (
    <div
      className={`${styles.colorfulNode} ${styles[shape]}`}
      onMouseOver={() => setDeleteIconVisible(true)}
      onMouseOut={() => setDeleteIconVisible(false)}
      onClick={handleNodeClick}
    >
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div className={` ${styles.shape}`}>{data}</div>

      <button
        onClick={removeNode}
        className={`${styles.delete} ${
          !deleteIconVisible && styles.invisible
        }`}
      >
        <img src={close} alt="delete" title={"Delete " + data} />
      </button>
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default ColorfulNode;
