import { useState } from 'react'

import './global.css'
import Temperature from './Temperature'
import Stats from './Stats'
import NextDays from './NextDays'
import LocationAndDate from './LocationAndDate'
import { useEffect } from 'react'
import FeedbackModal from './FeedbackModal'
import { weatherDataList } from './MockupData'
import { fetchWeatherData } from './store/actions'


export default function HomePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState('');


  useEffect(() => {
    const weatherData=fetchWeatherData(location)
    setData(weatherData);
    setLocation(weatherData.location);
    setLoading(false);
  }, [location]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
        {loading ? (
          <h1>Loading...</h1>
          ) : error ? (
            <h1>{error}</h1>
            ) : (
              <>
              <div className='header'>
                <h1 style={{margin:'auto'}}>Weather Dashboard</h1>
                <i class="fa fa-commenting" aria-hidden="true" onClick={handleShow}></i>
              </div>
          <LocationAndDate date={data.current_weather.time.slice(0, 10)} location={location} setLocation={setLocation} />

          <Temperature data={data} />

          <Stats data={data} />

         <NextDays data={data.daily} />
        </>
        )}
        <FeedbackModal show={show} handleClose={handleClose}/>
    </>
  );
}
