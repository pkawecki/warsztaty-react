import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => {
  return (
    <div className={styles.component}>
      <h2>Tables view</h2>

      <Link to={`${process.env.PUBLIC_URL}/tables/booking/1`}>
        Booking number 1
      </Link>

      <Link to={`${process.env.PUBLIC_URL}/tables/event/1`}>
        Event number 1
      </Link>
    </div>
  );
};

export default Tables;
