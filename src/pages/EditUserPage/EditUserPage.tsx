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
    <div className="onboarding">
      <h2>Edit</h2>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="First Name"
            required={true}
            value={formValue.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required={true}
            value={formValue.email}
            onChange={handleChange}
          />
          <label>Age</label>

          <div className="multiple_input_container">
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Age"
              required={true}
              value={formValue.age}
              onChange={handleChange}
            />
          </div>
          <label>Gender</label>
          <div className="multiple_input_container">
            <input
              type="radio"
              id="man_gender"
              name="gender"
              placeholder="."
              value={formValue.gender}
              onChange={handleChange}
              checked={formValue.gender === "Man"}
            />
            <label htmlFor="man_gender">Man</label>

            <input
              type="radio"
              id="woman_gender"
              name="gender"
              placeholder="."
              value={formValue.gender}
              onChange={handleChange}
              checked={formValue.gender === "Woman"}
            />
            <label htmlFor="woman_gender">Woman</label>

            <input
              type="radio"
              id="more_gender"
              name="gender"
              placeholder="."
              value={formValue.gender}
              onChange={handleChange}
              checked={formValue.gender === "More"}
            />
            <label htmlFor="more_gender">More</label>
          </div>
          <label htmlFor="show_gender">Show gender on my profile</label>
          <input
            type="checkbox"
            id="show_gender"
            name="show_gender"
            placeholder="."
            onChange={handleChange}
            checked={formValue.show_gender === true}
          />
          <label htmlFor="about">About me</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formValue.description}
            required={true}
            placeholder="I like to read ..."
            onChange={handleChange}
          />
          <label htmlFor="hobbies">Hobbies</label>
          <input
            type="text"
            id="hobbies"
            name="hobbies"
            value={formValue.hobbies}
            required={true}
            placeholder="Walk, swim, dance ..."
            onChange={handleChange}
          />
          <input type="submit" />
        </section>

        <div className="photo_container_url">
          <label id="label" htmlFor="url">
            Profile
          </label>
          <input
            type="url"
            name="image"
            id="image"
            onChange={handleChange}
            required={true}
            placeholder="photo"
          />
          <div className="photo_container">
            <img src={formValue.image} alt="user's photo" />
          </div>
        </div>
      </form>
    </div>
    // <div>
    //   <h1>EDIT</h1>
    //   <form action="">
    //     <input
    //       placeholder="name"
    //       type="text"
    //       name="name"
    //       value={formValue.name}
    //       onChange={handleChange}
    //     />
    //     <input
    //       placeholder="image"
    //       type="text"
    //       name="image"
    //       value={formValue.image}
    //       onChange={handleChange}
    //     />
    //     <input
    //       placeholder="gender"
    //       type="text"
    //       name="gender"
    //       value={formValue.gender}
    //       onChange={handleChange}
    //     />
    //     <input
    //       placeholder="age"
    //       type="number"
    //       name="age"
    //       value={formValue.age}
    //       onChange={handleChange}
    //     />
    //     <input
    //       placeholder="descpirtion"
    //       type="text"
    //       name="description"
    //       value={formValue.description}
    //       onChange={handleChange}
    //     />
    //     <input
    //       placeholder="hobbies"
    //       type="hobbies"
    //       name="hobbies"
    //       value={formValue.hobbies}
    //       onChange={handleChange}
    //     />
    //     <button onClick={handleSubmit}>Save</button>
    //   </form>
    // </div>
  );
};

export default EditUserPage;
