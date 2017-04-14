import React, { PropTypes } from 'react';
import { Broadcast, Subscriber } from 'react-broadcast';
import { setDisplayName, setPropTypes, compose } from 'recompose';

export const HeadingSection = ({
  children,
}) => (
  <Subscriber channel="@team-griffin/react-heading-section/depth">
    {(depth) => (
      <Broadcast
        channel="@team-griffin/react-heading-section/depth"
        value={depth + 1}
      >
        {children}
      </Broadcast>
    )}
  </Subscriber>
);

export const enhance = compose(
  setDisplayName('HeadingSection'),
  setPropTypes({
    children: PropTypes.node.isRequired,
  }),
);

export default enhance(HeadingSection);