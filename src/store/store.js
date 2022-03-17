import {configureStore} from '@reduxjs/toolkit';

import rootReducers from './reducers';

// export const initializeStore = () => {
export const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.WORKING_ENVIRONMET !== 'production',
});
// };
