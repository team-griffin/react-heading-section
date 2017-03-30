import React, { PropTypes } from 'react';
import { Broadcast } from 'react-broadcast';

const HeadingRoot = (props) => {
  return (
    <Broadcast
      channel="@team-griffin/react-heading-section/depth"
      value={0}
    >
      {props.children}
    </Broadcast>
  );
};
HeadingRoot.displayName = 'HeadingRoot';
HeadingRoot.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeadingRoot;