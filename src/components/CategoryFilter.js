import React from "react";

function CategoryFilter({ categories, selectedCategory, changeCategory }) {
  const categoryButtons = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : null;

    function handleClick() {
      changeCategory(category)
    }
    
    return (
      <button key={category} className={className} onClick={handleClick}>{category}</button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
