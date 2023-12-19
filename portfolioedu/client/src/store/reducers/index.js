
import { combineReducers } from 'redux';
import showDetails from './showDetails';

const rootReducer = combineReducers({
  showDetails: showDetails,
  // adicione outros reducers conforme necessário
});

export default rootReducer;