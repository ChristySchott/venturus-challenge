import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import { rootReducer, RootState } from './rootReducer';

const store = createStore(rootReducer, composeWithDevTools());

const persistor = persistStore(store as Store<RootState, any>);

export { persistor, store };
