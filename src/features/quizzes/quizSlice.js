import { createSlice } from "@reduxjs/toolkit";
import { addTopic, addQuizIds } from "../topics/topicSlice";

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
        name: name,
        topicId: topicId,
        cardIds: cardIds
      }
    },

  }
})

export const addQuizForTopicId = (payload) => {
    const {id, name, topicId,cardIds} = payload;
    
    return (dispatch) => {
    dispatch(addQuiz({id, name, topicId, cardIds}));
    dispatch(addQuizIds({topicId, id}));
  }
}

export const { addQuiz } = quizSlice.actions;
export const selectQuizzes = (state) => state.quizzes.quizzes;
export default quizSlice.reducer 