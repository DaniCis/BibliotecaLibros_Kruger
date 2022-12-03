import { NavLink } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import logo from '../assets/kruger-blanco.png'

const Navigation = ( ) => {
    return(
        <Navbar expand="lg" className='container-nav'>
            <Container>
                <Navbar.Toggle aria-controls="responsive" />
                <Nav>
                    <Navbar.Brand  className='nav-title'>
                        <img alt="" src={logo}/>{' '} KrugerLibrary
                    </Navbar.Brand>
                </Nav>
                <Navbar.Collapse id="responsive" className="navPrincipal">
                    <Nav className="nav1">
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/create">Add New Book</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation