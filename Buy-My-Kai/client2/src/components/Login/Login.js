import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';

class Login extends React.Component {
  state = {
    email: '',
    hash: '',
    disabled: true,
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    if (this.state.name && this.state.email && this.state.hash) {
      this.setState({
        disabled: false,
      });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.dispatch(loginUser(this.state.email, this.state.hash));
  };
  render() {
    const { actions, loading } = this.props;
    const { hash, email } = this.state;

    return (
      <div className="RegisterFormContainer ">
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              {/* <Image src="/../Buy-My-Kai/client2/public/images/logo-4.png" /> */}
              Log-in to your account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  value={email}
                  name="email"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type={hash}
                  onChange={this.handleChange}
                />

                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick={this.handleSubmit}
                  disabled={this.state.disabled}
                >
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href="/register">Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.users,
});

export default connect(mapStateToProps)(Login);
