import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from "@reduxjs/toolkit/query";
import prayerTimeSlice from '../features/prayerTimeSlice';
import SelectLang from '../features/SelectLangSlice';
import { appApi } from './appApi';

export const store = configureStore({
    reducer: {
        prayerTimeSlice,
        SelectLang,
        [appApi.reducerPath]: appApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(appApi.middleware),


});

setupListeners(store.dispatch);
