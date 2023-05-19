import QuestionWrapper from "./QuestionWrapper";

export default function Deck(props) {
  const {deck, finishedQuestions, setQuestsStatus} = props;
  
    return (
      <>
        {deck.map(q => <QuestionWrapper question={q} setQuestsStatus={setQuestsStatus} />)}
      </>
    )
  }