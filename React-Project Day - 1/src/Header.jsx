import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Header(){
    return(
        <div className="head" style={{justifyContent:"space-around"}}>
            <ul>
                <li className="head"><img src="https://i.pinimg.com/564x/92/a6/23/92a62329b444411043c04404c5e11e1e.jpg" style={{height:"50px",alignItems:"center"}} alt="" /></li>
            </ul>
            <ul style={{display:"flex"}}>
                <li className="head" style={{display:"flex"}}>home</li>
                <li className="head">contect</li>
                <li className="head">about</li>
                <li className="head">service</li>
            </ul>
            <ul style={{display:"flex"}}>
                <li className="head"><FaFacebookF /></li>
                <li className="head"><FaTwitter /></li>
                <li className="head"><FaInstagram /></li>
            </ul>
        </div>
        
    )
}
export default Header