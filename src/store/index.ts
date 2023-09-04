import { configureStore } from '@reduxjs/toolkit'
import navigation from './navigation'
import scrollable from './scrollable'
export const store = configureStore({
  reducer: {
    nav:navigation,
    scroll:scrollable
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch