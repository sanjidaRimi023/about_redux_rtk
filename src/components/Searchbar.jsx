import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

export default function Searchbar() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(searchValue));
    setSearchValue("");
  };
  return (
    <>
      <section>
        <form
          onSubmit={(e) => {
            onSubmitHandler(e);
          }}
          className="w-full flex my-4"
        >
          <input
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            required
            type="text"
            placeholder="Search anything..."
            className="w-full px-4 py-2 border border-gray-300 rounded-xl outline-none focus:border-[#03AED2] focus:ring-4 focus:ring-[#03AED2]/30"
          />

          <button className="px-5 py-2 bg-[#03AED2] text-white rounded-md hover:opacity-90 active:scale-95 transition">
            Search
          </button>
        </form>
      </section>
    </>
  );
}
