import styled from "styled-components";
import QuestionWrapper from "./QuestionWrapper";

export default function Deck(props) {
  const { deck, finishedQuestsStatus, setFinishedQuestsStatus } = props;

  return (
    <>
      {deck.map((q, i) =>  <QuestionWrapper 
                            key={q.question}
                            number={i}
                            question={q}
                            finishedQuestsStatus={finishedQuestsStatus}
                            setFinishedQuestsStatus={setFinishedQuestsStatus}
                           />)}
    </>
  );
}