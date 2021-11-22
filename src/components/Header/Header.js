import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';
import Button from '@restart/ui/esm/Button';
import useAuth from '../Hooks/useAuth';

import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";

// import { FaUserCircle } from "react-icons/fa";


const Header = () => {
   const {user, handleLogOut} = useAuth();

  //  const proPic = () => {
  //   if(user.photoURL){
  //     return <img className="profileImg" src={user.photoURL} alt="" srcset="" />
  //    }
  //    else{
  //     return <img className="profileImg" src="https://cdn.icon-icons.com/icons2/1161/PNG/512/1487716857-user_81635.png" alt="" srcset=""/>
  //    }
  //   }


    return (
        <div>
        <Navbar bg="light" expand="lg">
           <Container>
             <Navbar.Brand className="img-brand" href="#home"><h3 className="text-info">MediCare</h3></Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
               <Nav className="me-auto">
                   <Nav.Link className="link" as={Link} to="/home#home">Home</Nav.Link>
                   <Nav.Link className="link" as={Link} to="/services#services">Services</Nav.Link>
                   <Nav.Link className="link" as={Link} to="/about#about">About</Nav.Link>
                   <Nav.Link className="link" as={Link} to="/departments#departments">Departments</Nav.Link>
                   <Nav.Link className="link" as={Link} to="/doctors">Doctors</Nav.Link>
                   <Nav.Link className="link" as={Link} to="/contact">Contact</Nav.Link>
               </Nav>  
               <Navbar.Text className="">
                  <a href="#login" className="p-2 name">{user?.email && user.displayName}</a>
                  <span>{user?.email && <img className="profileImg" src={user.photoURL} alt=""/>}</span>
               </Navbar.Text> 
               { !user.email ? 
                <Nav.Link as={Link} to="/login#login" className="btn btn-info text-dark m-3"><AiOutlineLogin /> Log In</Nav.Link>
                :
                <Button onClick={handleLogOut} className="btn btn-info m-3" to="/logout"><AiOutlineLogout/> SignOut</Button>
               }
             </Navbar.Collapse>
           </Container>
        </Navbar>
        </div>
    );
};

export default Header;