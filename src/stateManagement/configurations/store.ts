import { Store } from "redux"
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';
import reducers from 'stateManagement/reducers/combine'

const store: Store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware: () => any[]) => getDefaultMiddleware().concat(thunkMiddleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store