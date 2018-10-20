import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Button } from 'semantic-ui-react';

export default function Home(props) {
  return (
    <div className="container">
      <h1>Welcome</h1>
      <h4>
        Buy My Kai connects people <br />
        through the food we grow <br />
        in our backyard
      </h4>
      <Link to="/login">
        <Button>Login</Button>
      </Link>
      <Link to="/register">
        <Button>Register</Button>
      </Link>
    </div>
  );
}
