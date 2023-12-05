import './App.css';
import { Container, Row, Col ,Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <Form>
          <Row>
            <Col md>
          <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder='example@email.com'/>
          <Form.Text className='test-muted'>
            We'll never share your details.
          </Form.Text>
          </Form.Group>
          </Col>
          <Col md>
          <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"/>
          <Form.Text className='test-muted'>
          </Form.Text>
          </Form.Group>
          </Col>
          </Row>

            <Button variant="secondary" type="submit">Login</Button>

        </Form>
        <Card className="mb-3" style={{color: "#000"}}>
          <Card.Img src='https://picsum.photos/200'/>
          <Card.Body>
            <Card.Title>
              Card Example
            </Card.Title>
            <Card.Text>Hello! this is an example of a card</Card.Text>
            </Card.Body>
              <Button variant='primary'>Read more</Button>
        </Card>

        <Breadcrumb>
        <Breadcrumb.Item>Test 1 </Breadcrumb.Item>
        <Breadcrumb.Item>Test 2</Breadcrumb.Item>
        <Breadcrumb.Item>Test 3</Breadcrumb.Item>
        </Breadcrumb>
          <Alert variant='primary'>Alert!</Alert>
          <Button>Test</Button>
          </Container>
      </header>
    </div>
  );
}

export default App;
