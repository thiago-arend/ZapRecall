import styled from "styled-components";
import AnswerImage from "./AnswerImage";
import partyImage from "../assets/party.png";
import sadImage from "../assets/sad.png";

export default function FinishedQuestions(props) {
  const { geraDataTest, finishedQuestsStatus, total } = props;

  function preparaMensagem() {
    const mensagemFinal = [];
    const arrayVermelhos = finishedQuestsStatus.filter(qw => qw[1] === 1); // filtra os vermelhos (cod 1)
    if (arrayVermelhos.length > 0) {
      mensagemFinal.push(sadImage);
      mensagemFinal.push("Putz...");
      mensagemFinal.push("Ainda faltam alguns... Mas não desanime!");
    }
    else {
      mensagemFinal.push(partyImage);
      mensagemFinal.push("Parabéns!");
      mensagemFinal.push("Você não esqueceu de nenhum flashcard!");
    }

    return mensagemFinal;
  }

  return (
    <div>
      {(finishedQuestsStatus.length === total) && <SCMensagemConcluidos data-test="finish-text">
                                                    <div>
                                                      <img src={preparaMensagem()[0]} />
                                                      <span>{preparaMensagem()[1]}</span>
                                                    </div>
                                                    <div>
                                                      <p>{preparaMensagem()[2]}</p>
                                                    </div>
                                                  </SCMensagemConcluidos>}
      
      <SCContagemConcluidos data-test="footer">
        <div>
          <span>{finishedQuestsStatus.length}/{total} CONCLUÍDOS</span>
        </div>

        <div>
          {finishedQuestsStatus.map((qw, i) => <AnswerImage geraDataTest={geraDataTest} key={i} status={qw[1]} />)}
        </div>
      </SCContagemConcluidos>
    </div>
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
    margin-top: 16px;
    div {
      display: flex;
      justify-content: center;
      gap: 8px;

      span {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        color: #333;
      }
    }

    div {
      width: 222px;
      p {
        margin-top: 8px;
        margin-bottom: 12px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #333;
      }
    }
`;