import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import { SlLocationPin } from 'react-icons/sl';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useStateValue } from './StateProvider';
import { TiShoppingCart } from "react-icons/ti";
// import { auth } from './firebase'; // Assuming auth is imported from firebase

function Header() {
  const [{ basket}] = useStateValue();

  // const logout = () => {
  //   if (user) {
  //     auth.signOut();
  //   }
  // };

  return (
    
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className='header_location1'>
      <Link className="header_location">
        <SlLocationPin className="header_locationPin" />
        <p>
          <span className='header_locationName'>Deliver to BENJAMIN</span>
          Kharar 140301
        </p>
      </Link></div>

      <div className="header_DropDown">
        <p>ALL</p>
        <IoMdArrowDropdown className="DropDown" />
      </div>

      <div className="header_search">
        <input type="text" className="header_searchInput" placeholder='Search Amazon.in'/>
        <Link>
          <IoSearch className="header_searchIcon" />
        </Link>
      </div>

      <div className="header_language">
        <img
          className="language_logo"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
          alt="Flag"
        />

        <select className="selectedCountry">
          <option value="India">EN</option>
          <option value="Usa">हिन्दी - HI</option>
          <option value="Japan">தமிழ் - TA</option>
          <option value="Japan">తెలుగు - TE</option>
          <option value="Japan">ಕನ್ನಡ - KN</option>
          <option value="Japan">മലയാളം - ML</option>
          <option value="Japan">বাংলা - BN</option>
        </select>
      </div>

      <div className="header_nav">
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Hello,</span>
            <span className="header_optionLineTwo">Benjamin</span>
          </div>
        </Link>

        <Link to="/Order" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Return</span>
            <span className="header_optionLineTwo">& Order</span>
          </div>
        </Link>
      </div>

      <Link to="/Checkout" className="header_link">
        <div className="header_optionBasket">
          {/* Assuming basket is an array, get its length */}
          <span className="header_BasketCount">
            {basket.length}
            <TiShoppingCart className='header_cart' />
          </span>
          <span className="Cart">Cart</span>
        </div>
      </Link>
    </nav>
    
  );
}

export default Header;
