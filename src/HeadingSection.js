import React, { PropTypes } from 'react';
import { Broadcast, Subscriber } from 'react-broadcast';

const HeadingSection = (props) => {
  return (
    <Subscriber channel="@team-griffin/react-heading-section/depth">
      {(depth) => (
        <Broadcast
          channel="@team-griffin/react-heading-section/depth"
          value={depth + 1}
        >
          {props.children}
        </Broadcast>
      )}
    </Subscriber>
  );
};
HeadingSection.displayName = 'HeadingSection';
HeadingSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeadingSection;