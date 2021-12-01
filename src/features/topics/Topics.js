import React from "react";
// import NewTopicForm from "../../components/NewTopicForm";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { selectTopics } from "./topicSlice";
import { useSelector } from "react-redux";
 

export default function Topics() {

  const topics = useSelector(selectTopics);
  if(!topics) {
    alert('Please add topics first')
    return;
  }

  return (
    <section className="center">
      <h1>Topics</h1>
      <ul className="topics-list center">
        {Object.values(topics).map((topic) => (
          <li className="topic center" key={topic.id}>
          <Link to={ROUTES.topicRoute(topic.id)} className="topic-link">
           <div className="topic-container">
             <img src={topic.icon} alt="" />
             <div className="text-content">
               <h2>{topic.name}</h2>
               <p>{topic.quizIds.length} Quizzes</p>
             </div>
           </div>
         </Link>
          </li>
        ))}
      </ul>
      <Link
        to={ROUTES.newTopicRoute()}
        className="button create-new-topic-button"
      >
        Create New Topic
      </Link>
    </section>
  );
}
