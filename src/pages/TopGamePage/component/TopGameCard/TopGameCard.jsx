import React from 'react';
import PropTypes from 'prop-types';

const TopGameCard = ({ game }) => {
  console.log('card', game);
  return <div></div>;
};

export default TopGameCard;

TopGameCard.propTypes = {
  game: PropTypes.object.isRequired,
};
