import React from 'react';
import { connect } from 'redux';
import { bindActionCreators } from 'redux';
import { getProfile } from '../../ducks';
import PropTypes from 'prop-types';
// import {
//   Button,
//   Form,
//   Grid,
//   Header,
//   Message,
//   Segment,
// } from 'semantic-ui-react';

class Profile extends React.Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.getProfile();
  }

  render() {
    // this.props.dispatch(getProducts())
    return (
      // Navigation
      <div>
        <div className="profile">
          <h2>Kia ora Eater</h2>
          <div className="pure-u-1">
            <h5>
              Thank you for registering with Buy My Kai <br />
              We are excited to have you as part of our community!
            </h5>
            {/* <h5>How to use the App</h5> */}
            <div className="pure-u-1">
              <h5>
                <span>{profile.email}</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getProfile, // берем данные с сервера
    },
    dispatch,
  ),
});

const mapStateToProps = (state) => ({
  loading: state.users.loading,
  user: state.users.user, // получаем данные из стора
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

Profile.propTypes = {
  loading: PropTypes.bool,
  actions: PropTypes.objectOf(PropTypes.func),
};
