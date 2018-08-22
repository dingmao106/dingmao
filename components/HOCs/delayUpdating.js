import React from 'react';

function delayUpdating(Component) {
  return class extends React.Component {
    state = {
      isActive: this.props.isActive
    };

    componentDidUpdate(prevProps) {
      if (prevProps.isActive && !this.props.isActive) {
        setTimeout(
          () => this.setState({ isActive: false }),
          this.props.flipOutDelayTime
        );
      } else if (!prevProps.isActive && this.props.isActive) {
        setTimeout(
          () => this.setState({ isActive: true }),
          this.props.flipInDelayTime
        );
      }
    }

    render() {
      return <Component {...this.props} {...this.state} />;
    }
  };
}

export default delayUpdating;
