import React, { PropTypes, Component, createElement, cloneElement, isValidElement } from 'react';
import { Subscriber } from 'react-broadcast';

class Heading extends Component {

  constructor(props) {
    super(props);

    this.renderComponent = this.renderComponent.bind(this);
  }

  renderComponent(depth) {
    const {
      component,
    } = this.props;

    if(typeof component === 'string') {
      return createElement(component, {
      });
    }

    if (isValidElement(component)) {
      return cloneElement(component, {
        depth,
      });
    }

    return createElement(component, {
      depth,
    });
  }

  render() {
    return (
      <Subscriber channel="@team-griffin/react-heading-section/depth">
        {this.renderComponent}
      </Subscriber>
    );
  }
}

export default Heading;