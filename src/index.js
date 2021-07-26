import React from 'react';
import ReactDOM from 'react-dom';

const name = "Ejim Michael";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p> Created by {name}</p>
    <p>Copyright &copy; {year}</p>
  </div>,
   document.getElementById('root')
);