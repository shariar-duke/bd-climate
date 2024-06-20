import HeartIcon from "../../assets/heart.svg";
export default function Favourite() {
  return (
    <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transtion-all">
      <img src={HeartIcon} alt="heart" />
      <span>Favourite Location</span>
    </div>
  );
}
