import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usersContext } from "../../Components/contexts/UsersContext/UsersContext";
import { usersContextType } from "../../Components/contexts/UsersContext/types";

const EditUserPage = () => {
  const { user, getOneUser, editUser } = useContext(
    usersContext
  ) as usersContextType;

  const { id } = useParams();

  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    id: 1,
    name: "",
    age: "",
    show_gender: false,
    gender: "man",
    image: "",
    description: "",
    hobbies: "",
    email: "",
  });

  useEffect(() => {
    id && getOneUser(+id);
  }, []);

  useEffect(() => {
    if (user) {
      setFormValue({
        ...user,
        age: user.age.toString(),
        hobbies: user.hobbies.join(","),
      });
    }
  }, [user]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    if (
      !formValue.name.trim() ||
      !formValue.description.trim() ||
      !formValue.age.trim() ||
      !formValue.image.trim() ||
      !formValue.hobbies.trim() ||
      !formValue.gender.trim() ||
      !formValue.image.trim()
    ) {
      alert("fill all fields");
      return;
    }

    console.log(formValue);

    editUser({
      ...formValue,
      age: +formValue.age,
      hobbies: formValue.hobbies.split(","),
    });

    navigate(-1);
  }

  return (
    <div>
      <h1>EDIT</h1>
      <form action="">
        <input
          placeholder="name"
          type="text"
          name="name"
          value={formValue.name}
          onChange={handleChange}
        />
        <input
          placeholder="image"
          type="text"
          name="image"
          value={formValue.image}
          onChange={handleChange}
        />
        <input
          placeholder="gender"
          type="text"
          name="gender"
          value={formValue.gender}
          onChange={handleChange}
        />
        <input
          placeholder="age"
          type="number"
          name="age"
          value={formValue.age}
          onChange={handleChange}
        />
        <input
          placeholder="descpirtion"
          type="text"
          name="description"
          value={formValue.description}
          onChange={handleChange}
        />
        <input
          placeholder="hobbies"
          type="hobbies"
          name="hobbies"
          value={formValue.hobbies}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
};

export default EditUserPage;
