import React from 'react';
import styles from './OrderById.module.scss';
import PropTypes from 'prop-types';

const OrderById = ({ id }) => {
  return (
    <div className={styles.component}>
      <h2>OrderById view</h2>
      <p>It s order number {id} </p>
    </div>
  );
};

OrderById.propTypes = {
  id: PropTypes.node,
};

export default OrderById;
