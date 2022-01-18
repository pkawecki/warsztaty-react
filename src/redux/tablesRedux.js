import Axios from 'axios';
import { api } from '../settings';
/* selectors */
export const getAll = ({ tables }) => tables.data;
export const getLoadingState = ({ tables }) => tables.loading;

/* action name creator */
const reducerName = 'tables';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const TABLE_UPDATED = createActionName('TABLE_UPDATED');

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const tableUpdate = (payload) => ({ payload, type: TABLE_UPDATED });

/* reducer */

/*thunk creators */
export const fetchFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios.get(`${api.url}/api/${api.tables}`)
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const changeTableState = (id, currentAction, order) => {
  return (dispatch, getState) => {
    Axios.patch(`${api.url}/api/${api.tables}/${id}`, {
      status: currentAction,
      order: order,
    })
      .then((res) => {
        console.log('resdata', res.data);
        dispatch(tableUpdate(res.data));
      })
      .catch(function (err) {
        dispatch(fetchError(err.message || true));
      });
  };
};

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case TABLE_UPDATED: {
      return {
        ...statePart,
        data: statePart.data.map((tableElement) =>
          tableElement.id == action.payload.id
            ? { ...tableElement, status: action.payload.status }
            : { ...tableElement }
        ),
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
}
