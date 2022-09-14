import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import slices we created
import productReducer from "./ProductSlice"
import cartReducer,{cartTotal} from "../Store/CartSlice";
import { ProductFetch } from "./ProductSlice"
import wishReducer from "./WishListSlice"
import userReducer from "./userRedux";
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
  const persistConfig = {
    key: "root",
    version: 1,
    storage,
  };
  


const rootReducer = combineReducers(
  {
    product: productReducer,
    cart: cartReducer,
    wish: wishReducer ,
    user: userReducer
  });
const persistedReducer = persistReducer(persistConfig, rootReducer
);

export const store=configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

store.dispatch(ProductFetch())
store.dispatch(cartTotal());

export let persistor = persistStore(store);