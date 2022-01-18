import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Waiter extends React.Component {
  constructor(props) {
    super(props);
    this.generateOnClick = this.generateOnClick.bind(this);
  }
  static propTypes = {
    fetchTables: PropTypes.func,
    changeTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    tables: PropTypes.array,
  };

  componentDidMount() {
    const { fetchTables } = this.props;
    fetchTables();
  }

  generateOnClick(id, currentAction, order) {
    const { changeTables } = this.props;
    console.log('current action', currentAction, ' id', id, 'order', order);
    changeTables(id, currentAction, order);
  }

  renderActions(id, status, order) {
    const vars = { id, status, order };
    switch (status) {
      case 'free':
        return (
          <>
            <Button
              onClick={() =>
                this.generateOnClick(vars.id, 'thinking', vars.order)
              }
            >
              thinking
            </Button>
            <Button
              onClick={() =>
                this.generateOnClick(vars.id, 'ordered', vars.order)
              }
            >
              new order
            </Button>
          </>
        );
      case 'thinking':
        return (
          <Button
            onClick={() => this.generateOnClick(vars.id, 'ordered', vars.order)}
          >
            new order
          </Button>
        );

      case 'ordered':
        return (
          <Button
            onClick={() =>
              this.generateOnClick(vars.id, 'prepared', vars.order)
            }
          >
            prepared
          </Button>
        );

      case 'prepared':
        return (
          <Button
            onClick={() =>
              this.generateOnClick(vars.id, 'delivered', vars.order)
            }
          >
            delivered
          </Button>
        );
      case 'delivered':
        return (
          <Button
            onClick={() => this.generateOnClick(vars.id, 'paid', vars.order)}
          >
            paid
          </Button>
        );
      case 'paid':
        return (
          <Button
            onClick={() => this.generateOnClick(vars.id, 'free', vars.order)}
          >
            free
          </Button>
        );
      default:
        return null;
    }
  }

  render() {
    const {
      loading: { active, error },
      tables,
    } = this.props;

    if (active || !tables.length) {
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if (error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                    {row.order && (
                      <Button
                        to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}
                      >
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.id, row.status, row.order)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;
