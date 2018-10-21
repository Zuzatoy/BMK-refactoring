import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import {postUser} from '../../actions/register'
import { Button, Checkbox } from 'semantic-ui-react';

export default class Register extends React.Component {
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
  handleSeller() {
    this.setState({
      isSeller: !this.state.isSeller,
      isClicked: !this.state.isClicked,
    });
  }
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
}
