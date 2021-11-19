import { createSlice } from "@reduxjs/toolkit";
import { addQuizIds } from "../topics/topicSlice";

const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId } = action.payload;
      state.quizzes[id] = {
        id: id,
        name: name,
        topicId: topicId,
        cardIds: []
      }
    },

  }
})

export const addQuizForTopicId = (payload) => {
  return (dispatch) => {
    const {id, name, topicId, cardIds} = payload;

    dispatch(addQuiz({name: name, topicId: topicId, cardIds: cardIds, id: id}));
    dispatch(addQuizIds(topicId));
  }
}

export const { addQuiz } = quizzesSlice.actions;
export const selectQuizzes = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer 