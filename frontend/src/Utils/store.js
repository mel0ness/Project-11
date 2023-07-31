import connexionReducer from "../Features/connexion"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const persistConfig = {
    timeout: 1000,
    key: 'root',
    storage,
    blacklist: ['connexion']
  }

  const authPersistConfig = {
    key: 'auth',
    storage: storage,
    blacklist: ['status', 'message']
  }

  const reducers = combineReducers({
    connexion: persistReducer(authPersistConfig, connexionReducer)
  })
 

  const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),})

export default store;