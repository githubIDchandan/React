import React from "react";
import ReactDOM from "react-dom";


const Title=()=>{
    return (
        <div>
            <p>this is title compont</p>
        </div>
    )
}

// function compont is function which basically return jsx.
const HeadingComponent=()=>{
    return (
        // give you error
        // console.log(2+7)
        // correct
        // {console.log(2+7)}
        <div>
            {/* or {Title} */}
            <Title/>
            <h1>heading componet</h1>
        </div>
    )
 }

//  inside jsx if you want to write a valid js logic write inside {}


// const heading=<h2>Namaste jsx</h2>
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);