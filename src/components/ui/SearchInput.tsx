import {Search} from 'react-bootstrap-icons'
import {FC, RefObject} from 'react'

interface ISearchInputProps {
  searchInputRef: RefObject<HTMLInputElement>,
  search: () => void;
}

const SearchInput:FC<ISearchInputProps> = ({searchInputRef, search}) => {
  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      search()
    }
  }
  
  return (
    <div className='search-input'>
      <input type="text" ref={searchInputRef} onKeyDown={handleKeyDown} />
      <Search fill='black' onClick={search}/>
    </div>
  );
};

export default SearchInput;