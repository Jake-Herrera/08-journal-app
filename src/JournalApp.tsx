import { BrowserRouter } from "react-router-dom";
import { AppRouter }  from "./router/AppRouter";

function JournalApp() {

  return (
    <>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </>
  )
}

export default JournalApp;
