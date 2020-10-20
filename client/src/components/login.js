import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import Home from './home';
import Register from './register';

export default class Login extends React.Component {
  render() {
    return (
      <Container id='login'>
        <Card className='login__card'>
          <Card.Body>
            <Card.Title className='login__card-title'>
              Knock Before Entering, You Simpleton
            </Card.Title>
            <Link to={'/'}>
              <Button className='login__button'>Log In</Button>
            </Link>
            <Link to={'/register'}>
              <Button className='register__button'>Register</Button>
            </Link>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
