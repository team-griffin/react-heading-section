import { PropTypes, createElement } from 'react';

const H = (props) => {
  const {
    depth,
    children,
    ...rest,
  } = props;

  return createElement(
    `h${depth}`,
    rest,
    children,
  );
};
H.displayName = 'H';
H.propTypes = {
  depth: PropTypes.number.isRequired,
  children: PropTypes.node,
};

export default H;
