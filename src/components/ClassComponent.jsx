import React from "react";
import '../Styles/ClassComponent.css';
//class component

class ClassComponent extends React.Component{
    render(){
        return(
            <h4>< FunctionalComponent></FunctionalComponent> FIRST CLASS COMPONENT  <ClassComponent1></ClassComponent1></h4>
        )
    }
}

class ClassComponent1 extends React.Component{
    render(){
        return(
            <p>React class based components are the bread and butter of most modern web apps built in ReactJS. These components are simple classes (made up of multiple functions that add functionality to the application). All class based components are child classes for the Component class of ReactJS. </p>
        )
    }
}

function FunctionalComponent()
{
 return(
    <h5>I AM A FUNCTIONAL COMPONENT</h5>
 )
}

export default ClassComponent;