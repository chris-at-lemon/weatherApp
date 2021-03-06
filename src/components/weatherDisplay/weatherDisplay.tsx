import Image from 'next/image'

interface IWeather {
  weatherData: {
    temperature?: number,
    name?: string,
    descr?: string,
    feelsLike?: number,
    icon?: string
  }
}

import styles from '../weatherDisplay/weatherDisplay.module.scss'

const WeatherDisplay = ({ weatherData }: IWeather) => {

  return (
    <>
      <h2 className={`${styles['weatherH1']}`}>{weatherData.name}</h2>
      <div className={`${styles['iconAndTemp']}`}>
        <div className={`${styles['weatherIconWrapper']}`}>
          <Image
            src={`http://openweathermap.org/img/wn/${weatherData.icon}@4x.png`}
            alt={weatherData.descr
            } width={400}
            height={400}
            layout="intrinsic"
          />
        </div>
        <div className={`${styles['temperature']}`}>
          {weatherData.temperature?.toString().split('.')[0]}º
        </div>
      </div>
      <div className={`${styles['description']}`}>
        <p className={`${styles['pDesc']}`}>{weatherData.descr} and it feels like {weatherData.feelsLike?.toString().split('.')[0]}º</p>
      </div>
      <div className={`${styles['timeOfDay']}`}>
        <p className={`${styles['pTimeOfDay']}`}>
          It is currently {' '}
          {weatherData.icon?.slice(-1) === 'd' ? 'day time' : 'night time'} {' '}
          in {weatherData.name}</p>
      </div>
    </>
  )
}

export default WeatherDisplay