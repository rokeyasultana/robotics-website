import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
   
  const menuItems = <>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/services"> Services </Link></li>
  <li><Link to="/products"> Products </Link></li>
  <li><Link to="/blog">Blog</Link></li>
  <li><Link to="/about">About</Link></li>
<li><Link to="/contact">Contact us</Link></li>                             
</>
    
    return (
        
<div className="navbar bg-primary ">
          <div className="navbar-start text-black">
              <div className="dropdown">
                  <label tabIndex="0" className="btn btn-ghos lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2  text-blackshadow bg-base-100 rounded-box w-52">
                      {menuItems}
                  </ul>
              </div>
              <a className="btn btn-ghost normal-case text-xl font-sans hover:font-serif italic"><img src="data:image/webp;base64,UklGRqoCAABXRUJQVlA4TJ0CAAAvokAHENegkI0kqC7LcP5orwRBtk1dxnB/tBNk29RlDPdHu5oAQBMkAxf9w3Exd1kHABQM6R/gcHxEPPhDwcbDwMH9QW0nZaBt21YVSdreTrpALO1Gofv//xQMJTPL54j+T4Bu/s/dL30873qD3X9N5p030A1N5p030A1N5p030A1N5p030A1tdt5AN7SJ/HrTmdt1Q5vITxvPc2pkQGzVDW0i32RaQghhCecDDs7HzjNJSkBo1A1tIt8lcT09kZ5KgCQDjjbd0CbyA/hGGZzKydS0G9pEvpUbx+yBJGlcvV+26SKPwft1rJ2L9yFJOgDCkrWFMEmyY/E+5EoO3i9npRvaRL6ZJKut1I/aQvWQNFJ3JldAkoNTytQXSRtVZ1I3tIn8AFUi16lyPcq49qJ+FknG9SYDnAc2dUObf/h+ZiuQDeCYNsDVfM4LsGgDljE74BwjuDFbbQPClAAsgZMioLtfd/5wd7jZP3HplIAsKQJT4STJg5MDL0lAUAInqeZgkZSBNAHbpOOI1ma3Nr2e86YDnCQZkIqzSIABqVjBPZAkycxMVNdRt2/s81eTXs9swCppu5eK/Nl2z7ioWihgbbLPatLrGScPmJQAk5SBsQjFCk4O1sLDckMONknmF5812TRGB1iDfVaTXo9NQJAmwJtGACuI0gF4BeCQNiAWjFcBSLIFmDIgqc0+q0mv57QBWVoAHMCmyuWhkQ9NI2WqjVwvMsDF0GSf1aRXCwFIVpSLPlskHVdZkv9I29UkHdS9ntpnNenVJgFJ0la4Q7W0FZvK7IswSZKtHyn5YjVJyr5Y7al9VpNe39bM9LGZrs1MT5uZrs1MD9b2WU16/eUr+6wmvd7Av7Oa9HoDUZ8+0esNRLXp9Qai2vT6OwMA" alt="" /></a>
          </div>
          <div className="navbar-center hidden lg:flex text-white">
              <ul className="menu menu-horizontal p-0">
                  {menuItems}
              </ul>
          </div>
      </div>

    );
};

export default Navbar;