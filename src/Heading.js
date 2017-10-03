import React, {
  createElement,
  cloneElement,
  isValidElement,
} from 'react';
import PropTypes from 'prop-types';
import { Subscriber } from 'react-broadcast';
import { setDisplayName, setPropTypes, compose } from 'recompose';

export const Heading = ({
  component,
}) => (
  <Subscriber channel="@team-griffin/react-heading-section/depth">
    {(depth) => {
      if (typeof component === 'string') {
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
    }}
  </Subscriber>
);

export const enhance = compose(
  setDisplayName('Heading'),
  setPropTypes({
    component: PropTypes.node.isRequired,
  }),
);

export default enhance(Heading);
