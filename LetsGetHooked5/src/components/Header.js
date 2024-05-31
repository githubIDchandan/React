import { LOGO_URL } from "../utils/constants";

const Header=()=>{
    return (
        <div className="parentHeader">
            <div>
                <img className="imgLogo" src={LOGO_URL}></img>
            </div>
            <div className="headerItem">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;