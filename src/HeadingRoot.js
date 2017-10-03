import React from 'react';
import PropTypes from 'prop-types';
import { Broadcast } from 'react-broadcast';
import { setDisplayName, setPropTypes, compose } from 'recompose';

export const HeadingRoot = ({
  children,
}) => (
  <Broadcast
    channel="@team-griffin/react-heading-section/depth"
    value={0}
  >
    {children}
  </Broadcast>
);

export const enhance = compose(
  setDisplayName('HeadingRoot'),
  setPropTypes({
    children: PropTypes.node.isRequired,
  })
);

export default enhance(HeadingRoot);
