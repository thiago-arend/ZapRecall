import styled from "styled-components";
import QuestionWrapper from "./QuestionWrapper";

export default function Deck(props) {
  const { geraDataTest, deck, finishedQuestsStatus, setFinishedQuestsStatus } = props;

  return (
    <>
      {deck.map((q, i) =>  <QuestionWrapper 
                            key={q.question}
                            geraDataTest={geraDataTest}
                            number={i}
                            question={q}
                            finishedQuestsStatus={finishedQuestsStatus}
                            setFinishedQuestsStatus={setFinishedQuestsStatus}
                           />)}
    </>
  );
}