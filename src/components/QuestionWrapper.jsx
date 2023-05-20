import styled from "styled-components";
import setaPlay from "../assets/seta_play.png";
import setaVirar from "../assets/seta_virar.png";

export default function QuestionWrapper(props) {
  const {question, answer} = props.question;
  const {number, setQuestsStatus} = props;
  
  return (
    <>
    <SCQuestWrapper>
      <span>Pergunta {(number + 1).toString()}</span>
      <img src={setaPlay} />
    </SCQuestWrapper>
    <SCQuestion>
      <span>{question}</span>
      <div>
        <img src={setaVirar} />
      </div>
    </SCQuestion>
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

  display: none;
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

  display: flex;
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