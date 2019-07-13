import React from 'react';



const Navbar = ({changeForecast}) => <div>
<button type="button" className="btn btn-light btn-lg mr-3" onClick={()=> changeForecast('currently')}>Current</button>
<button type="button" className="btn btn-light btn-lg mr-3" onClick={()=> changeForecast('hourly')}>Hourly</button>
<button type="button" className="btn btn-light btn-lg mr-3" onClick={()=> changeForecast('daily')}>Daily</button>
</div>

export default Navbar;