import { connect } from 'react-redux';
import Waiter from './Waiter';
import {
  getAll,
  fetchFromAPI,
  changeTableState,
  getLoadingState,
} from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()), //to jest funkcja którą thunk przechwyci
  changeTables: (id, currentAction, order) =>
    dispatch(changeTableState(id, currentAction, order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
