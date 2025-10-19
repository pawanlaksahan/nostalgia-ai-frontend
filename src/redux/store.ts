import { configureStore } from "@reduxjs/toolkit";
import styleReducer from "./styleSlice";

export const store = configureStore({
    reducer: {
        style: styleReducer, 
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;