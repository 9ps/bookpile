import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const BOOKS = [{
	title: "Red Star Over the Third World",
	author: "Vijay Prashad",
	pages: 134,
},{
	title: "One Hundred Years of Solitude",
	author: "Gabriel García Márquez",
	pages: 417,
},{
	title: "Holes",
	author: "Louis Sachar",
	pages: 233,
},{
	title: "The Black Jacobins",
	author: "C.L.R. James",
	pages: 428,
}];

const container = ReactDOM.createRoot(document.getElementById('root'));
container.render(
  <React.StrictMode>
    <App books={BOOKS}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

