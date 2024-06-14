import { useState } from 'react'
import styles from './global.css'
import Temperature from './Temperature'
import Stats from './Stats'
import LocationAndDate from './LocationAndDate'
import { useEffect } from 'react'
import FeedbackModal from './FeedbackModal'
import { connect } from "react-redux";



function _HomePage({weatherData}) {
  const [data, setData] = useState(weatherData);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState('');


  useEffect(() => {
    setData(weatherData);
    setLocation(weatherData.location);
    setLoading(false);
  }, [weatherData]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div style={{ overflowY: "hidden", width: "100%", margin: "auto" }}>
          <div className='header'>
            <h1 style={{ margin: 'auto' }}>Weather Dashboard</h1>
            <i class="fa fa-commenting" aria-hidden="true" onClick={handleShow}></i>
          </div>
          <LocationAndDate date={data.current_weather.time.slice(0, 10)} location={location} setLocation={setLocation} />

          <Temperature data={data} />

          <Stats data={data} />

        </div>
      )}
      <FeedbackModal show={show} handleClose={handleClose} />
    </>
  );
}

function mapStateToProps(storeState) {
  return {
      weatherData: storeState.weather.weatherData
  }
}
const HomePage = connect(mapStateToProps)(_HomePage);
export { HomePage };