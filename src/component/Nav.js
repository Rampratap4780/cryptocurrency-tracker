import React from 'react';
import './Nav.css';
import { Link } from "react-router";
function Nav() {
  return (
    <div>
      <div className='navBar'>
        <h1>PricePulseCrypto</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/News">News</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>

        <div className="navRight">
          <select>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
          </select>

          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
