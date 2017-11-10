import {connect} from 'react-redux';

import Home from './Home.jsx';
import {incrementCounter} from './home.action';

const mapStateToProps = state => ({
  count: state.counter.count
});

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(incrementCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
