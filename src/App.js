/* eslint-disable react/jsx-no-comment-textnodes */
// import logo from './logo.svg';
import React from 'react';

import './App.css';
import TermNav from './components/TermNav/TermNav.js';
//do i need to call in the props or logic on this file? or is it ok to define and call in the the TermNav Component?
//import Footer from './components/Footer/Footer.js'
function App() {
  return (
    <div className="App">

      <TermNav className="Term"/>
      /*does react router logic go here or TermNav components*/
      /*ideally ^V would both be static, while the content itself would be loaded with the TermNav component*/
     {/* /* <Footer /> */}
         </div>
  );
}

export default App;