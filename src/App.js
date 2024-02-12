import { useEffect, useState } from 'react';
import './App.css';

function App() {


  const [questions, setQuestions] = useState([
    { id: 1, question: 'top run scoreer in cricket?', answer: [{ selected: false, name: "Sachin" }, { selected: false, name: "Dravid" }, { selected: false, name: "Lara" }, { selected: false, name: "Kohli" },], correct: 'Sachin', answered: false, correct_answer: false },
    { id: 2, question: 'top wicket taker in cricket?', answer: [{ selected: false, name: "Warne" }, { selected: false, name: "Murali" }, { selected: false, name: "McGrath" }, { selected: false, name: "Kumble" },], correct: 'Warne', answered: false, correct_answer: false },
    { id: 3, question: 'top run scoreer in cricket?', answer: [{ selected: false, name: "Sachin" }, { selected: false, name: "Dravid" }, { selected: false, name: "Lara" }, { selected: false, name: "Kohli" },], correct: 'Sachin', answered: false, correct_answer: false },
    { id: 4, question: 'top wicket taker in cricket?', answer: [{ selected: false, name: "Warne" }, { selected: false, name: "Murali" }, { selected: false, name: "McGrath" }, { selected: false, name: "Kumble" },], correct: 'Warne', answered: false, correct_answer: false },
    { id: 5, question: 'top run scoreer in cricket?', answer: [{ selected: false, name: "Sachin" }, { selected: false, name: "Dravid" }, { selected: false, name: "Lara" }, { selected: false, name: "Kohli" },], correct: 'Sachin', answered: false, correct_answer: false },

  ]);


  useEffect(() => {

    fetch('https://the-trivia-api.com/v2/questions')
      .then(res => res.json())
      .then(data => {


        if (data?.length > 0) {

          let newQuestions = [...questions];

          data.map((q, index) => {

            let newAnswers = [];

            q.incorrectAnswers.map((ans) => {
              newAnswers.push({ name: ans, selected: false })
            })
            newAnswers.push({ name: q.correctAnswer, selected: false })

            newQuestions.push({ id: index + questions.length + 1, question: q.question["text"], answer: newAnswers, correct: q.correctAnswer, answered: false, correct_answer: false })

          })

          setQuestions(newQuestions)
        }
        console.log(data)
      })
  }, [])





  const chooseAnswer = (question, ans) => {
    let newQuestions = []

    questions.map(q => {
      if (q.id === question.id) {

        let newAnswers = [];

        q.answer?.map(a => {
          if (a.name === ans.name) {

            newAnswers.push({ ...a, selected: true })
          } else {
            newAnswers.push({ ...a, selected: false })
          }
        })


        let correct_answer = false;


        if (q.correct === ans.name) {
          correct_answer = true
        }

        newQuestions.push({ ...q, answered: true, correct_answer: correct_answer, answer: newAnswers })
      } else {
        newQuestions.push(q)
      }
    })

    setQuestions(newQuestions)

  }


  const getColor = (q) => {

    let color = 'aliceblue';

    if (q.answered) {
      if (q.correct_answer) {
        color = 'lightgreen'
      } else {
        color = 'lightcoral'
      }
    }

    return color;
  }


  const getScore = () => {

    let attempted = questions.filter(q => q.answered).length;

    let total_questions = questions.length;

    let correct_answers = questions.filter(q => q.correct_answer).length;


    let percentage = (correct_answers / total_questions) * 100;


    return (
      <div>
        <div>Attempted: {attempted}</div>
        <div>Correct: {correct_answers}</div>
        <div>Percentage: {percentage}%</div>
        <div>{`${correct_answers}/${attempted}`}</div>
      </div>
    )
  }


  return (
    <div className="App">

      <div className="quiz_container">

        <div>{getScore()}</div>

        {questions?.map(question => {
          return (
            <div className='question_ans_wrapper' style={{ backgroundColor: getColor(question) }}>

              <div className='question'>{question.question}</div>
              <div className='ans_wrapper'>
                {question.answer?.map((ans, index) => {
                  return <div className='ans' key={index}>
                    <input disabled={question.answered} checked={ans.selected} type='radio' value={ans.name} onClick={() => chooseAnswer(question, ans)} />
                    <span>{ans.name}</span>
                  </div>
                })}
              </div>

            </div>
          )
        })}

      </div>

    </div>
  );
}



export default App;
