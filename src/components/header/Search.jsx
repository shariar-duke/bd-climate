import SearchIcon from "../../assets/search.svg";
export default function Search() {
  return (
    <form action="#">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border0b-0 focus-within:rounded-md">
        <input
          type="search"
          placeholder="Search Location"
          required
          className="bg-transparent placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
        />
        <button type="submit">
          <img src={SearchIcon} alt="" />
        </button>
      </div>
    </form>
  );
}
