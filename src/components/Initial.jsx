import styled from "styled-components";
import logoZap from "../assets/logo.png";

export default function Initial(props) {
  const {setStart} = props;

  return (
    <InitialDiv>
      <div>
        <img src={logoZap} />
        <h1>ZapRecall</h1>
      </div>
      <button data-test="start-btn" onClick={() => setStart(true)} >Iniciar Recall!</button>
    </InitialDiv>
  )
}

const InitialDiv = styled.div`
  position: fixed;
  top: calc(50vh - 157px);
  margin: 0 auto;
  width: 100%;
  height: 314px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    img {
      width: 136px;
      height: 161px;
    }
    h1 {
      font-family: 'Righteous';
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      color: #FFF;
    }
  }
  button {
      font-family: 'Recursive';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      color: #D70900;
      text-align: center;
      
      width: 246px;
      height: 54px;
      background: #FFF;
      border: 1px solid #D70900;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
    }
`;