import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

import basketReducer from "../slices/basketSlice";
import itemsSeenReducer from "../slices/itemsSeenSlice";

// CODE FROM: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
// EXAMPLE: https://www.youtube.com/watch?v=Fb-bDigImpw

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducers = combineReducers({
  basket: basketReducer,
  itemsSeen: itemsSeenReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

export default { store, persistor };
