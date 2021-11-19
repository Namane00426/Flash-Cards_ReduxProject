import { createSlice } from "@reduxjs/toolkit";


// When addTopic action used, payload for it look like
//  {id: '123456', name: 'name of topic', icon: 'icon url'}

const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {
      "cb727b37-b245-4e63-9d1d-98175aaba124": 
      {
      id:"cb727b37-b245-4e63-9d1d-98175aaba124",
      name:"books",
      icon:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/book.svg",
      quizIds:[]
    }
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
      const { topicId } = action.payload;
      state.topics[topicId].quizIds.push(action.payload.quizId);
    }
  }
})

export const {addTopic, addQuizIds} = topicsSlice.actions;

export const selectTopics = state => state.topics.topics;
export default topicsSlice.reducer
// console.log(topicsSlice.actions);
