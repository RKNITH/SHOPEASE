import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/userSlice.js";
import cartReducer from "./features/cartSlice.js";

import { productApi } from "./api/productsApi.js";
import { authApi } from "./api/authApi.js";
import { userApi } from "./api/userApi.js";
import { orderApi } from "./api/orderApi.js";

export const store = configureStore({
    reducer: {
        auth: userReducer,
        cart: cartReducer,
        [productApi.reducerPath]: productApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            productApi.middleware,
            authApi.middleware,
            userApi.middleware,
            orderApi.middleware,
        ]),
});