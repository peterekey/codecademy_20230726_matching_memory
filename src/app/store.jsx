import { configureStore } from '@reduxjs/toolkit'

import { boardReducer } from '../features/board/boardSlice.jsx';

export default configureStore({
  reducer: {
    board: boardReducer
  }
})