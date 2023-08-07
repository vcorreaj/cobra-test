import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';  
import {Link} from 'react-router-dom' 
const logo='https://medianet.com.ve/wp-content/uploads/2023/08/logo.png';
export const NavBar =() =>{
  const logout= ()=>{
    document.getElementById('nav').classList.remove("loginOn");
  }
    return (
      <Navbar collapseOnSelect expand="lg" className="Navbar shadow" id='nav'>
      <Container> 
        <Navbar.Brand href="#home"><img src={logo}  className="App-logo" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse role="nav" id="responsive-navbar-nav"> 
          <Nav> 
            <Link to="/search">Search</Link> 
            <Link to="/" className='onUser' >Login</Link> 
            <Link to="/profile" className='login' >Profile</Link> 
            <Link to="/" onClick={logout}  className='login'>Logout</Link>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
} 