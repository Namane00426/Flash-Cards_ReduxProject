import { createSlice } from "@reduxjs/toolkit";


// When addTopic action used, payload for it look like
//  {id: '123456', name: 'name of topic', icon: 'icon url'}

const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {
     
    }
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
              }
    },
    addQuizIds: (state, action) => {
      const { topicId, id } = action.payload;
      if(!topicId) {
        alert('Select topic or add a topic first.');
        return state;
      }
      state.topics[topicId].quizIds.push(id);
    }
  }
})

export const {addTopic, addQuizIds} = topicsSlice.actions;

export const selectTopics = state => state.topics.topics;
export default topicsSlice.reducer
// console.log(topicsSlice);
