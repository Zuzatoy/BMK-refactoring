import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import {postUser} from '../../actions/register'
import { bindActionCreators } from 'redux';
import { registerUser } from '../../ducks/users';

import './style.css';
import {
  Button,
  Checkbox,
  Form,
  Header,
  Label,
  TextArea,
  Grid,
  Segment,
} from 'semantic-ui-react';

export class Register extends React.Component {
  state = {
    name: '',
    email: '',
    hash: '',
    isSeller: false,
    address: '',
    suburb: '',
    city: '',
    description: '',
    hours: '',
    isClicked: false,
    disabled: true,
  };

  handleSeller = () => {
    this.setState({
      isSeller: !this.state.isSeller,
    });
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
  //   sendUser() {
  //     this.props.dispatch(postUser(this.state)).then(
  //       this.setState({
  //         success: !this.state.success,
  //       }),
  //     );
  //   }
  render() {
    const { actions, loading } = this.props;
    const {
      name,
      email,
      hash,
      address,
      isSeller,
      suburb,
      city,
      description,
      disabled,
      hours,
    } = this.state;
    return (
      <div className="RegisterFormContainer">
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form>
              <Header as="h2" color="teal" textAlign="center" size="huge">
                REGISTER
              </Header>
              <Header as="h2" color="teal" textAlign="center" size="small">
                We just need to get a few details
                <br />
                from you to get you sign up <br />
                to the service.
              </Header>
              <div>
                <Form.Field>
                  {/* <Label pointing="right">Name</Label> */}
                  <input
                    placeholder="Name"
                    value={name}
                    name="name"
                    onChange={this.handleChange}
                  />
                </Form.Field>
              </div>
              <br />
              <div>
                <Form.Field>
                  {/* <Label pointing="right">email</Label> */}
                  <input
                    placeholder="email"
                    value={email}
                    name="email"
                    onChange={this.handleChange}
                  />
                </Form.Field>
              </div>
              <br />
              <div>
                <Form.Field>
                  <input
                    type="password"
                    placeholder="Password"
                    value={hash}
                    name="hash"
                    onChange={this.handleChange}
                  />
                </Form.Field>
              </div>
              <br />
              <div>
                <Header as="h2" color="teal" textAlign="center" size="small">
                  Are you a Grower?
                </Header>
                <Checkbox
                  checked={isSeller}
                  name="seller"
                  onChange={this.handleSeller}
                />
              </div>
              {this.state.isSeller && (
                <div>
                  <Form.Field>
                    <input
                      placeholder="Street Address"
                      value={address}
                      name="address"
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <input
                      placeholder="Suburb"
                      value={suburb}
                      name="suburb"
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <div />
                  <div>
                    <Form.Field>
                      <input
                        placeholder="City"
                        value={city}
                        name="city"
                        onChange={this.handleChange}
                      />
                    </Form.Field>
                  </div>
                  <div>
                    <Form.Field
                      id="form-textarea-control-description"
                      control={TextArea}
                      label="Description"
                      placeholder="Description"
                      value={description}
                      name="description"
                      onChange={this.handleChange}
                    />

                    <Form.Field
                      id="form-textarea-control-hours"
                      control={TextArea}
                      label="Hours"
                      placeholder="Hours"
                      value={hours}
                      name="hours"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              )}
              <br />
              <div>
                <Header as="h2" color="teal" textAlign="center" size="tiny">
                  Term and conditions
                </Header>
                <Segment attached>
                  TERMS OF SERVICE AGREEMENT LAST REVISION: [10.10.2019] PLEASE
                  READ THIS TERMS OF SERVICE AGREEMENT CAREFULLY. BY USING THIS
                  WEBSITE OR ORDERING PRODUCTS FROM THIS WEBSITE YOU AGREE TO BE
                  BOUND BY ALL OF THE TERMS AND CONDITIONS OF THIS AGREEMENT.
                  This Terms of Service Agreement governs your use of this
                  website, [By-My-Kui], [Horne and hoovers] offer of products
                  for purchase on this Website, or your purchase of products
                  available on this Website.
                </Segment>
                <br />
                <Form.Field>
                  <Checkbox label="I agree to the Terms and Conditions" />
                </Form.Field>
              </div>
              <br />
              <Button
                color="teal"
                fluid
                size="large"
                disabled={disabled}
                loading={loading}
                onClick={() => actions.registerUser(this.state)}
              >
                Submit
              </Button>
              {this.state.success && <Redirect to="/profile" />}
              <Header as="h2" color="teal" textAlign="center" size="large">
                Already a member?
                <Link className="btn-link" to="/login">
                  {' '}
                  <u>Login</u>
                </Link>
              </Header>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      registerUser,
    },
    dispatch,
  ),
});

const mapStateToProps = (state) => ({
  ...state.users,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
