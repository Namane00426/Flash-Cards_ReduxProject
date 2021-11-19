import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/topicSlice';

export default configureStore({
  reducer: {
    topics: topicsReducer,
  },
});
