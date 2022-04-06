import * as React from 'react';
import Card from './Components/Card';
import Option from './Components/Option';
import Question from './Components/Question';
import Skeleton from './Components/Skeleton';
import { categories } from './Constant';
import shuffleArr from './Utils/shuffleArr';

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
    case 'RESET':
      return { quiz: [], answers: [] };
    default:
      return state;
  }
};

const SkeletonQuestion = () => (
  <Card className="px-4 py-8 -mt-16 mb-4 flex flex-col items-center gap-2">
    <Skeleton className="w-3/4" />
    <Skeleton className="w-2/3" />
    <Skeleton className="w-1/2" />
  </Card>
);

const SkeletonOptions = () => (
  <>
    <Card className="px-2 py-4 flex justify-center">
      <Skeleton className="w-1/2" />
    </Card>
    <Card className="px-2 py-4 flex justify-center">
      <Skeleton className="w-1/2" />
    </Card>
    <Card className="px-2 py-4 flex justify-center">
      <Skeleton className="w-1/2" />
    </Card>
    <Card className="px-2 py-4 flex justify-center">
      <Skeleton className="w-1/2" />
    </Card>
  </>
);

function TriviaQuiz() {
  const [activeQuestion, setActiveQuestion] = React.useState();
  const [route, setRoute] = React.useState('home');
  const [score, setScore] = React.useState(0);
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = React.useState(false);

  const isPrevDisabled = isLoading || activeQuestion === 0;
  const isNextDisabled = isLoading || !state.answers[activeQuestion];

  const handleClickCategory = (value) => {
    setRoute('ingame');
    setIsLoading(true);
    fetch(`${API_URL}/?amount=10&difficulty=easy&type=multiple&category=${value}`)
      .then((res) => res.json())
      .then((data) => {
        const quizWithOptions = data.results.map((quiz) => ({
          ...quiz,
          options: shuffleArr([quiz.correct_answer, ...quiz.incorrect_answers]),
        }));

        dispatch({ type: 'SET_QUIZ', payload: quizWithOptions });
        setActiveQuestion(0);
        setIsLoading(false);
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
    let currentScore = 0;
    for (let i = 0; i < state.answers.length; i += 1) {
      const playerAnswer = state.answers[i];
      const correctAnswer = state.quiz[i].correct_answer;
      if (playerAnswer === correctAnswer) currentScore += 10;
    }
    setRoute('result');
    setScore(currentScore);
  };

  const handleClickPlayAgain = () => {
    dispatch({ type: 'RESET' });
    setRoute('home');
  };

  return (
    <>
      <div className="h-48 bg-violet-500 grid items-center justify-center mb-4">
        <h1 className="text-2xl text-white">Trivia Quiz</h1>
      </div>
      <div className="container mx-auto text-center p-2">
        {route === 'home' && (
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
        {route === 'ingame' && (
          <>
            {isLoading ? (
              <SkeletonQuestion />
            ) : (
              <Question className="-mt-16 mb-4">
                {state?.quiz[activeQuestion]?.question}
              </Question>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {isLoading ? (
                <SkeletonOptions />
              ) : (
                state?.quiz[activeQuestion]?.options?.map((option, idx) => (
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
                ))
              )}
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
              {activeQuestion === 9 ? (
                <button
                  type="button"
                  className="px-4 py-2 bg-violet-500 text-white border rounded-md hover:bg-violet-600"
                  onClick={handleClickResult}
                >
                  Result
                </button>
              ) : (
                <button
                  type="button"
                  className="px-4 py-2 bg-white border rounded-md hover:bg-violet-100 disabled:bg-slate-100 disabled:text-slate-400"
                  onClick={handleClickNext}
                  disabled={isNextDisabled}
                >
                  Next
                </button>
              )}
            </div>
          </>
        )}
        {route === 'result' && (
          <div>
            <h2 className="text-xl mb-2"> Result </h2>
            <h3 className="text-3xl font-bold mb-2"> Score: {score} </h3>
            <button
              type="button"
              className="px-4 py-2 mb-4 text-white bg-violet-500 rounded-md hover:bg-violet-600"
              onClick={handleClickPlayAgain}
            >
              {' '}
              Play Again{' '}
            </button>
            <h4 className="mb-2"> Review </h4>
            {state?.quiz?.map((quiz, idx) => (
              <Card key={`review-${idx}`} className="mb-2">
                <p className="mb-2" dangerouslySetInnerHTML={{ __html: quiz.question }} />
                <p>
                  Your Answer:{' '}
                  <span
                    className="font-bold"
                    dangerouslySetInnerHTML={{
                      __html: state?.answers[idx],
                    }}
                  />{' '}
                </p>
                <p className="text-green-600">
                  Correct Answer:{' '}
                  <span
                    className="font-bold"
                    dangerouslySetInnerHTML={{
                      __html: quiz?.correct_answer,
                    }}
                  />{' '}
                </p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default TriviaQuiz;
