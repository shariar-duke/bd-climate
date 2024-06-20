import CloudyIcon from "../../assets/icons/cloud";
import HumidityIcon from "../../assets/icons/humidity";
import TempMaxIcon from "../../assets/icons/temp-max";
import TempMinIcon from "../../assets/icons/temp-min";
import WindIcon from "../../assets/icons/wind";

export default function WeatherCondition() {
  return (
    <div>
      <p className="text-sm lg:text-lg font-bold uppercase mb-8">
        thunderstrom with light drizzle
      </p>
      <ul className="space-y-6">
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Temp max</span>
            <div className="inline-flex space-x-4">
                <p> 19° </p>
                <img src={TempMaxIcon} alt="temp-max" />
            </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Temp min </span>
            <div className="inline-flex space-x-4">
                <p> 19° </p>
                <img src={TempMinIcon} alt="temp-max" />
            </div>
        </li>

        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span> Humadity </span>
            <div className="inline-flex space-x-4">
                <p> 58% </p>
                <img src={HumidityIcon} alt="temp-max" />
            </div>
        </li>

        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span> Cloudy </span>
            <div className="inline-flex space-x-4">
                <p> 86% </p>
                <img src={CloudyIcon} alt="temp-max" />
            </div>
        </li>

        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span> Wind</span>
            <div className="inline-flex space-x-4">
                <p> 5km/h </p>
                <img src={WindIcon} alt="temp-max" />
            </div>
        </li>
      </ul>
    </div>
  );
}
