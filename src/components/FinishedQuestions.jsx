import styled from "styled-components";
import AnswerImage from "./AnswerImage";

export default function FinishedQuestions(props) {
  const { finishedQuestsStatus, total } = props;

  return (
    <>
      <SCContagemConcluidos>
        <div>
          <span>{finishedQuestsStatus.length}</span>
          /<span>{total}</span>
          <span> CONCLUÍDOS</span>
        </div>

        <div>
          {finishedQuestsStatus.map((qw, i) => <AnswerImage key={i} status={qw[1]} />)}
        </div>
      </SCContagemConcluidos>
    </>
  );
}

const SCContagemConcluidos = styled.div`
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #333;
  width: 100%;

  div {
    margin-top: 8px;
    display: flex;
    justify-content: center;
    gap: 5px;
  }
`;

const SCMensagemConcluidos = styled.div`
    
`;