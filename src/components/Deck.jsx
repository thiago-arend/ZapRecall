import styled from "styled-components";
import QuestionWrapper from "./QuestionWrapper";

export default function Deck(props) {
  const { deck, finishedQuestions, setQuestsStatus } = props;

  return (
    <>
      {deck.map((q, i) =>  <QuestionWrapper 
                            key={q.question}
                            number={i}
                            question={q}
                            setQuestsStatus={setQuestsStatus}
                           />)}
    </>
  );
}