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
      
    }
  }
})

export const {addTopic} = topicsSlice.actions;

export const selectTopics = state => state.topics.topics;
export default topicsSlice.reducer
// console.log(topicsSlice.actions);
