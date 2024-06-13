import { useState } from 'react'

import './global.css'
import Temperature from './Temperature'
import Stats from './Stats'
import NextDays from './NextDays'
import LocationAndDate from './LocationAndDate'
import { useEffect } from 'react'
import FeedbackModal from './FeedbackModal'


export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=41.6941&longitude=44.8337&hourly=temperature_2m,rain,is_day&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,windspeed_10m_max&current_weather=true&windspeed_unit=mph&timezone=GMT')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <main className="main-container" style={{position:'relative',height:'100%'}}>

        {loading ? (
          <h1>Loading...</h1>
          ) : error ? (
            <h1>{error}</h1>
            ) : (
              <>
              <div className='header'>
                <h1 style={{margin:'auto'}}>Weather Dashboard</h1>
                <i class="fa fa-commenting" aria-hidden="true" onClick={handleShow}></i>
                 {/* <button onClick={handleShow}>ICON</button> */}
              </div>
          <LocationAndDate data={data.current_weather.time.slice(0, 10)}/>

          <Temperature data={data} />

          <Stats data={data} />

         <NextDays data={data.daily} />
        </>
        )}
        <FeedbackModal show={show} handleClose={handleClose}/>
      </main>
    </>
  );
}
