import React from 'react';
import styles from './Login.module.scss';

import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const Login = () => {
  return (
    <form className={styles.component}>
      <TextField
        required
        id="standard-required"
        label="Login"
        defaultValue=""
      />
      <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <Button type="button" color="primary">
        LOG IN
      </Button>
    </form>
  );
};

export default Login;
