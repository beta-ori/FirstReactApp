import React, {useState} from 'react'
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Container} from 'reactstrap'

function MyNavbar() {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
      <>
        <Navbar color="dark" dark expand="md" fixed="top" style={{opacity: 0.9}}>
            <Container>
                <NavbarBrand href="/">Omi Live</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
      </>
    )
}

export default MyNavbar
