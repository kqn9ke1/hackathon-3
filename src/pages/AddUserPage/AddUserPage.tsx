import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersContext } from "../../Components/contexts/UsersContext/UsersContext";
import { usersContextType } from "../../Components/contexts/UsersContext/types";
import "../AddUserPage/AddUserPage.css";
import { authContext } from "../../Components/contexts/AuthContext/AuthContext";
import { IAuthContextTypes } from "../../Components/contexts/AuthContext/types";

const AddUserPage = () => {
  const { addUser } = useContext(usersContext) as usersContextType;
  const { user } = useContext(authContext) as IAuthContextTypes;

  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [show_gender, setShowGender] = useState(false);
  const [gender, setGender] = useState("");
  const [image, setImage] = useState(
    "https://tinder.com/static/build/build-ssg/static/rewind-b92657a68f147b0019ff4d20aa5aaf56.webp"
  );
  const [description, setDescription] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    console.log("submitted");
    e.preventDefault();
    navigate("/");
    try {
      if (!name || !age || !image || !description || !gender || !hobbies) {
        alert("Заполните поля");
        return;
      }
      let newUser = {
        name: name,
        description,
        age: +age,
        image,
        hobbies: hobbies.split(","),
        show_gender,
        gender,
        email,
      };
      addUser(newUser);
      setName("");
      setAge("");
      setDescription("");
      setImage("");
      setHobbies("");
      setEmail("");
      setGender("");

      if (!user) {
        navigate("/auth");
      } else {
        navigate("/users");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="onboarding">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="First Name"
              required={true}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Age</label>

            <div className="multiple_input_container">
              <input
                type="number"
                id="age"
                name="age"
                placeholder="Age"
                required={true}
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <label>Gender</label>
            <div className="multiple_input_container">
              <input
                type="radio"
                id="man_gender"
                name="gender"
                placeholder="."
                value={"Man"}
                onChange={(e) => setGender(e.target.value)}
                checked={gender === "Man"}
              />
              <label htmlFor="man_gender">Man</label>

              <input
                type="radio"
                id="woman_gender"
                name="gender"
                placeholder="."
                value={"Woman"}
                onChange={(e) => setGender(e.target.value)}
                checked={gender === "Woman"}
              />
              <label htmlFor="woman_gender">Woman</label>

              <input
                type="radio"
                id="more_gender"
                name="gender"
                placeholder="."
                value={"More"}
                onChange={(e) => setGender(e.target.value)}
                checked={gender === "More"}
              />
              <label htmlFor="more_gender">More</label>
            </div>
            <label htmlFor="show_gender">Show gender on my profile</label>
            <input
              type="checkbox"
              id="show_gender"
              name="show_gender"
              placeholder="."
              onChange={(e) => setShowGender(e.target.checked)}
              checked={show_gender === true}
            />
            <label htmlFor="about">About me</label>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              required={true}
              placeholder="I like to read ..."
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="hobbies">Hobbies</label>
            <input
              type="text"
              id="hobbies"
              name="hobbies"
              value={hobbies}
              required={true}
              placeholder="Walk, swim, dance ..."
              onChange={(e) => setHobbies(e.target.value)}
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
              onChange={(e) => setImage(e.target.value)}
              required={true}
              placeholder="photo"
            />
            <div className="photo_container">
              <img src={image} alt="user's photo" />
            </div>
          </div>
        </form>
      </div>
    </>
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
