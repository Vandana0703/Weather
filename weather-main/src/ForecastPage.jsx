import React, { useEffect, useState } from "react";
import NextDays from "./NextDays";
import { connect } from "react-redux";



function _ForecastPage(props) {
    const { weatherData } = props;
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setData(weatherData);
        setLoading(false);
    }, [weatherData]);

    return (
        <>
            {loading && !Object.keys(data).length ? (
                <h1>Loading...</h1>
            ) :
                <NextDays data={data?.daily} location={data?.location} />
            }
        </>
    )
}
function mapStateToProps(storeState) {
    return {
        weatherData: storeState.weather.weatherData
    }
}
const ForecastPage = connect(mapStateToProps)(_ForecastPage);
export { ForecastPage };
