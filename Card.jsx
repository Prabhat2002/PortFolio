import React from 'react';
import './index.css';
function Card(props) {
    return (
      <>
        <div className="card">
          <img src={props.imgscr}  alt="Not Found"/>
          <div>
            <h2>{props.sname}</h2>
            <button><a href={props.link}>visit now</a></button>
          </div>
        </div>
      </>
    );
  }
export default Card;