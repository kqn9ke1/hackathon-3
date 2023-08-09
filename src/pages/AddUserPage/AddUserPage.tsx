import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersContext } from "../../Components/contexts/UsersContext/UsersContext";
import { usersContextType } from "../../Components/contexts/UsersContext/types";
const AddUserPage = () => {
  const { addUser } = useContext(usersContext) as usersContextType;

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  function handleAddUser() {
    if (!name || !age || !image || !description || !email || !gender) {
      alert("Заполните поля");
      return;
    }
    let newUser = {
      name: name,
      description,
      age: +age,
      image,
      email,
      hobbies: hobbies.split(","),
      gender,
    };
    addUser(newUser);
    setName("");
    setAge("");
    setDescription("");
    setImage("");
    setEmail("");
    setHobbies("");
    setGender("");

    navigate("/");
  }

  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          type="number"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="hobbies"
          placeholder="hobbies"
          value={hobbies}
          onChange={(e) => setHobbies(e.target.value)}
        />
        <button onClick={handleAddUser}>Add User</button>
      </form>
    </div>
  );
};

export default AddUserPage;
