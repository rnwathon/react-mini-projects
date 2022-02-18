import * as React from 'react';
import data from './data';
import Accordion from './Components/Accordion';

function FAQ() {
  const [questions, setQuestions] = React.useState(data);

  return (
    <div className="bg-red-400 h-screen flex flex-col items-center justify-center p-5">
      <div className="bg-white w-full sm:w-2/3 md:w-1/2 rounded-xl p-5 flex gap-2">
        <h1 className="text-3xl w-1/3">Frequently Asked Question</h1>
        <div className="w-2/3">
          {questions.map((question) => (
            <Accordion key={question.id} {...question} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
