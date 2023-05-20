import styled from "styled-components";
import setaPlay from "../assets/seta_play.png";
import setaVirar from "../assets/seta_virar.png";
import { useState } from "react";

export default function QuestionWrapper(props) {
  const [displayQuestion, setDisplayQuestion] = useState(false);
  const [displayAnswer, setDisplayAnswer] = useState(false);

  const {question, answer} = props.question;
  const {number, setQuestsStatus} = props;

  function resolveDisplayQuestion() {
    if (!displayQuestion) {
      setDisplayQuestion(true);
      setDisplayAnswer(false);
    }
  }

  function resolveDisplayAnswer() {
    if (!displayAnswer) {
      setDisplayQuestion(false);
      setDisplayAnswer(true);
    }
  }
  
  return (
    <>
    <SCQuestWrapper display={(!displayAnswer && !displayQuestion) ? "flex" : "none"} >
      <span>Pergunta {(number + 1).toString()}</span>
      <img onClick={() => resolveDisplayQuestion()} src={setaPlay} />
    </SCQuestWrapper>

    <SCQuestion display={displayQuestion ? "flex" : "none"} >
      <span>{question}</span>
      <div>
        <img onClick={() => resolveDisplayAnswer()} src={setaVirar} />
      </div>
    </SCQuestion>

    <SCAnswer display={displayAnswer ? "flex" : "none"}>
      <span>{answer}</span>
      <div>
        <button>Não lembrei</button>
        <button>Quase não lembrei</button>
        <button>Zap!</button>
      </div>
    </SCAnswer>
    </>
  );
}

const SCQuestWrapper = styled.div`

  margin-bottom: 20px;
  width: 100%;
  height: 65px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  background-color: #FFF;
  padding: 0 12px;

  display: ${props => props.display};
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

const SCQuestion = styled.div`
  margin-bottom: 20px;
  width: 100%;
  height: 131px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  background-color: #FFF;
  padding: 0 12px;

  display: ${props => props.display};
  justify-content: space-between;
  align-items: flex-start;

  div {
    height: inherit;
    padding-bottom: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  img {
    width: 30px;
    height: 20px;
  }

  span {
    margin-top: 12px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333;
  }
`;

const SCAnswer = styled.div`
  margin-bottom: 20px;
  width: 100%;
  height: 131px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  background-color: #FFF;
  padding: 0 12px;

  display: ${props => props.display};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  span {
    margin-top: 12px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  button {
    width: 85px;
    height: 37px;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    border-radius: 5px;
    color: #FFF;

    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-child(1) {
      background-color: #FF3030;
      border: 1px solid #FF3030;
    }

    &:nth-child(2) {
      background-color: #FF922E;
      border: 1px solid #FF922E;
    }

    &:nth-child(3) {
      background-color: #2FBE34;
      border: 1px solid #2FBE34;
    }
  }

`;