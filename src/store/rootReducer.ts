import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { teamReducer } from './ducks/team';

const teamPersistConfig = {
  key: 'team',
  storage,
};

export const rootReducer = combineReducers({
  team: persistReducer(teamPersistConfig, teamReducer),
});

export type RootState = ReturnType<typeof rootReducer>;
