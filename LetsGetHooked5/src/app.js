import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// const objlist={
//     name: "kfc",
//     price: 200
// }


const AppLayout=()=>{
    return (
        <div>
        <Header/>
        <Body/>
        <Footer/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);