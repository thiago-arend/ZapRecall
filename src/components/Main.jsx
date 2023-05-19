import Deck from "./Deck";
import FinishedQuestions from "./FinishedQuestions";
import DECK from "../deck";
import { useState } from "react";
import styled from "styled-components";
import logoZap from "../assets/logo.png";

export default function Main() {
  const [finishedQuestions, setFinishedQuestions] = useState([]);

  function setQuestsStatus() {

  }

  return (
    <>
      <SCLogoDeck>
        <SCLogo>
          <img src={logoZap} alt="logo ZapRecall" />
          <h1>ZapRecall</h1>
        </SCLogo>
        <SCDeck>
          <Deck deck={DECK}
            finishedQuestions={finishedQuestions}
            setQuestsStatus={setQuestsStatus} />
        </SCDeck>
      </SCLogoDeck>
      <FinishedQuestions finishedQuestions={finishedQuestions} />
    </>
  )
}

const SCLogo = styled.div`
  width: 256px;
  height: 60px;
  margin: 40px auto 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

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

const SCLogoDeck = styled.div`
  width: 300px;
  height: calc(100vh - 70px);
  position: fixed;
  background-color: red;
  top: 0;
  left: calc(50vw - 150px);
`;

const SCDeck = styled.div`
  background-color: blue;
  width: 100%;
  height: calc(100vh - 230px);
`;