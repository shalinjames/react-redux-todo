import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import reduceReducers from 'reduce-reducers';

import { todosReducer, controlsReducer} from './reducer'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter']
}
const rootReducer = reduceReducers(todosReducer, controlsReducer);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const  persistor = persistStore(store);
