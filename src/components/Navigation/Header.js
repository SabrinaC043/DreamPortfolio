import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
export default function Header({ setPage }) {
    return (
        <Navbar className="navigation" expand="lg">
            <Container>
                <Navbar.Brand href="https://www.sabrinacarrion.com">The One & Only Sabrina</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav >

                        <Nav.Link onClick={() => setPage('about')}>About</Nav.Link>
                        <Nav.Link onClick={() => setPage('projects')}>Projects</Nav.Link>
                        <Nav.Link onClick={() => setPage('resume')}>Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
