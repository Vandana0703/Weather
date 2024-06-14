import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { fetchWeatherData } from './store/actions';
import { weatherDataList } from './MockupData';


export default function LocationAndDate({ date , location, setLocation}) {

  const handleSelectChange= (e) => {
    setLocation(e.target.value);
  }
  return (
    <div className="location-and-date">
      <Form.Select aria-label="Default select example" style={{float:'right',width:'50%'}} value={location}
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