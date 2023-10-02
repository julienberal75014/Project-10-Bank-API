import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore, } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
