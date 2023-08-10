import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersContext } from "../../Components/contexts/UsersContext/UsersContext";
import { usersContextType } from "../../Components/contexts/UsersContext/types";
import "../AddUserPage/AddUserPage.css";
import axios from "axios";
import { API } from "../../utils/consts";

const AddUserPage = () => {
  const { addUser } = useContext(usersContext) as usersContextType;

  const [formData, setFormData] = useState({
    first_name: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    show_gender: false,
    gender_identity: "man",
    gender_interest: "woman",
    url: "https://tinder.com/static/build/build-ssg/static/rewind-b92657a68f147b0019ff4d20aa5aaf56.webp",
    about: "",
    matches: [],
  });

  

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    console.log("submitted");
    e.preventDefault();
    try {
      const response = await axios.post(API, {
        formData,
      });
      console.log(response);
      const success = response.status === 201;
      if (success) {
        setFormData({
          first_name: "",
          dob_day: "",
          dob_month: "",
          dob_year: "",
          show_gender: false,
          gender_identity: "man",
          gender_interest: "woman",
          url: "",
          about: "",
          matches: [],
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: any) => {
    console.log("e", e);
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  

  return (
    <div className="onboarding">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            placeholder="First Name"
            required={true}
            value={formData.first_name}
            onChange={handleChange}
          />
          <label>Birthday</label>

          <div className="multiple_input_container">
            <input
              type="number"
              id="dob_day"
              name="dob_day"
              placeholder="DD"
              required={true}
              value={formData.dob_day}
              onChange={handleChange}
            />
            <input
              type="number"
              id="dob_month"
              name="dob_month"
              placeholder="MM"
              required={true}
              value={formData.dob_month}
              onChange={handleChange}
            />
            <input
              type="number"
              id="dob_year"
              name="dob_year"
              placeholder="YYYY"
              required={true}
              value={formData.dob_year}
              onChange={handleChange}
            />
          </div>
          <label>Gender</label>
          <div className="multiple_input_container">
            <input
              type="radio"
              id="man_gender_identity"
              name="gender_identity"
              placeholder="."
              value={"Man"}
              onChange={handleChange}
              checked={formData.gender_identity === "Man"}
            />
            <label htmlFor="man_gender_identity">Man</label>

            <input
              type="radio"
              id="woman_gender_identity"
              name="gender_identity"
              placeholder="."
              value={"Woman"}
              onChange={handleChange}
              checked={formData.gender_identity === "Woman"}
            />
            <label htmlFor="woman_gender_identity">Woman</label>

            <input
              type="radio"
              id="more_gender_identity"
              name="gender_identity"
              placeholder="."
              value={"More"}
              onChange={handleChange}
              checked={formData.gender_identity === "More"}
            />
            <label htmlFor="more_gender_identity">More</label>
          </div>
          <label htmlFor="show_gender">Show gender on my profile</label>
          <input
            type="checkbox"
            id="show_gender"
            name="show_gender"
            placeholder="."
            onChange={handleChange}
            checked={formData.show_gender === true}
          />

          <label>Show me</label>
          <div className="multiple_input_container">
            <input
              type="radio"
              id="man_gender_interest"
              name="gender_interest"
              placeholder="."
              value={"Man"}
              onChange={handleChange}
              checked={formData.gender_interest === "Man"}
            />
            <label htmlFor="man_gender_interest">Man</label>

            <input
              type="radio"
              id="woman_gender_interest"
              name="gender_interest"
              placeholder="."
              value={"Woman"}
              onChange={handleChange}
              checked={formData.gender_interest === "Woman"}
            />
            <label htmlFor="woman_gender_interest">Woman</label>

            <input
              type="radio"
              id="everyone_gender_interest"
              name="gender_interest"
              placeholder="."
              value={"Everyone"}
              onChange={handleChange}
              checked={formData.gender_interest === "Everyone"}
            />
            <label htmlFor="everyone_gender_interest">Everyone</label>
          </div>
          <label htmlFor="about">About Me</label>
          <input
            type="text"
            id="about"
            name="about"
            value={formData.about}
            required={true}
            placeholder="I like long walks..."
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
            name="url"
            id="url"
            onChange={handleChange}
            required={true}
            placeholder="photo"
          />
          <div className="photo_container">
            <img src={formData.url} alt="user's photo" />
          </div>
        </div>
      </form>
    </div>
    
  );
};

//! new 
// const AddUserPage = () => {
//   const { addUser } = useContext(usersContext) as usersContextType;

//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [image, setImage] = useState("");
//   const [description, setDescription] = useState("");
//   const [email, setEmail] = useState("");
//   const [hobbies, setHobbies] = useState("");
//   const [gender, setGender] = useState("");

//   const navigate = useNavigate();

//   function handleAddUser() {
//     if (!name || !age || !image || !description || !email || !gender) {
//       alert("Заполните поля");
//       return;
//     }
//     let newUser = {
//       name: name,
//       description,
//       age: +age,
//       image,
//       email,
//       hobbies: hobbies.split(","),
//       gender,
//     };
//     addUser(newUser);
//     setName("");
//     setAge("");
//     setDescription("");
//     setImage("");
//     setEmail("");
//     setHobbies("");
//     setGender("");

//     navigate("/");
//   }

//   return (
//     <div>
//       <form action="">
//         <input
//           type="text"
//           placeholder="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Image URL"
//           value={image}
//           onChange={(e) => setImage(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="gender"
//           value={gender}
//           onChange={(e) => setGender(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="age"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="hobbies"
//           placeholder="hobbies"
//           value={hobbies}
//           onChange={(e) => setHobbies(e.target.value)}
//         />
//         <button onClick={handleAddUser}>Add User</button>
//       </form>
//     </div>
//   );
// };

export default AddUserPage;
