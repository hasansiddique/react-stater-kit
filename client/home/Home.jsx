import React, {PureComponent} from 'react';

class HomePage extends PureComponent {
  constructor() {
    super();
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.props.incrementCounter();
  }

  render() {
    const {count} = this.props;

    return (
      <div>
        This is home page hahaha
        <a href="javascript:void(0)" onClick={this.incrementCounter}>
          {count}
        </a>
      </div>
    );
  }
}

export default HomePage;
