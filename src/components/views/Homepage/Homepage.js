import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './Homepage.module.scss';
import Waiter from '../Waiter/Waiter';
import { Container, Toolbar } from '@material-ui/core';

const rows = [
  { type: 'local', table: '1', status: 'ordered', order: 123 },
  { type: 'local', table: '2', status: 'prepared', order: 234 },
  { type: 'local', status: 'delivered', order: 345 },
  { type: 'remote', table: null, status: 'paid', order: 456 },
  { type: 'remote', table: null, status: 'paid', order: 789 },
];

export default function Homepage() {
  return (
    <React.Fragment className={styles.component}>
      <Container maxWidth="lg" className={styles.component} align="left">
        Today&apos;s ordering stats
      </Container>
      <TableContainer className={styles.paper} component={Paper}>
        <Table size="small">
          <TableHead component="th">
            <TableRow>
              <TableCell className={styles.tableHead}>Type</TableCell>
              <TableCell className={styles.tableHead} align="right">
                Table
              </TableCell>
              <TableCell className={styles.tableHead} align="right">
                Status
              </TableCell>
              <TableCell className={styles.tableHead} align="right">
                Order Id
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.order} component="tr">
                <TableCell>{row.type}</TableCell>
                <TableCell align="right">
                  {row.table == null ? '-' : row.table}
                </TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.order}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Toolbar />
      <Container maxWidth="sm" className={styles.component} align="left">
        Today&apos;s bookings and events
      </Container>
      <Waiter size="small" />
    </React.Fragment>
  );
}
