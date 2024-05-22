import { useState } from "react";
import "./friends.css";
import { faker } from "@faker-js/faker";

const friendCategory = {
  acha: "Acha",
  bura: "Bura",
};

const Friends = () => {
  const [category, setCategory] = useState(friendCategory.acha);
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

//   const handleCategoryChange = (newCategory) => {
//     setCategory(newCategory);
//     // Add your custom logic here based on the new category
//     if (newCategory === friendCategory.acha) {
//       console.log("Added a new Acha friend!");
//     } else if (newCategory === friendCategory.bura) {
//       console.log("Added a new Bura friend!");
//     } else {
//       console.log("Added a friend with a new category:", newCategory);
//     }
//   };

  const handleUserCategoryChange = (user, newCategory) => {
    // Update the category of the specified user
    setUsers((prevUsers) =>
      prevUsers.map((prevUser) =>
        prevUser === user ? { ...prevUser, category: newCategory } : prevUser
      )
    );
  };

  return (
    <>
      <h1>Users</h1>
      {JSON.stringify({ name, category })}
      <br />
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="Friend name"
        value={name}
      />
      <select>
        <option value={friendCategory.acha}>{friendCategory.acha}</option>
        <option value={friendCategory.bura}>{friendCategory.bura}</option>
        {/* Add options for new categories as needed */}
      </select>
      <button
        onClick={() => {
          setUsers((prev) => [...prev, { name, category }]);
          setName("");
        }}
      >
        Add
      </button>
      <br />
      Achay Dost:
      <div className="container">
        <ul>
          {users
            ?.filter((item) => item.category === friendCategory.acha)
            ?.map((user) => (
              <li key={user.name} onClick={() => handleUserCategoryChange(user, friendCategory.bura)}>
                {user.name} ({user.category})
              </li>
            ))}
        </ul>
        <hr />
      </div>
      Buray Dost:
      <ul>
        {users
          ?.filter((item) => item.category === friendCategory.bura)
          ?.map((user) => (
            <li key={user.name} onClick={() => handleUserCategoryChange(user, friendCategory.acha)}>
              {user.name} ({user.category})
            </li>
          ))}
      </ul>
    </>
  );
};

export default Friends;
