import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import {postUser} from '../../actions/register'
import {
  Button,
  Checkbox,
  Form,
  Header,
  Segment,
  Label,
  TextArea,
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
    success: false,
    isClicked: false,
    disabled: true,
  };

  handleSeller = () => {
    this.setState({
      isSeller: !this.state.isSeller,
    });
  };

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    if (this.state.name && this.state.email && this.state.hash) {
      this.setState({
        disabled: false,
      });
    }
  }
  //   sendUser() {
  //     this.props.dispatch(postUser(this.state)).then(
  //       this.setState({
  //         success: !this.state.success,
  //       }),
  //     );
  //   }
  render() {
    return (
      <div>
        <Form>
          <Header size="huge">REGISTER</Header>
          <Header size="large">
            We just need to get a few details
            <br />
            from you to get you sign up <br />
            to the service.
          </Header>
          <div>
            <Form.Field>
              <Label pointing="right">Name</Label>
              <input
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Field>
          </div>
          <div>
            <Form.Field>
              <Label pointing="right">email</Label>
              <input
                placeholder="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Field>
          </div>
          <div>
            <Form.Field inline>
              <Label pointing="right">
                Your password must be 6 characters or more
              </Label>
              <input
                type="password"
                placeholder="Password"
                value={this.state.hash}
                onChange={this.handleChange}
              />
            </Form.Field>
          </div>
          <div>
            <Header size="large">Are you a Grower?</Header>
            <Checkbox
              checked={this.state.isSeller}
              name="seller"
              onChange={this.handleSeller}
            />
          </div>
          {this.state.isSeller && (
            <div>
              <Form.Field>
                <input
                  placeholder="Street Address"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <input
                  placeholder="Suburb"
                  value={this.state.suburb}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <div>
                <Form.Field>
                  <input
                    placeholder="Suburb"
                    value={this.state.suburb}
                    onChange={this.handleChange}
                  />
                </Form.Field>
              </div>
              <div>
                <Form.Field>
                  <input
                    placeholder="City"
                    value={this.state.city}
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
                  value={this.state.description}
                  onChange={this.handleChange}
                />

                <Form.Field
                  id="form-textarea-control-hours"
                  control={TextArea}
                  label="Hours"
                  placeholder="Hours"
                  value={this.state.hours}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          )}
          <div>
            <Header as="h2" attached="top">
              Term and conditions
            </Header>
            <Segment attached>
              TERMS OF SERVICE AGREEMENT LAST REVISION: [10.10.2019] PLEASE READ
              THIS TERMS OF SERVICE AGREEMENT CAREFULLY. BY USING THIS WEBSITE
              OR ORDERING PRODUCTS FROM THIS WEBSITE YOU AGREE TO BE BOUND BY
              ALL OF THE TERMS AND CONDITIONS OF THIS AGREEMENT. This Terms of
              Service Agreement governs your use of this website, [By-My-Kui],
              [Horne and hoovers] offer of products for purchase on this
              Website, or your purchase of products available on this Website.
            </Segment>
            <Form.Field>
              <Checkbox label="I agree to the Terms and Conditions" />
            </Form.Field>
          </div>
          <Button disabled={this.state.disabled} onClick={this.sendUser}>
            Submit
          </Button>
          {this.state.success && <Redirect to="/profile" />}
          <Header size="large">
            Already a member?
            <Link className="btn-link" to="/login">
              {' '}
              <u>Login</u>
            </Link>
          </Header>

          {/* <div className='pure-u-1'>
        <a href="#top"><h4> Return to top <i className="fas fa-caret-up"></i></h4></a> */}
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.users,
});

export default connect(mapStateToProps)(Register);
