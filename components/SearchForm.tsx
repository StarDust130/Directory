import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search, SearchIcon } from "lucide-react";

const SearchForm = () => {
  const query = "abc";

  return (
    <Form action="/" className="search-form">
      {/* On submission, the input value will be appended to 
          the URL, e.g. /search?query=abc */}
      <input
        name="query"
        defaultValue={""}
        className="search-input"
        placeholder="Search for startups"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}

        <button type="submit" className="search-btn text-white">
          <SearchIcon size={24} />
        </button>
      </div>
    </Form>
  );
};
export default SearchForm;
