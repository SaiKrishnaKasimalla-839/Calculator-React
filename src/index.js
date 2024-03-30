import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cal from'./Calculator';
let App=()=>{
  return(
  <Cal/>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App/>
);
