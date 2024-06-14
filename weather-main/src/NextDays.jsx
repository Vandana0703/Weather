import NextDay from './NextDay';

export default function NextDays({ data, location }) {

  return (
    <div className="next-5-days">
      <h2 className="next-5-days__heading">{`${location} - Next ${data?.rain_sum?.length} days Forecast Data`}</h2>
      <div className="next-5-days__container">

        {data?.rain_sum.map((el, i) => {
          return <NextDay
            key={i}
            id={i}
            rainsum={el}
            sunrise={data?.sunrise[i]}
            sunset={data?.sunset[i]}
            temperature_2m_max={data?.temperature_2m_max[i]}
            temperature_2m_min={data?.temperature_2m_min[i]}
            time={data?.time[i]}
            windspeed_10m_max={data?.windspeed_10m_max[i]}
          />
        })}
      </div>
    </div>
  )
}