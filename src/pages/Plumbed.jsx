import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

const Plumbed = () => {
  const [searchValue, setSearchValue, searchDataCtx, setSearchDataCtx] =
    useContext(SearchContext);

  if (searchDataCtx === "articles") {
    return (
      <div className="">
        <h1>Articles</h1>
      </div>
    );
  }
  if (searchDataCtx === "users") {
    <div className="">
      <h1>Users</h1>
    </div>;
  }

  console.log(searchDataCtx);

  return (
    <div className="">
      <h1>Default Value</h1>
    </div>
  );
};

export default Plumbed;
