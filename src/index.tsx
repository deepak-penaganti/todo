import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppClass } from './AppClass';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//     <AppClass />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

setInterval(() => {
  ReactDOM.render(
    <React.StrictMode>
      {/* <App time={new Date().getTime()} /> */}
      {new Date().getMinutes() !== 50 ? <App time={new Date().getTime()} /> : undefined}
      {new Date().getMinutes() !== 44 ? <AppClass time={new Date().getTime()} /> : undefined}
    </React.StrictMode>,
    document.getElementById('root')
  );
}, 3000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
