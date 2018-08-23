import React from 'react';
import PropTypes from 'prop-types';

function delayUpdating(Component) {
  return class extends React.Component {
    propTypes = {
      isActive: PropTypes.bool,
      outDelayTime: PropTypes.number,
      inDelayTime: PropTypes.number,
    }

    state = {
      isActive: this.props.isActive,
    };

    componentDidUpdate(prevProps) {
      if (prevProps.isActive && !this.props.isActive) {
        setTimeout(
          () => this.setState({ isActive: false }),
          this.props.outDelayTime
        );
      } else if (!prevProps.isActive && this.props.isActive) {
        setTimeout(
          () => this.setState({ isActive: true }),
          this.props.inDelayTime
        );
      }
    }

    render() {
      return <Component {...this.props} {...this.state} />;
    }
  };
}

export default delayUpdating;
