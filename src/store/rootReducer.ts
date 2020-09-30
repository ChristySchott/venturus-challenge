import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { teamReducer } from './ducks/team';
import { editingReducer } from './ducks/editing';

const teamPersistConfig = {
  key: 'Squad Management Tool Venturus',
  storage,
};

export const rootReducer = combineReducers({
  team: persistReducer(teamPersistConfig, teamReducer),
  editing: editingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
