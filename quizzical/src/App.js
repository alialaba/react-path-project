import Starter from "./components/Starter";
import Questions from "./components/Questions";
import { useState, useEffect } from "react";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [quizs, setQuizs] = useState(null);


  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      console.log(response)
      const data = await response.json();
      console.log(data);
      const newResult = [];
      data.results.map((result) => {
        let shuffledAnswers = shuffleArrays([decodeText(result.correct_answer), ...result.incorrect_answers.map(ans => decodeText(ans))])//use map on incorrect_answers property to use decodeText fn
        let answers = shuffledAnswers.map((ans) => ({ value: ans, isSelected: false, class: "" }));
        console.log(answers);
        newResult.push({
          question: decodeText(result.question),
          answers: answers,
          correct_answer: result.correct_answer

        })
      })
      setQuizs(newResult);
    }
    loadData();

  }, []);

  function decodeText(txt) {
    const text = document.createElement("textarea");
    text.innerHTML = txt;
    return text.value;
  }

  function shuffleArrays(array) {
    let currentIndex = array.length, randomIndex;

    //while there is no element to shuffle
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
    return array;

  }



  const onStart = () => {
    setStartQuiz(preStart => !preStart);
  }


  return (
    <div className="App">
      {!startQuiz ? <Starter onStart={onStart} /> :
        <Questions
          quizs={quizs}
        />}
    </div>
  );
}

export default App;
