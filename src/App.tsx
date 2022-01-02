import { BrowserRouter } from "react-router-dom";
import { HomePage } from "./Templates/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HomePage />
      </div>
    </BrowserRouter>
  );
}

export default App;
