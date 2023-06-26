import React from 'react';
import './Flag.scss';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface FlagProps {
  content: string;
  state: [string[], React.Dispatch<React.SetStateAction<string[]>>];
}

export default function Flag(props: FlagProps) {
  const state = props.state[0];
  const setState = props.state[1];
  
  function removeElement(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    const flagContent = e.currentTarget.parentElement?.textContent;
    const newArray = state.filter(item => item !== flagContent);
    setState(newArray)  
  }
  
  return (
    <div className="flag">
      <p>{props.content}</p>
      <AiOutlineCloseCircle onClick={removeElement} />
    </div>
  );
}
