import {
  Button,
  Paper,
  Table,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import React from 'react';
import styles from './Kitchen.module.scss';

const orderList = [
  {
    id: 1,
    table: true,
    number: 1,
    dishes: ['soup', 'potatoes'],
    additions: ['sauce', 'ketchup'],
    drinks: ['cola', 'whiskey'],
  },
  {
    id: 2,
    table: false,
    number: 2,
    dishes: ['rice', 'chicken'],
    additions: ['mayo', 'mustard'],
    drinks: ['fanta', 'sprite'],
  },
];

const Kitchen = () => {
  return (
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableCell>Order info</TableCell>
          <TableCell>Dishes</TableCell>
          <TableCell>Additions</TableCell>
          <TableCell>Drinks</TableCell>
          <TableCell>Mark as done</TableCell>
        </TableHead>
        {orderList.map((order) => (
          <TableRow key={order.id}>
            <TableCell key={order.id}>
              {order.table
                ? `table ${order.number}`
                : `takeaway ${order.number}`}
            </TableCell>
            <TableCell>{order.dishes.map((dish) => dish + ', ')}</TableCell>
            <TableCell>
              {order.additions.map((addition) => addition + ', ')}
            </TableCell>
            <TableCell>{order.drinks.map((drink) => drink + ', ')}</TableCell>
            <TableCell>
              <Button>DONE</Button>
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </Paper>
  );
};

export default Kitchen;
