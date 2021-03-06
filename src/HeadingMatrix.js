import { setDisplayName, compose } from 'recompose';

const findClosestDepth = (props) => {
  const {
    depth,
  } = props;

  // eslint-disable-next-line
  for (let i = depth; i > 0; i -= 1) {
    const h = props[`h${i}`];
    if (h != null) {
      return h;
    }
  }

  // eslint-disable-next-line fp/no-nil
  return null;
};

export const HeadingMatrix = findClosestDepth;

export const enhance = compose(
  setDisplayName('HeadingMatrix'),
);

export default enhance(HeadingMatrix);
