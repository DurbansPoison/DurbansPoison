/* eslint-disable no-undef */
import React from 'react';
import {
  Router,
  Route
}  from 'react-router-dom';
import Terminal from 'react-hackterm';

import Root from '../../pages/root/root.js';
import Projects from '../../pages/projects/projects.js';
import Links from '../../pages/links/links.js';
import Interests from '../../pages/interests/interests.js';
import About from '../../pages/about/about.js'
// want to use figlet to say developer name in font on hackterm
// import figlet from 'figlet'
// import useFiglet from 'use-figlet-react'
// ^^^^^^^^^^^documentation on use-figlet-hook in react   https://npm.io/package/react-hook-figlet



// define routes and paths here 
// let pathProjects = Projects().setPath({
//     thisPath(pathFromRoot('/projects')

// }


// find way to use figlet in hackterm


function TermNav() {
    return (
      <div>
        <Router>
          <Route path='/'>
            <Root id='root' />
          </Route>
          <Route path="/projects">
            <Projects id='projects' />
          </Route>
          <Route path='/links'>
            <Links />
          </Route>
          <Route path='interests'>
            <Interests id='interests' />
          </Route>
          <Route path='/about'>
            <About id='about' />
          </Route>
        </Router>

                  <Terminal
        config={{
          mode: "root",
          modeText: "ryanoboyle.xyz",
          width: 500,
          height: 300,
          edge: true,
          font: "monospace",
          text: 14
        }}
        theme="pure"
        bar="macos"
        command={[
          {
            name: "whoami",
            description: "Get package name",
            value: "TerminalNavComponent"
          },
          {
            name: "pwd",
            description: "Print working directory",
            value: "/"
          },
          { //call into the dom the router and routes and paths?
            name: "cd /",
            description: "change directory: /root ",
            value: "/",
            id: "root",
          },//would love to just use and [array] of the routes
          {
            name: "cd /projects",
            description: "change directory: /projects",
            value: '/projects',
            id: "projects"
          },
          {
            name: "cd /links",
            description: "change directory: /links",
            value: "/links",
            id: "links"
          },
          {
            name: "cd /interests",
            description: "change directory: /interests",
            value: "/interests",
            id: "interests"
          },
          {
            name: "cd /about",
            description: "change directory: /about",
            value: "/about",
            id: "about"

          }
        ]}
      />
       </div>
    )
}



export default TermNav;