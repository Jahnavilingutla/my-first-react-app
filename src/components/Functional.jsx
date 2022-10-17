import React from "react";
//import the Functional.css
import '../Styles/Functional.css';
//we can create many components
//we can export only one component

//Functional component -> return( embed HTML )
//export default function FunctionalComponent()
//Components - must start with an Uppercase
function FunctionalComponent()
{
 return(
    <h4><FunctionalComponent4></FunctionalComponent4>I AM THE FIRST FUNCTIONAL COMPONENT AND <FunctionalComponent1></FunctionalComponent1></h4>
 )
}
function FunctionalComponent1()
{
 return(
    <h6>I AM THE SECOND FUNCTIONAL COMPONENT<FunctionalComponent2></FunctionalComponent2></h6>
 )
}
//arrow function
const FunctionalComponent2=()=>{
    return(
        <h6>I AM THE THIRD FUNCTIONAL COMPONENT</h6>
    )
}

//arrow function 
//React Fragments
const FunctionalComponent4=()=>{
    return(
        <table style={{width:'100'}}>
            <thead>
                <tr>
                    <FunctionalComponent5></FunctionalComponent5>
                </tr>
            </thead>
        </table>
    )
}
//React Fragemnts - <> </> or <React.Fragment>
//React Fragemnts - Which are used for displaying the set of child elements without a parent element
//To avoid unnecceary elements to be rendered
const FunctionalComponent5=()=>{
    return(
        <React.Fragment>
                               <h5>WELCOME TO REACT</h5> 
        </React.Fragment>
    )
}

//only one export
export default FunctionalComponent;