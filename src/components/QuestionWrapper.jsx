import Answer from "./Answer";
import Question from "./Question";

export default function QuestionWrapper(props) {
  const {question, answer} = props.question;
  const {setQuestsStatus} = props;
  
    return (
      <>
        <Question question={question} />
        <Answer answer={answer}
                setQuestsStatus={setQuestsStatus} />
      </>
    )
  }