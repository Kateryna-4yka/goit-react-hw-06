import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'; 
import contactsReducer from '../redux/contactsSlice';
import filtersReducer from '../redux/filtersSlice';

const persistConfig = {
    key: 'userInfo',
    storage,
  }
   
  const contactsReducerStor = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
  reducer: {
    contacts: contactsReducerStor,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);