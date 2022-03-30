import * as React from 'react';
import Card from './Components/Card';
import { categories } from './Constant';

const API_URL = 'https://opentdb.com/api.php';

function TriviaQuiz() {
  const [isStarted, setIsStarted] = React.useState(false);

  const handleClickCategory = (value) => {
    setIsStarted(true);
    fetch(`${API_URL}/?amount=10&difficulty=easy&type=multiple&category=${value}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="h-48 bg-violet-500 grid items-center justify-center mb-4">
        <h1 className="text-2xl text-white">Trivia Quiz</h1>
      </div>
      <div className="container mx-auto text-center">
        {isStarted ? (
          <div>Quiz is started</div>
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
