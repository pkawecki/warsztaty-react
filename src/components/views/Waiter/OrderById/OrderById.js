import React from 'react';
import styles from './OrderById.module.scss';
import PropTypes from 'prop-types';

const OrderById = ({ match }) => {
  return (
    <div className={styles.component}>
      <h2>OrderById view</h2>
      <p>It s order number {match.params.id}</p>
    </div>
  );
};

OrderById.propTypes = {
  match: PropTypes.object,
  id: PropTypes.node,
};

export default OrderById;
