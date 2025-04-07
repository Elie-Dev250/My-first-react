import React, { useState } from "react";


const ListComponent = ({ items }) => {
  const [isNumbered, setIsNumbered] = useState(true);

  const toggleListType = () => {
    setIsNumbered(!isNumbered);
  };

  return (
    <div>
      <button onClick={toggleListType}>
        Switch to {isNumbered ? "Bullet" : "Numbered"} List
      </button>
      <ul className={isNumbered ? "numbered" : "bullet"}>
        {items.map((item, index) => (
          <li key={index} className="list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
