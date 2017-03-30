import React, { PropTypes } from 'react';
import { Broadcast } from 'react-broadcast';
import { Subscriber } from 'react-broadcast';

const findClosestDepth = (props) => {
  const {
    depth
  } = props;

  for (let i = depth; i > 0; i--) {
    let h = props[`h${i}`];
    if(h != null) {
      return h;
    }
  }
};

const HeadingMatrix = (props) => {
  const {
    depth,
  } = props;

  return findClosestDepth(props);
};
HeadingMatrix.displayName = 'HeadingMatrix';
HeadingMatrix.propTypes = {
};

export default HeadingMatrix;