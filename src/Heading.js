import React, {
  createElement,
  cloneElement,
  isValidElement,
} from 'react';
import { Consumer } from './context';
import { setDisplayName, compose } from 'recompose';

export const Heading = ({
  component,
}) => (
  <Consumer>
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
  </Consumer>
);

export const enhance = compose(
  setDisplayName('Heading'),
);

export default enhance(Heading);
