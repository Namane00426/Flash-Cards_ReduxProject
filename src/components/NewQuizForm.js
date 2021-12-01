import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ROUTES from "../app/routes";
import { useSelector, useDispatch } from "react-redux";

import { selectTopics } from "../features/topics/topicSlice";
import { addQuizForTopicId } from "../features/quizzes/quizSlice";
import { addCard} from "../features/cards/cardSlice";

export default function NewQuizForm() {
  const [name, setName] = useState("");
  const [cards, setCards] = useState([]);
  const [topicId, setTopicId] = useState("");
  const history = useHistory();
  const topics = useSelector(selectTopics);
  const dispatch = useDispatch();
  const id = uuidv4();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      return;
    }

    const cardIds = [];

    cards.forEach((card) => {
      let uniqueId = uuidv4();
      cardIds.push(uniqueId);
      dispatch(addCard({
        id: uniqueId, front: card.front, back: card.back}))
    }) 

    // create the new cards here and add each card's id to cardIds
    // create the new quiz here
    
    dispatch(
      addQuizForTopicId({
      name, id, topicId, cardIds
    }));
    

    history.push(ROUTES.quizzesRoute());
  };

  const addCardInputs = (e) => {
    e.preventDefault();
    setCards(cards.concat({ front: "", back: "" }));
  };

  const removeCard = (e, index) => {
    e.preventDefault();
    setCards(cards.filter((card, i) => index !== i));
  };

  const updateCardState = (index, side, value) => {
    const newCards = cards.slice();
    newCards[index][side] = value;
    setCards(newCards);
    // -> 0:{front: ff, back: bb}
  };

  return (
    <section>
      <h1>Create a new quiz</h1>
      <div className="center">
      <form  onSubmit={handleSubmit}>
        <input
          id="quiz-name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Quiz Title"
        />
        <select
          id="quiz-topic"
          onChange={(e) => setTopicId(e.currentTarget.value)}
          placeholder="Topic"
        >
          <option value="">Topic</option>
          {Object.values(topics).map((topic) => (
            <option key={topic.id} value={topic.id}>
              {topic.name}
            </option>
          ))}
        </select>
        {cards.map((card, index) => (
          <div key={index} className="card-front-back">
            <input
              id={`card-front-${index}`}
              value={cards[index].front}
              onChange={(e) =>
                updateCardState(index, "front", e.currentTarget.value)
              }
              placeholder="Front"
              required
            />

            <input
              id={`card-back-${index}`}
              value={cards[index].back}
              onChange={(e) =>
                updateCardState(index, "back", e.currentTarget.value)
              }
              placeholder="Back"
              required
            />

            <button
              onClick={(e) => removeCard(e, index)}
              className="remove-card-button center"
            >
              Remove Card
            </button>
          </div>
        ))}
        <div className="actions-container center">
          <button onClick={addCardInputs}>Add a Card</button>
          <button>Create Quiz</button>
        </div>
      </form>
      </div>
    </section>
  );
}
