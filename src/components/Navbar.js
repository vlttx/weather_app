import React from 'react';



const Navbar = ({changeRoute}) => <div>
<button type="button" className="btn btn-light btn-lg mr-3" onClick={()=> changeRoute('currently')}>Current</button>
<button type="button" className="btn btn-light btn-lg mr-3" onClick={()=> changeRoute('hourly')}>Hourly</button>
<button type="button" className="btn btn-light btn-lg mr-3" onClick={()=> changeRoute('daily')}>Daily</button>
</div>

export default Navbar;