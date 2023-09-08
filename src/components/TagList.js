import React from 'react';

function TagList({ tags, selectedTags, onSelectTag }) {
  return (
    <div className="TagList">
      <h2>Filter by Tags</h2>
      <ul>
        {tags.map((tag) => (
          <li key={tag.id}>
            <label>
              <input
                type="checkbox"
                checked={selectedTags.includes(tag.id)}
                onChange={() => onSelectTag(tag.id)}
              />
              {tag.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TagList;
