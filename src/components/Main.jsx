import Deck from "./Deck";
import FinishedQuestions from "./FinishedQuestions";
import DECK from "../deck";
import { useState } from "react";

export default function Main() {
  const [finishedQuestions, setFinishedQuestions] = useState([]);

  function setQuestsStatus() {

  }
  
    return (
      <>
        <Deck deck={DECK} 
              finishedQuestions={finishedQuestions}
              setQuestsStatus={setQuestsStatus} />
        <FinishedQuestions finishedQuestions={finishedQuestions}/>
      </>
    )
  }