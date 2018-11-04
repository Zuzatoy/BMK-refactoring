import React from 'react';
import { compose } from 'redux';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';

const Profile = ({ user }) => (
  <Header as="h2" color="teal" textAlign="center">
    here you Profile:
  </Header>

  <Message>
      <span>
          {user}
      </span>
  </Message>
);


export { Profile };