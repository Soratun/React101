import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import HelloCoponent from './Coponents/';
import reportWebVitals from './reportWebVitals';

//การสร้าง component แบบ function
// function HelloCoponent() {
//   return <h1>สวัสดี Coponent ครับผม1 </h1>;
// }
// //การสร้าง component แบบ class
// class HelloCoponent2 extends React.Component {
//   render() {
//     return <h1>สวัสดี Coponent ครับผม2</h1>;
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();