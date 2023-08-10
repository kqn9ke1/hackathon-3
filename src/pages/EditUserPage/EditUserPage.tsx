import React, { useContext, useEffect, useState } from "react";
import { usersContext } from "../../Components/contexts/UsersContext/UsersContext";
import { usersContextType } from "../../Components/contexts/UsersContext/types";
import { useNavigate, useParams } from "react-router-dom";

const EditUserPage = () => {
  const { user, getOneUser, editUser } = useContext(
    usersContext
  ) as usersContextType;

  const { id } = useParams();

  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    id: 1,
    name: "",
    description: "",
    age: "",
    image: "",
    email: "",
    hobbies: "",
    gender: "",
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
          type="text"
          name="name"
          value={formValue.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          value={formValue.image}
          onChange={handleChange}
        />
        <input
          type="text"
          name="gender"
          value={formValue.gender}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          value={formValue.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={formValue.description}
          onChange={handleChange}
        />
        <input
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
