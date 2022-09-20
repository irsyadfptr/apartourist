import "./assets/scss/style.scss";
import LandingPage from 'pages/LandingPage';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from 'parts/Header';


function App() {
  let history = useLocation();
  return (
    //Create a route to landing page with history
    <div className="App">
      <Header location={history}/>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        {/* <Route exact path="/home" element={<Home />} />
        <Route exact path="/upcoming/:user" element={<Upcoming />} />
        <Route exact path="/record/:user" element={<Record />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
