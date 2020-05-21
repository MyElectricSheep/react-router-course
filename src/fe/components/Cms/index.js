/* eslint-disable arrow-body-style */
import React from "react";
import { Sidebar, Menu, Icon } from "semantic-ui-react";
import { Helmet } from "react-helmet";
import store from "store";
import styles from "./styles.css";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Users from "../Users";
import UserAdd from "../UserAdd"
import UserEdit from "../UserEdit"
import FourOhFour from '../FourOhFour/index';
import isLoggedIn from '../../helpers/is_logged_in'

const handleLogout = (history) => {
  store.remove("loggedIn");
  console.log("you have been logged out. boo!");
  history.push('/login')
};

const Cms = ({history}) => {
  if (!isLoggedIn()) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Helmet>
        <title>CMS</title>
      </Helmet>

      <Sidebar as={Menu} inverted visible vertical width="thin" icon="labeled">
        <Link to="/users">
          <Menu.Item name="users">
            <Icon name="users" />
            Users
          </Menu.Item>
        </Link>
        <Route path='/users' >
          <Link to="/users/new">
            <Menu.Item name="new-user">
              <Icon name="plus" />
              Add a User
            </Menu.Item>
          </Link>
        </Route>
        <Menu.Item name="logout" onClick={() => handleLogout(history)}>
          <Icon name="power" />
          Logout
        </Menu.Item>
      </Sidebar>
      <div className={styles.mainBody}>
      <Switch>
        <Route path="/users/:userId/edit" component={UserEdit} />
        <Route path="/users/new" component={UserAdd} />
        <Route path="/users" component={Users} />
        <Route path="/are-you-lost" component={FourOhFour} />
        <Redirect to="/are-you-lost" />
      </Switch>
      </div>
    </div>
  );
};

export default Cms;
