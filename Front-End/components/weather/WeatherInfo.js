//Icon display utility
import Icon from '../../utils/DisplayIcon';

import Translate from '../../utils/Translate';

function WeatherInfo(props){

  const {
    currently,
    summary
  } = props;

  //User settings
  const showInfo = (localStorage.getItem('showInfo') === 'true')? 'show': 'hidden';
  const isMetricTemp = (localStorage.getItem('isMetric') === 'true')? '°C' : '°F';
  const isMetricDist = (localStorage.getItem('isMetric') === 'true')? 'km' : 'mile';
  const isMetricSpeed = (localStorage.getItem('isMetric') === 'true')? 'm/s' : 'mph';
  
  const infoSummary = summary;
  const infoApparentTemperature = currently.apparentTemperature + ' ' + isMetricTemp;
  const infoHumidity = (currently.humidity*100).toFixed() + ' %';
  const infoPressure = (currently.pressure/1013.25).toFixed(2) + ' atm';
  const infoDewPoint = currently.dewPoint + ' ' + isMetricTemp;
  const infoWindSpeed = currently.windSpeed + ' ' + isMetricSpeed;
  const infoVisibility = currently.visibility + ' ' + isMetricDist;

  return(
    <div className='card info' id={showInfo}>
      <h3><Icon className='' icon='info' /> &nbsp;{props.strings.title}</h3>
      <p className='summary'>{infoSummary}</p>
      <div className="flex-container">
        <div className='flex-item'>
          <p className='title'><Icon class='' icon='feelsLike' /> &nbsp;{props.strings.feelsLike}</p>
          <p className='desc'>{infoApparentTemperature}</p>
        </div>
        <div className='flex-item'>
          <p className='title'><Icon className='' icon='humidity' /> &nbsp;{props.strings.humidity}</p>
          <p className='desc'>{infoHumidity}</p>
        </div>
        <div className='flex-item'>
          <p className='title'><Icon class='' icon='pressure' /> &nbsp;{props.strings.pressure}</p>
          <p className='desc'>{infoPressure}</p>
        </div>
        <div className='flex-item'>
          <p className='title'><Icon class='' icon='dewPoint' /> &nbsp;{props.strings.dewPoint}</p>
          <p className='desc'>{infoDewPoint}</p>
        </div>
        <div className='flex-item'>
          <p className='title'><Icon class='' icon='windSpeed' /> &nbsp;{props.strings.windSpeed}</p>
          <p className='desc'>{infoWindSpeed}</p>
        </div>
        <div className='flex-item'>
          <p className='title'><Icon class='' icon='visibility' /> &nbsp;{props.strings.visibility}</p>
          <p className='desc'>{infoVisibility}</p>
        </div>
      </div>
    </div>
  )
}

WeatherInfo.defaultProps = {
  strings: {
    title: 'Weather Info',
    feelsLike: 'Feels-like',
    humidity: 'Humidity',
    pressure: 'Pressure',
    dewPoint: 'Dew Point',
    windSpeed: 'Wind Speed',
    visibility: 'Visibility'
  }
}

export default Translate('WeatherInfo')(WeatherInfo)