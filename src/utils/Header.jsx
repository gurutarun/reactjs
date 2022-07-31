import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [isNavOpen , setIsNavOpen] = useState(false)

    return (
        <div>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={setIsNavOpen(true)} />
                    <NavbarBrand className="mr-auto" href="/">
                        <img src='img/logo.png' height="30" width="41" alt='Ristorante Con Fusion' />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/students'><span className="fa fa-home fa-lg"></span> Students</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/teachers'><span className="fa fa-info fa-lg"></span>  Teachers</NavLink>
                                </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default Header;