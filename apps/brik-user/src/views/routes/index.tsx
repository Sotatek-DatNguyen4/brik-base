import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Login from '../containers/login';
import Home from '../containers/home';
import { alertStore } from '@brik-base/store';

import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { AlertState } from '@brik-base/interfaces';

const Routes = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state: AlertState) => state.alert);
  const history = useHistory();

  useEffect(() => {
    const { type = '', message = '' } = alert;
    if (type && message) {
      NotificationManager[type.toLowerCase()](message);
    }
  }, [alert]);

  useEffect(() => {
    history.listen(() => {
      dispatch(alertStore.action.clear());
    });
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

const RoutesHistory = withRouter(Routes);

const routing = function createRouting() {
  return (
    <>
      <NotificationContainer />
      <Router>
        <RoutesHistory />
      </Router>
    </>
  );
};

export default routing;
