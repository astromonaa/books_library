import '../styles/searchBlock.scss'
import SearchInput from './ui/SearchInput';
import Select from './ui/Select';
import { useLibrary } from '../hooks/useLibrary';

const SearchBlock = () => {
  const {categories, sortByList, filter, sort, searchInputRef, search} = useLibrary()

  return (
    <div className='search-block'>
      <div className="mask"></div>
      <h1>Search for Books</h1>
      <SearchInput searchInputRef={searchInputRef} search={search}/>
      <div className='sort-block'>
        <div>
          <span>Categories</span>
          <Select items={categories} handler={filter}/>
        </div>
        <div>
          <span>Sorting By</span>
          <Select items={sortByList} handler={sort}/>
        </div>
      </div>
    </div>
  );
};

export default SearchBlock;