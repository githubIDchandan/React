import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    // console.log(props)
    // const {menu}=props
    // console.log(menu)
    const {resData}=props;
    // console.log(resData)
    return (
        <div className="res-card">
            <div>
                <img className="foodimg" src={CDN_URL+resData.info.cloudinaryImageId}></img>
            </div>
            <div className="foodname">
                <h2 className="fname">{resData.info.name}</h2>
                <h3 className="fname">{resData.info.cuisines.join(", ")}</h3>
                <h4 className="fname">{resData.info.avgRating} star</h4>
                <h3 className="fname">{resData.info.sla.deliveryTime}{" "}mins</h3>
            </div>
        </div>
    )
}

export default RestaurantCard;