import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Header } from 'semantic-ui-react';
import './style.css';

const Home = () => (
  <div className="RegisterFormContainer">
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Welcome
        </Header>
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
      </Grid.Column>
    </Grid>
  </div>
);

export default Home;
