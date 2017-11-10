import {connect} from 'react-redux';

import About from './About.jsx';

const mapStateToProps = state => ({
  count: state.counter.count
});

export default connect(mapStateToProps)(About);
