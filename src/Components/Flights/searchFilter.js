import React from 'react';
import SelectDropdown from '../Common/dropdown';
import { useState } from 'react';

function SearchFilter(props) {
    const [sortByList, setSortByList] = useState([
        {
          label: "Price: Low to high",
          id: "lth",
        },
        {
            label: "Price: High to Low",
          id: "htl",
        },
        {
            label: "Airline",
            id: "htl",
          }
      ]);
      const [reorderList, setReorderList ] = useState("");

      const onSortByListChange = (value) => {
        setReorderList(value);
      };
    return (
        <div>
            <SelectDropdown 
            label="Reorder"
                value={sortByList}
                onChange={onSortByListChange}
            />
        </div>
    );
}

export default SearchFilter;