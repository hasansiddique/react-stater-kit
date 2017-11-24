import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

class AboutPage extends PureComponent {
  constructor() {
    super();
  }

  render() {
    const {count} = this.props;

    return (
      <div>
        This is about page
        <h1>Current Count</h1>
        {count}
      </div>
    );
  }
}

AboutPage.propTypes = {
  count: PropTypes.number.isRequired,
};

export default AboutPage;
