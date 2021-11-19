import { createSlice } from "@reduxjs/toolkit";
import { addTopic, addQuizIds } from "../topics/topicSlice";

const quizSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { quizId, name, topicId, cardIds } = action.payload;
      state.quizzes[quizId] = {
        quizId: quizId,
        name: name,
        topicId: topicId,
        cardIds: cardIds
      }
    },

  }
})

export const addQuizForTopicId = (payload) => {
    const {quizId, name, topicId,cardIds} = payload;
    
    return (dispatch) => {
    dispatch(addQuiz({quizId, name, topicId, cardIds}));
    dispatch(addQuizIds({topicId, quizId}));
  }
}

export const { addQuiz } = quizSlice.actions;

export const selectQuizzes = state => state.quizzes.quizzes;
export default quizSlice.reducer 