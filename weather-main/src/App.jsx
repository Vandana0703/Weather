import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FeedbackPage } from './FeedbackPage';
import { Provider } from 'react-redux';
import store from './store/store';
import Layout from './Layout';
import { ForecastPage } from './ForecastPage';
import { HomePage } from './HomePage';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Layout Component={HomePage} />} />
          <Route exact path="/Forecast" element={<Layout Component={ForecastPage} />} />
          <Route exact path="/Feedback" element={<Layout Component={FeedbackPage} />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
