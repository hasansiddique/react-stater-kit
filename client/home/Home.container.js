import {connect} from 'react-redux';

import Home from './Home.jsx';
import {incrementCounter, getData} from './home.action';

const mapStateToProps = state => ({
  count: state.counter.count,
  users: state.counter.users
});

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(incrementCounter()),
  getData: () => dispatch(getData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
