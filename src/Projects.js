import React, { useState } from "react";

const questions = [
  { id: 1, question: "How do we pass data to components?", answer: "props" },
  {
    id: 2,
    question: "What is the virtual DOM?",
    answer: "A lightweight copy of the real DOM used for efficient updates.",
  },
  {
    id: 3,
    question: "What is the purpose of useState in React?",
    answer: "To manage state in functional components.",
  },
  {
    id: 4,
    question: "How do you create a component in React?",
    answer: "By using a function or a class that returns JSX.",
  },
  {
    id: 5,
    question: "What is JSX?",
    answer: "A syntax extension for JavaScript that looks like HTML.",
  },
  {
    id: 6,
    question: "What does useEffect do?",
    answer: "It allows you to perform side effects in a functional component.",
  },
  {
    id: 7,
    question: "What is the difference between state and props?",
    answer:
      "State is managed within the component, while props are passed to the component.",
  },
  {
    id: 8,
    question: "What is React?",
    answer: "A JavaScript library for building user interfaces.",
  },
  {
    id: 9,
    question: "What is a key in React and why is it important?",
    answer:
      "A unique identifier for list items to help React update the DOM efficiently.",
  },
  {
    id: 10,
    question: "What is a React Fragment?",
    answer:
      "A way to group multiple elements without adding an extra DOM node.",
  },
];

function Projects() {
  const [selected, setSelected] = useState(null);
  const [tempSelected, setTempSelected] = useState(null);

  // Handle click to select an item permanently
  function handleClick(id) {
    setSelected(id !== selected ? id : null);
  }

  // Handle mouse enter to temporarily select an item
  function handleMouseEnter(id) {
    setTempSelected(id);
  }

  // Handle mouse leave to remove temporary selection
  function handleMouseLeave(id) {
    setTempSelected(id === null);
  }

  return (
    <div className="container">
      <Questionsandanswer
        onHandleClick={handleClick}
        selected={selected}
        tempSelected={tempSelected}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
}

function Questionsandanswer({
  onHandleClick,
  selected,
  tempSelected,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <>
      {questions.map((question) => (
        <div
          key={question.id}
          className={
            selected === question.id || tempSelected === question.id
              ? "fancy-item-selected"
              : "fancy-item"
          }
          onClick={() => onHandleClick(question.id)}
          onMouseEnter={() => onMouseEnter(question.id)} // Set temp selection on hover
          onMouseLeave={onMouseLeave} // Reset temp selection when mouse leaves
        >
          <p>
            {selected === question.id ? question.answer : question.question}
          </p>
        </div>
      ))}
    </>
  );
}

export default Projects;
