import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body=()=>{

   const[listofres,setlistofres]=useState(resList);

    return(
       <div className="parentBody">
        <div>
            <input className="foodseacrh" placeholder="Search Your Food"></input>
            <button className="btn">Seacrh</button>
            <button className="btn2" onClick={()=>{
              
              const filterRes=resList.filter((item)=>{
                return item.info.avgRating>4.3;
              })
              console.log("clicked")
              // setlistofres(filterRes)

            }}>{"🍽️"}</button>
        </div>
        <div className="res-container">
          {/* <RestaurantCard menu={objlist}/> */}
          {/* <RestaurantCard resData={resList[2]}/> */}
          {
            listofres.map((item)=>{
                return(
                    <RestaurantCard key={item.info.id} resData={item}/>
                )
            })
          }
          
        </div>
       </div>
    )
}


export default Body;