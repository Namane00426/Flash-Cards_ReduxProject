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
        cardIds: cardIds
      }
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

export const selectQuizzes = state =>  state.quizzes.quizzes;
export const { addQuiz } = quizSlice.actions;

export default quizSlice.reducer 
