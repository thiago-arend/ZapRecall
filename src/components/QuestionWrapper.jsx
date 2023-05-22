import styled from "styled-components";
import setaPlay from "../assets/seta_play.png";
import setaVirar from "../assets/seta_virar.png";
import iconeCerto from "../assets/icone_certo.png";
import iconeQuase from "../assets/icone_quase.png";
import iconeErro from "../assets/icone_erro.png";
import SCNormalBlackRecursive from "../styles";
import { useState } from "react";

export default function QuestionWrapper(props) {
  const imagensResposta = [setaPlay, iconeErro, iconeQuase, iconeCerto];
  
  const [displayQuestion, setDisplayQuestion] = useState(false);
  const [displayAnswer, setDisplayAnswer] = useState(false);
  const [wrapperStatus, setWrapperStatus] = useState(0);

  const { question, answer } = props.question;
  const { geraDataTest, number, finishedQuestsStatus, setFinishedQuestsStatus } = props;

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

  function resolveResponder(status) {
    // se question respondidas ainda nao inclui a question
    if (!finishedQuestsStatus.map(p => p[0]).includes(number)) {
      // insere question nas respondidas passando [id, status]
      setFinishedQuestsStatus([...finishedQuestsStatus, [number, status]]);
      // atualiza estilo questionWrapper
      setWrapperStatus(status);
      // mostra novamente questionWrapper
      setDisplayQuestion(false);
      setDisplayAnswer(false);
    }
  }

  return (
    <>
      <SCQuestWrapper
        data-test="flashcard"
        status={wrapperStatus}
        display={(!displayAnswer && !displayQuestion) ? "flex" : "none"} >
        <span data-test="flashcard-text">Pergunta {(number + 1).toString()}</span>
        <input data-test={geraDataTest(wrapperStatus)}
          type="image" disabled={(wrapperStatus !== 0) ? true : false}
          onClick={() => resolveDisplayQuestion()}
          src={imagensResposta[wrapperStatus]} />
      </SCQuestWrapper>

      <SCQuestion display={displayQuestion ? "flex" : "none"} >
        <span data-test="flashcard-text">{question}</span>
        <div>
          <img data-test="turn-btn" onClick={() => resolveDisplayAnswer()} src={setaVirar} />
        </div>
      </SCQuestion>

      <SCAnswer display={displayAnswer ? "flex" : "none"}>
        <span data-test="flashcard-text">{answer}</span>
        <div>
          <button data-test="no-btn" onClick={() => resolveResponder(1)} >Não lembrei</button>
          <button data-test="partial-btn" onClick={() => resolveResponder(2)} >Quase não lembrei</button>
          <button data-test="zap-btn" onClick={() => resolveResponder(3)} >Zap!</button>
        </div>
      </SCAnswer>
    </>
  );
}

const SCQuestWrapper = styled(SCNormalBlackRecursive)`
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
  span {
    font-size: 16px;
    font-weight: 700;
    text-decoration: ${props => (props.status != 0) ? "line-through" : "none"};
    color: ${props => {
      switch (props.status) {
        case 1:
          return "#FF3030";
          break;
        case 2:
          return "#FF922E";
          break;
        case 3:
          return "#2FBE34";
          break;
        default:
          return "#333";
      }
  }};
  }
`;

const SCQuestion = styled(SCNormalBlackRecursive)`
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
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
`;

const SCAnswer = styled(SCNormalBlackRecursive)`
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
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
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