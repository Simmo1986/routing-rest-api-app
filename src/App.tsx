import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Posts from './pages/posts';
import { Container, Nav, Navbar } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/">My React App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Posts">Posts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Posts" element={<Posts />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;