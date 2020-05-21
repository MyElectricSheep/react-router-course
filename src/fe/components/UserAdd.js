import React from 'react';
import { post } from 'axios';
import UserForm from './UserForm';
import { Helmet } from 'react-helmet';
import Page from './Page';

class UserAdd extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  

  handleSubmit(user) {
    const { history } = this.props
    post('/api/users', user)
      .then(({ data : u }) => {
        console.log('added:', user);
        history.push(`/users/${u.id}`)
      });
  }

  handleCancel(e) {
    e.preventDefault();
    const { history } = this.props
    console.log('you have canceled');
    history.push('/users')
  }

  render() {
    return (
      <Page title="Add User" columns={3}>
        <Helmet>
          <title>CMS | Add User</title>
        </Helmet>

        <UserForm
          handleSubmit={this.handleSubmit}
          handleCancel={this.handleCancel}
        />
      </Page>
    );
  }
}

export default UserAdd;
