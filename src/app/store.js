import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/topicSlice';
import quizzesReducer from '../features/quizzes/quizSlice';

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer,
  },
});
