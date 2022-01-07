import React from 'react';
import PropTypes from 'prop-types';

const Event = ({ match }) => {
  return (
    <div>
      <h2>Single Event no {match.params.id} </h2>
    </div>
  );
};

Event.propTypes = {
  match: PropTypes.object,
};

export default Event;
