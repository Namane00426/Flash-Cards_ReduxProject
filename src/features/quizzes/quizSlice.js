import { createSlice } from "@reduxjs/toolkit";
import { addQuizIds } from "../topics/topicSlice";

const quizSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;
      state.quizzes[id] = {
        id: id,
        topicId: topicId,
        name: name,
        cardIds: [cardIds]
      }
    },
  }
})

export const addQuizForTopicId = (payload) => {
    const {quizId, topicId, name, cardIds} = payload;
    
    return (dispatch) => {
    dispatch(addQuiz({id:quizId, topicId:topicId, name:name, cardIds:cardIds}));
    dispatch(addQuizIds({topicId:topicId, id:quizId}));
  }
}

export const { addQuiz } = quizSlice.actions;

export const selectQuizzes = state => state.quizzes;

export default quizSlice.reducer 
