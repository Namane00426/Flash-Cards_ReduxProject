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
        quizId: id,
        topicId: topicId,
        name: name,
        cardIds: cardIds
      }
    },
    addCardIds: (state, action) => {
      const { id, quizId } = action.payload;
      state.quizzes[quizId].cardIds.push(id);
    }
  }
})

export const addQuizForTopicId = (payload) => {
    const {id, topicId, name, cardIds} = payload;
    
    return (dispatch) => {
    dispatch(addQuiz({id, name, topicId, cardIds}));
    dispatch(addQuizIds({topicId:topicId, quizId:id}));
  }
}

export const { addQuiz, addCardIds } = quizSlice.actions;

export const selectQuizzes = state =>  state.quizzes.quizzes;

export default quizSlice.reducer 
