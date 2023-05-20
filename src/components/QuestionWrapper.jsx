import styled from "styled-components";
import Answer from "./Answer";
import Question from "./Question";
import setaPlay from "../assets/seta_play.png";

export default function QuestionWrapper(props) {
  const {question, answer} = props.question;
  const {number, setQuestsStatus} = props;
  
    return (
      <SCQuestWrapper>
        {/*<Question question={question} />
        <Answer answer={answer}
    setQuestsStatus={setQuestsStatus} />*/}

      <span>Pergunta {(number + 1).toString()}</span>
      <img src={setaPlay} />
      </SCQuestWrapper>
    );
}

const SCQuestWrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
  height: 65px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  background-color: #FFF;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    margin-bottom: 140px;
  }

  span {
    font-family: 'Recursive';
    font-style: normal;
    font-size: 16px;
    font-weight: 700;
    color: #333;
  }
`;