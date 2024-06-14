import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import { FeedbackPage } from './FeedbackPage';
import { Provider } from 'react-redux';
import store from './store/store';


function App() {
  return (
    <Provider store={store}>
    <main className="main-container" style={{position:'relative',height:'100%'}}>
      <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* <Route exact path="/Calendar" element={<Layout Component={CalendarPage} />} /> */}
        <Route exact path="/Feedback" element={<FeedbackPage/> } />
      </Routes>
      </Router>
    </main>
    </Provider>
  );
}

export default App;
