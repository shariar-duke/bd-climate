import PinIcon from "../../assets/pin.svg";
import Cloud from '../../assets/cloud.svg'
export default function WeatherHeadLine() {
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:mt-10">
        <img src={Cloud} />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            16
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={PinIcon} alt="pin" />
            <h2 className="text-2xl lg:text-[50px]">Dhaka</h2>
          </div>
        </div>
      </div>

      <p>06:09 - Sunday, 9 Dec 23</p>
    </div>
  );
}
