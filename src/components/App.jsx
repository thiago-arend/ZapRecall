import Main from "./Main";
import Initial from "./Initial";
import GSCBody from "../global-styled-components/SCBody";
import GSCReset from "../global-styled-components/SCReset";
import { useState } from "react";



export default function App() {
  const [start, setStart] = useState(false);
  
  return (
    <>
      <GSCReset />
      <GSCBody />
      {(!start) ? <Initial setStart={setStart} /> : <Main />}
    </>
  )
}


