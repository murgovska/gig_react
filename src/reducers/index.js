import { combineReducers } from 'redux';

import { sports } from './sports.reducer';
import { prematchCategory } from './prematchCategory.reducer';

const rootReducer = combineReducers({
    sports,
    prematchCategory
  });

  export default rootReducer;