import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { TaskList } from './components/TaskList';
import { EditTask } from './components/EditTask';
import { CreateTask } from './components/CreateTask';
import { NotificationList } from './components/NotificationList'


function App() {

  const [notificationCount, setNotificationCount] = useState()

  useEffect(() => {
    setNotificationCount(2)
  }, [])

  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Tesks</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Create Task</Link>
          </li>
          
        </ul>
        <ul class="navbar-nav">
          <li className="navbar-item">
            <Link to="/notifications" className="btn btn-primary">Notifications <span class="badge badge-light">{notificationCount}</span></Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={TaskList} />
        <Route path="/edit/:id" component={EditTask} />
        <Route path="/create" component={CreateTask} />
        <Route path="/notifications" component={NotificationList} />
      </Switch>
    </div>
  );
}

export default App;
