import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { SearchIcon } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" className="search-form">
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
