import { BrowserRouter, Route, Routes } from "react-router-dom";
import GraphScreen from "./compenents/GraphScreen";
import Header from "./compenents/Header";
import IdScreen from "./compenents/IdScreen";
import IntroScreen from "./compenents/IntroScreen";

const App = () => {
  return (
    <div className="app"> 
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<IntroScreen />} />
          <Route path="/enter-id" element={<IdScreen />} />
          <Route path="/your-ecg-graph" element={<GraphScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;