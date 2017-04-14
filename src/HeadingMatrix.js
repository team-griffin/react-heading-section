import { PropTypes } from 'react';

const findClosestDepth = (props) => {
  const {
    depth,
  } = props;

  for (let i = depth; i > 0; i -= 1) {
    const h = props[`h${i}`];
    if (h != null) {
      return h;
    }
  }
};

const HeadingMatrix = (props) => {
  return findClosestDepth(props);
};
HeadingMatrix.displayName = 'HeadingMatrix';
HeadingMatrix.propTypes = {
  depth: PropTypes.number.isRequired,
};

export default HeadingMatrix;