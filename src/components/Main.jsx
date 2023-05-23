import Deck from "./Deck";
import FinishedQuestions from "./FinishedQuestions";
import DECK from "../deck";
import { useState } from "react";
import styled from "styled-components";
import logoZap from "../assets/logo.png";

export default function Main() {
  const [finishedQuestsStatus, setFinishedQuestsStatus] = useState([]);

  function geraDataTest(status) {
    if (status === 0) return "play-btn";
    if (status === 1) return "no-icon";
    if (status === 2) return "partial-icon";
    if (status == 3) return "zap-icon";
  }

  return (
    <>
      <SCHeader>
        <div>
          <img src={logoZap} alt="logo ZapRecall" />
          <h1>ZapRecall</h1>
        </div>
      </SCHeader>

      <SCDeck>
        <Deck deck={DECK}
          geraDataTest={geraDataTest}
          finishedQuestsStatus={finishedQuestsStatus}
          setFinishedQuestsStatus={setFinishedQuestsStatus} />
      </SCDeck>

      <SCFooter qtdConcluidas={finishedQuestsStatus.length}>
        <FinishedQuestions geraDataTest={geraDataTest} 
          total={DECK.length}
          finishedQuestsStatus={finishedQuestsStatus} />
      </SCFooter>
    </>
  )
}

const SCHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 110px;
  z-index: 1;
  background-color: #FB6B6B;

  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 256px;
    height: 60px;
    top: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img {
    height: 100%;
    width: 52px;
  }
  h1 {
    font-family: 'Recursive', sans-serif;
    font-size: 36px;
    color: #FFF;
  }
`;

const SCDeck = styled.div`
    width: 300px;
    margin: 0 auto;
`;

const SCFooter = styled.div`
    position: fixed;
    width: 100%;
    height: ${props => (props.qtdConcluidas !== DECK.length) ? "70px" : "171px"};
    bottom: 0;
    z-index: 1;
    background-color: #FFF;

    display: flex;
    justify-content: center;
    align-items: ${props => (props.qtdConcluidas !== DECK.length) ? "center" : "flex-start"};
`;