import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from 'redux';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        // Or ignore specific paths in actions
        ignoredActionPaths: ["register", "rehydrate"],
        // Ignore specific paths in state
        ignoredPaths: ["some.nonSerializable.path"],
      },
    }),
});
export const persistor = persistStore(store);

// export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;
