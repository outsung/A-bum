import { useState, useRef } from 'react';
import './App.css';

import Buzz from './images/Buzz.png';
import Homesick from './images/Homesick.png';
import Painkiller from './images/Painkiller.png';
import Silence from './images/Silence.png';
import The_Butterfly_Effect from './images/The Butterfly Effect.png';

function App() {
  const bEl = useRef(null);
  const [scroll, setScroll] = useState(0);

  const _onScroll = () => {
    setScroll(bEl.current.scrollLeft);
  };

  return (
    <div onScroll={_onScroll} ref={bEl} className="b">
      <ul className="imageList">
        <ImageListItem image={Buzz} text="Buzz" scroll={scroll} linkText="READ MORE"/>
        <ImageListItem image={Homesick} text="Homesick" scroll={scroll} linkText="READ MORE"/>
        <ImageListItem image={Painkiller} text="Painkiller" scroll={scroll} linkText="READ MORE"/>
        <ImageListItem image={Silence} text="Silence" scroll={scroll} linkText="READ MORE"/>
        <ImageListItem image={The_Butterfly_Effect} text="The Butterfly Effect" scroll={scroll} linkText="READ MORE"/>
      </ul>
    </div>
  );
}

function ImageListItem(props) {
  const liEl = useRef(null);
  
  const _isVisible = () => {
    if(!liEl.current) return false;
    
    const bounds = liEl.current.getBoundingClientRect();
    
    // console.log((props.scroll - 370 + window.innerWidth >= bounds.left && props.scroll - 800 < bounds.right) ? "보이는거 : " + props.text : "");
    // return props.scroll - 370 + window.innerWidth >= bounds.left && props.scroll - 800 < bounds.right;
    return true;
  }
  
  const _getMoveImageXPx = () => {
    if(!liEl.current) return false;
    const bounds = liEl.current.getBoundingClientRect();
    
    const min = bounds.left - window.innerWidth;
    const max = bounds.right;
    const percentage = ((props.scroll - min) * 100) / (max - min);

    const newMin = -(window.innerWidth / 12) * 3;
    const newMax = 0;
    
    console.log("move x px : ", ((percentage - 0) / (100 - 0)) * (newMax - newMin) + newMin);
    
    return ((percentage - 0) / (100 - 0)) * (newMax - newMin) + newMin;
  }
  
  const _getStyleTransfromX = (x) => { return {transform : `translate3d(${x + 150}px, 0px, 0px)`}};

  return (
    <li ref={liEl} className="imageListItem">
      <div className="imageListItemImageBox">
        <img className="imageListItemImage" src={props.image} style={_isVisible() ? _getStyleTransfromX(_getMoveImageXPx()) : {}}/>
      </div>
      <div className="imageListItemContent">
        <h1 className="imageListItemText">{props.text}</h1>
        <div className="imageListItemLink">
          <div className="imageListItemLinkText">{props.linkText}</div>
        </div>
      </div>
    </li>
 );
}

export default App;