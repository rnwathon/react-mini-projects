import * as React from 'react';
import Card from './Components/Card';
import Option from './Components/Option';
import Question from './Components/Question';
import { categories } from './Constant';

const API_URL = 'https://opentdb.com/api.php';

const initialState = {
  quiz: [],
  answers: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_QUIZ':
      return { ...state, quiz: action.payload };
    case 'SET_ANSWER':
      return { ...state, answers: action.payload };
    default:
      return state;
  }
};

function TriviaQuiz() {
  const [isStarted, setIsStarted] = React.useState(false);
  const [activeQuestion, setActiveQuestion] = React.useState();
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const isPrevDisabled = activeQuestion === 0;
  const isNextDisabled = !state.answers[activeQuestion];

  const handleClickCategory = (value) => {
    setIsStarted(true);
    fetch(`${API_URL}/?amount=10&difficulty=easy&type=multiple&category=${value}`)
      .then((res) => res.json())
      .then((data) => {
        const quizWithOptions = data.results.map((quiz) => ({
          ...quiz,
          options: [quiz.correct_answer, ...quiz.incorrect_answers],
        }));

        dispatch({ type: 'SET_QUIZ', payload: quizWithOptions });
        setActiveQuestion(0);
      })
      .catch((err) => console.log(err));
  };

  const handleChangeOption = (e, idx) => {
    const currentAnswers = [...state.answers];
    if (currentAnswers[idx]) {
      currentAnswers.splice(idx, 1, e.target.value);
    } else {
      currentAnswers[idx] = e.target.value;
    }
    dispatch({ type: 'SET_ANSWER', payload: currentAnswers });
  };

  const handleClickNext = () => {
    setActiveQuestion((prevActiveQuestion) => prevActiveQuestion + 1);
  };

  const handleClickPrev = () => {
    setActiveQuestion((prevActiveQuestion) => prevActiveQuestion - 1);
  };

  const handleClickResult = () => {
    let score = 0;
    for (let i = 0; i < state.answers.length; i += 1) {
      const playerAnswer = state.answers[i];
      const correctAnswer = state.quiz[i].correct_answer;
      if (playerAnswer === correctAnswer) score += 10;
    }
    console.log(score);
  };

  return (
    <>
      <div className="h-48 bg-violet-500 grid items-center justify-center mb-4">
        <h1 className="text-2xl text-white">Trivia Quiz</h1>
      </div>
      <div className="container mx-auto text-center p-2">
        {isStarted ? (
          <>
            <Question className="-mt-16 mb-4">
              {state?.quiz[activeQuestion]?.question}
            </Question>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {state?.quiz[activeQuestion]?.options?.map((option, idx) => (
                <Option
                  key={`option-${idx}`}
                  id={option}
                  name="options"
                  value={option}
                  onChange={(e) => handleChangeOption(e, activeQuestion)}
                  checked={option === state?.answers[activeQuestion]}
                >
                  {option}
                </Option>
              ))}
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                className="px-4 py-2 bg-white border rounded-md hover:bg-violet-100 disabled:bg-slate-100 disabled:text-slate-400"
                onClick={handleClickPrev}
                disabled={isPrevDisabled}
              >
                Prev
              </button>
              {activeQuestion < 9 ? (
                <button
                  type="button"
                  className="px-4 py-2 bg-white border rounded-md hover:bg-violet-100 disabled:bg-slate-100 disabled:text-slate-400"
                  onClick={handleClickNext}
                  disabled={isNextDisabled}
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  className="px-4 py-2 bg-violet-500 text-white border rounded-md hover:bg-violet-600"
                  onClick={handleClickResult}
                >
                  Result
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2">
            {categories.map((category, idx) => (
              <Card
                key={`category-${idx}`}
                className="cursor-pointer text-violet-500 hover:-translate-y-1 hover:shadow-xl hover:text-white hover:bg-violet-500 hover:shadow-violet-600 hover:border-violet-500"
                onClick={() => handleClickCategory(category.value)}
              >
                {category.label}
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default TriviaQuiz;
