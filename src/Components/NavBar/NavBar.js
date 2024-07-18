import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import { IoSearchSharp } from "react-icons/io5";

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <div className="nav-bar">
              <div className="nav-head">
                  <div className="nav-amaz">
                      <h1>Amazon.in</h1>
                  </div>
                  <div className="nav-add">
                      <p>Address:<br />
                      Lovely Professional University
                      </p>
                  </div>
              </div>
              <div className="nav-search">
                  <input className='nav-search-input' type="text" placeholder="Search..." />
                  <button className="nav-search-button" onClick={()=>navigate("/Products")}><IoSearchSharp /></button>
              </div>
              <div className="nav-info">
                <div></div>
                <div className="nav-info-main">
                <div className='nav-info-main-sign' onClick={()=>navigate("/SignUp")}>Sign In</div>
                <div className='nav-info-main-cart' onClick={()=>navigate("/Cart")}>Cart</div>
                </div>
                  
              </div>
          </div>
    );
}

export default NavBar;
