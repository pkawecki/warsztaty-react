import React from 'react';
import styles from './Tables.module.scss';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from '@material-ui/core';

const hours = ['15:00', '15:30', '16:00', '16:30', '17:00', '17:30'];
const tableOccupation = [
  {
    id: 1,
    busy: [
      { id: '11', hour: '15:00', type: 'booking' },
      { id: '12', hour: '15:30', type: 'event' },
    ],
  },
  {
    id: 2,
    busy: [{ id: '21', hour: '17:00', type: 'booking' }],
  },
  {
    id: 3,
    busy: [{ id: '31', hour: '16:30', type: 'event' }],
  },
];

const renderButton = (eventType, id) => {
  switch (eventType) {
    case 'booking':
      return (
        <Button to={`${process.env.PUBLIC_URL}/booking/${id}`}>
          Booking {id}
        </Button>
      );

    case 'event':
      return (
        <Button to={`${process.env.PUBLIC_URL}/event/${id}`}>Event {id}</Button>
      );

    case 'empty':
      return (
        <React.Fragment>
          <Button to={`${process.env.PUBLIC_URL}/event/new`}>Event</Button>
          <Button to={`${process.env.PUBLIC_URL}/booking/new`}>Booking</Button>
        </React.Fragment>
      );
    default:
      return null;
  }
};

const Tables = () => {
  return (
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Hour</TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
            <TableCell>Table 4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hours.map((hour) => (
            <TableRow key={hour}>
              <TableCell component="th" scope="row">
                {hour}
              </TableCell>
              {tableOccupation.map((table) => (
                <TableCell key={table.id}>
                  {table.busy.map((book) =>
                    book.hour === hour ? renderButton(book.type, book.id) : null
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Tables;
