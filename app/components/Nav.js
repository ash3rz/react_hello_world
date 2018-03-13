var React = require('react');
var Link = require('react-router-dom');
var NavLink = require('react-router-dom').NavLink;
// NavLink will let you change the styling of the link based on the route you're at
// Link is just for the actual link

//Home has the exact attribute to make sure Home looks active only when we're at / and not /whatever
function Nav() {
    return (
        <ul className="nav">
            <li>
                <NavLink exact activeClassName='active' to='/'>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/battle'>
                    Battle
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/popular'>
                    Popular
                </NavLink>
            </li>
        </ul>
    )
}

module.exports = Nav;