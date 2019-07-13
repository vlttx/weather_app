import React from 'react';
import Button from 'react-bootstrap/Button';


const Navbar = props => <div>
<button type="button" className="btn btn-primary btn-lg mr-1">Current</button>
<button type="button" className="btn btn-primary btn-lg mr-1">Minutely</button>
<button type="button" className="btn btn-primary btn-lg mr-1">Hourly</button>
<button type="button" className="btn btn-primary btn-lg mr-1">Daily</button>
</div>

export default Navbar;