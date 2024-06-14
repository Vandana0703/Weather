import Form from 'react-bootstrap/Form';
import { fetchWeatherData, fetchWeatherSuccess } from './store/actions';
import { useDispatch } from 'react-redux';


export default function LocationAndDate({ date, location }) {

  const dispatch = useDispatch();

  const handleSelectChange = (e) => {
    const weatherData = fetchWeatherData(e.target.value);
    dispatch(fetchWeatherSuccess(weatherData));
  }
  return (
    <div className="location-and-date">
      <Form.Select aria-label="Default select example" style={{ float: 'right', width: '50%' }} value={location}
        onChange={handleSelectChange}>
        <option>Open this select menu</option>
        <option value="New York">New York</option>
        <option value="Paris">Paris</option>
        <option value="Tbilisi">Tbilisi</option>
      </Form.Select>
      <div>
        <h1 className="location-and-date__location">{location}</h1>
        <div>{date}</div>
      </div>
    </div>
  )
}