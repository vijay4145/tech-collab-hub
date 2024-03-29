import React, { useState } from "react";
import { BsHash } from "react-icons/bs";

export const AddTagInput = ({setHashTags, hashTags}) => {
  const [tag, setTag] = useState('');
  const addTag = (e)=>{
    e.preventDefault();
    if(tag){
      setHashTags([...hashTags, tag]);
    }
    setTag('');
  }


  return (
    <>
      <div className="w-full">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <BsHash/>
          </div>
          <input
            type="search"
            id="default-search"
            value={tag}
            onChange={(e)=>{setTag(e.target.value)}}
            onKeyDown={(e)=>{if(e.key === 'Enter') {addTag(e); }}}
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="e.g: #Coding"
          />
          <button type="button"
            onClick={addTag}
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Tags
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTagInput;