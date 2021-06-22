import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Sdata from './Sdata';
import App from './App';
function xcard(val)
{
  return (
  <Card
  key={val.id}
  imgscr={val.imgscr}
   sname={val.sname}
   link={val.links}
/>);
}
const prop={
  behavior:'alternate',
  scrollDelay:'2s',
  scrollAmount:'12'
};
ReactDOM.render(
  <>
  {/* <App/> */}
  <marquee style={prop}>Profile of Prabhat Mishra</marquee>
  <div className="details">
   {Sdata.map(xcard)}
   </div>
  </>,
  document.getElementById('root')
);