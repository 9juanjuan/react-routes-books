import React from 'react';
import './App.css';
import BookList from './BookList'
import BookDetail from './BookDetail'

import {
  Link,
  Route,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
    }
  }
  render() {

  
  return (
    <div className="App">
      <header className="App-header">
       <Link to="/">Home</Link>
       <Switch>
        <Route exact path="/" component={BookList} />
       </Switch>
       <Route path="/:book" component={BookDetail} />

       
      </header>
    </div>
  );
  }
}

export default App;
