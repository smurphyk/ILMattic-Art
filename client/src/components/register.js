import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default class Register extends React.Component {
  render() {
    return (
      <Container id='register'>
        <Card className='register__card'>
          <Card.Body>
            <Card.Title>Register</Card.Title>
            <Container className='button__container'>
              <Link to={'/login'}>
                <Button className='register__button'>Register</Button>
              </Link>
              <Link to={'/login'}>
                <Button>Cancel</Button>
              </Link>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
