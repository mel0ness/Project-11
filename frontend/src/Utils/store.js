import connexionReducer from "../Features/connexion"
import userReducer from "../Features/user"
import newUserReducer from "../Features/newUser"
import editingReducer from "../Features/editUserName"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'




const persistConfig = {
    timeout: 1000,
    key: 'root',
    storage,
    blacklist: ['connexion', "user", "newUser", "editing"]
  }

  const authPersistConfig = {
    key: 'auth',
    storage: storage,
    blacklist: ['status', 'message', 'fetching']
  }

  const userPersistConfig = {
    key: 'user',
    storage: storage,
    blacklist: ['message']
  }

  const newUserPersistConfig = {
    key: 'newUser',
    storage: storage,
    blacklist: ['message', 'fetching']
  }

  const reducers = combineReducers({
    connexion: persistReducer(authPersistConfig, connexionReducer),
    user: persistReducer(userPersistConfig , userReducer),
    newUser: persistReducer(newUserPersistConfig, newUserReducer),
    editing: editingReducer
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