import styled from "styled-components";

export default function FinishedQuestions() {

  return (
    <SCContagemConcluidos>
      <span>0</span>
      /<span>4</span>
      <span> CONCLUÍDOS</span>
    </SCContagemConcluidos>
  );
}

const SCContagemConcluidos = styled.div`
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #333;
`;