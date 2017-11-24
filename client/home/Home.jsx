import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

class HomePage extends PureComponent {
  constructor() {
    super();
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  componentWillMount() {
    this.props.getData();
  }

  incrementCounter() {
    this.props.incrementCounter();
  }

  render() {
    const {count, users} = this.props;

    return (
      <div>
        This is home page
        <a href="javascript:void(0)" onClick={this.incrementCounter}>
          {count}
        </a>

        <h1>{count}</h1>

        <h1>This data is from server</h1>
        {users.map((user, index) => {
          return (
            <div key={index}>
              <h4>{user.name}</h4>
              <h4>{user.email}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}

HomePage.propTypes = {
  getData: PropTypes.func.isRequired,
  incrementCounter: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  users: PropTypes.array.isRequired,
};

export default HomePage;
