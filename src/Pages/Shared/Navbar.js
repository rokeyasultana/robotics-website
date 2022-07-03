import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
   
   
    
    return (
        
<div>
   
<nav class="bg-primary border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
  <a  href="#" class="flex items-center">
      <img src="data:image/webp;base64,UklGRqoCAABXRUJQVlA4TJ0CAAAvokAHENegkI0kqC7LcP5orwRBtk1dxnB/tBNk29RlDPdHu5oAQBMkAxf9w3Exd1kHABQM6R/gcHxEPPhDwcbDwMH9QW0nZaBt21YVSdreTrpALO1Gofv//xQMJTPL54j+T4Bu/s/dL30873qD3X9N5p030A1N5p030A1N5p030A1N5p030A1tdt5AN7SJ/HrTmdt1Q5vITxvPc2pkQGzVDW0i32RaQghhCecDDs7HzjNJSkBo1A1tIt8lcT09kZ5KgCQDjjbd0CbyA/hGGZzKydS0G9pEvpUbx+yBJGlcvV+26SKPwft1rJ2L9yFJOgDCkrWFMEmyY/E+5EoO3i9npRvaRL6ZJKut1I/aQvWQNFJ3JldAkoNTytQXSRtVZ1I3tIn8AFUi16lyPcq49qJ+FknG9SYDnAc2dUObf/h+ZiuQDeCYNsDVfM4LsGgDljE74BwjuDFbbQPClAAsgZMioLtfd/5wd7jZP3HplIAsKQJT4STJg5MDL0lAUAInqeZgkZSBNAHbpOOI1ma3Nr2e86YDnCQZkIqzSIABqVjBPZAkycxMVNdRt2/s81eTXs9swCppu5eK/Nl2z7ioWihgbbLPatLrGScPmJQAk5SBsQjFCk4O1sLDckMONknmF5812TRGB1iDfVaTXo9NQJAmwJtGACuI0gF4BeCQNiAWjFcBSLIFmDIgqc0+q0mv57QBWVoAHMCmyuWhkQ9NI2WqjVwvMsDF0GSf1aRXCwFIVpSLPlskHVdZkv9I29UkHdS9ntpnNenVJgFJ0la4Q7W0FZvK7IswSZKtHyn5YjVJyr5Y7al9VpNe39bM9LGZrs1MT5uZrs1MD9b2WU16/eUr+6wmvd7Av7Oa9HoDUZ8+0esNRLXp9Qai2vT6OwMA" class="mr-3 h-6 sm:h-9" alt=""/>
     
  </a>
  <div class="flex md:order-2">
      
      <button data-collapse-toggle="mobile-menu-4" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li>
       <Link to="/home">Home</Link>
      </li>
      <li>
      <Link to="/about">About us</Link>
      </li>
      <li>
      <Link to="/services"> Services</Link>
      </li>
      <li>
      <Link to="/Products"> Products</Link>
      </li>
      <li>
      <Link to="/contact">Contact us</Link>
      </li>
      <li>
      <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
 
</div>

    );
};

export default Navbar;