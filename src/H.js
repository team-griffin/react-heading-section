import { PropTypes, createElement } from 'react';
import { setDisplayName, setPropTypes, compose } from 'recompose';

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
  setPropTypes({
    depth: PropTypes.number.isRequired,
    children: PropTypes.node,
  }),
);

export default enhance(H);
