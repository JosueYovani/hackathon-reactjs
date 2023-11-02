import { MdSearch } from "react-icons/md";
import { useContext, useState } from "react";
import { NotesContext } from "../../pages/notes/Notes";

const SearchNote = () => {
  const [searchText, setSearchText] = useState("");
  const [tagFilter, setTagFilter] = useState(null);
  const [showTags, setShowTags] = useState(false);
  const { notes, setNotes } = useContext(NotesContext);

  
  const searchTagFilter = (note) => {
    if (tagFilter !== null) {
      return note.tags.includes(tagFilter);
    }

    return true;
  };

  const searchTextFilter = (note) => {
    if (searchText !== "") {
      return (
        note.title.toLowerCase().includes(searchText.toLowerCase()) ||
        note.text.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    return true;
  };

  const onClick = () => {
    // setNotes({notes.filter(searchTagFilter).filter(searchTextFilter)});
    setShowTags(!showTags);
    setTagFilter(null);
  };

  const TagList = () => {
    const tags = notes.reduce((carry, note) => {
      note.tags.forEach((element) => {
        if (!carry.includes(element)) {
          carry.push(element);
        }
      });
      return carry;
    }, []);
    return (
      <div className="flex flex-wrap">
        {tags.map((tag, index) => {
          return (
            <button
              key={index}
              className="bg-green-600 text-green-50 py-1 px-2 mr-1 mb-2  rounded-lg"
              onClick={() => setTagFilter(tag)}
            >
              {tag}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <div className="flex space-x-4 mb-6">
        <div className="container mx-auto flex items-center bg-gray-200 rounded-lg p-2 ">
          <MdSearch className="" size="1.3em" />
          <input
            onChange={(event) => setSearchText(event.target.value)}
            type="text"
            placeholder="Type to search..."
            className="bg-gray-200 lg:w-1/2"
          />
        </div>
        <button
          onClick={onClick}
          className="rounded-lg px-5 py-1 bg-green-600 text-green-50"
        >
          Filter
        </button>
      </div>
      <div className="mb-6">{showTags ? <TagList /> : null}</div>
    </div>
  );
};

export default SearchNote;