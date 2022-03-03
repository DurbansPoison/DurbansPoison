import React from 'react';
// import {Route, BrowserRouter, Switch, Link} from 'react-router-dom';
import Terminal from 'react-hackterm';


//define routes and paths here 
//let pathProjects = Projects().setPath({
//     thisPath(pathFromRoot('/projects')

// }


//find way to use figlet in hackterm
function TermNav() {
    return (
        <div>
                  <Terminal
        config={{
          mode: "root",
          modeText: "example.com",
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
          { //call into the dom the router and routes and paths
            name: "cd",
            description: "change directory, directories available: /projects, /about, /hack ",
            value: "/projects"
          }//would love to just use and [array] of the routes
        ]}
      />
        </div>
    )
}



export default TermNav;