import { createElement } from 'react';
import { setDisplayName, compose } from 'recompose';

export const H = ({
  depth,
  children,
  ...rest
}) => createElement(
  `h${depth}`,
  rest,
  children,
);

export const enhance = compose(
  setDisplayName('H'),
);

export default enhance(H);
