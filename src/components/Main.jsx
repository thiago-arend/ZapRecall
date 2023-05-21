import Deck from "./Deck";
import FinishedQuestions from "./FinishedQuestions";
import DECK from "../deck";
import { useState } from "react";
import styled from "styled-components";
import logoZap from "../assets/logo.png";

export default function Main() {
  const [finishedQuestsStatus, setFinishedQuestsStatus] = useState([]);

  return (
    <>
      <SCHeader>
        <div>
          <img src={logoZap} alt="logo ZapRecall" />
          <h1>ZapRecall</h1>
        </div>
      </SCHeader>

      <SCEspacamentoTopo />

      <SCDeck>
        <Deck deck={DECK}
          finishedQuestsStatus={finishedQuestsStatus}
          setFinishedQuestsStatus={setFinishedQuestsStatus} />
      </SCDeck>

      <SCEspacamentoBase />

      <SCFooter qtdConcluidas={finishedQuestsStatus.length}>
        <FinishedQuestions total={DECK.length} finishedQuestsStatus={finishedQuestsStatus} />
      </SCFooter>
    </>
  )
}

const SCHeader = styled.div`
  position: fixed;
  width: 100%;
  height: 110px;
  z-index: 1;
  background-color: #FB6B6B;

  div {
  position: fixed;
  width: 256px;
  height: 60px;
  top: 50px;
  left: calc(50vw - 140px);

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
    position: relative;
    width: 300px;
    left: calc(50vw - 160px);
    top: 180px;
    overflow: scroll;
    overflow: hidden;
    height: calc(100vh * 2.5);
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

const SCEspacamentoTopo = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 50px;
  background-color: #FB6B6B;
  top: 110px;
  left: 0;
`;

const SCEspacamentoBase = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 50px;
  background-color: #FB6B6B;
  bottom: 70px;
  left: 0;
`;