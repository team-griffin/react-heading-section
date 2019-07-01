import React from 'react';
import { Provider, Consumer } from './context';
import { setDisplayName, compose } from 'recompose';

export const HeadingSection = ({
  children,
}) => (
  <Consumer>
    {(depth) => (
      <Provider
        value={depth + 1}
      >
        {children}
      </Provider>
    )}
  </Consumer>
);

export const enhance = compose(
  setDisplayName('HeadingSection'),
);

export default enhance(HeadingSection);
