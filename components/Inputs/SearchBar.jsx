"use client";

import { BsSearch } from "react-icons/bs";

const SearchBar = ({ setSearchValue }) => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const searchValue = e.target[0].value;
    setSearchValue(searchValue);
    e.target[0].value = "";
  };
  return (
    <div className="relative w-96">
      <form onSubmit={handleSubmitForm}>
        <input
          type="search"
          className="bg-[#2F2F2F] py-3 pl-3 pr-10 outline-none rounded relative w-full"
          placeholder="Search by name"
        />
        <button type="submit" className="absolute top-0 right-0 bottom-0 p-3">
          <BsSearch size={20} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
