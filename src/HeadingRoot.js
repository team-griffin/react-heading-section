import React from 'react';
import { Provider } from './context';
import { setDisplayName, compose } from 'recompose';


export const HeadingRoot = ({
  children,
}) => (
  <Provider
    value={0}
  >
    {children}
  </Provider>
);

export const enhance = compose(
  setDisplayName('HeadingRoot'),
);

export default enhance(HeadingRoot);
