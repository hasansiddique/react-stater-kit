import React, {Component} from 'react';
import Header from './layout/Header.jsx';
import AppRoutes from '../routes';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <AppRoutes/>
      </div>
    );
  }
}

export default App;
