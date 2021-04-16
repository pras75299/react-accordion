import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data);
  return <main>
    <div className="container">
      <h3>Questions and answers about login</h3>
      <section className="info">
        {questions.map(() => {
          return <SingleQuestion key={questions.id} {...questions}/>
        })}
      </section>
    </div>
  </main>;
}

export default App;
