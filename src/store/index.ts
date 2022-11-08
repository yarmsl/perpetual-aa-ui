import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AnyAction, combineReducers, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { ModalStackReducer } from './ModalStack';
import { obyteApi } from './Obyte/Obyte.service';
import { SnackStackReducer } from './SnackStack';
import { UIReducer } from './UI';

const UIPersistConfig = {
  key: 'ui',
  storage,
  whitelist: ['darkMode'],
};

const rootReducer = combineReducers({
  modalStack: ModalStackReducer,
  snackStack: SnackStackReducer,
  ui: persistReducer(UIPersistConfig, UIReducer),
  [obyteApi.reducerPath]: obyteApi.reducer,
});

const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(obyteApi.middleware),
});

export const persistor = persistStore(appStore);
export type TRootState = ReturnType<typeof appStore.getState>;
export type AppStore = typeof appStore;
export type TAppDispatch = ThunkDispatch<TRootState, null, AnyAction>;
export const useAppDispatch = (): TAppDispatch => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
export default appStore;
