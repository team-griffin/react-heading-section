import { PropTypes } from 'react';
import { setDisplayName, setPropTypes, compose } from 'recompose';

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

export const HeadingMatrix = findClosestDepth;

export const enhance = compose(
  setDisplayName('HeadingMatrix'),
  setPropTypes({
    depth: PropTypes.number.isRequired,
  }),
);

export default enhance(HeadingMatrix);