import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useSearchParams } from "react-router-dom";
import { usersContext } from "../../contexts/UsersContext/UsersContext";
import { usersContextType } from "../../contexts/UsersContext/types";

interface IProps {
  setGender: (gender: string) => void;
  gender: string;
}

export default function Filter({ setGender, gender }: IProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const { setPage } = React.useContext(usersContext) as usersContextType;

  const [firstMount, setFirstMount] = React.useState(true);

  React.useEffect(() => {
    if (firstMount) {
      setFirstMount(false);
      return;
    }
    const currentParams = Object.fromEntries([...searchParams]);

    if (gender === "all") {
      delete currentParams.gender;
      setSearchParams({
        ...currentParams,
      });
    } else {
      setSearchParams({
        ...currentParams,
        gender,
      });
    }
    setPage(1);
  }, [gender]);
  return (
    <FormControl>
      <FormLabel
        id="demo-radio-buttons-group-label"
        sx={{ fontSize: "18px", borderBottom: "solid 1px blue" }}
      >
        Gender
      </FormLabel>
      <RadioGroup
        sx={{ display: "flex", flexDirection: "row" }}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        value={gender}
        name="radio-buttons-group"
      >
        <FormControlLabel
          onChange={() => setGender("all")}
          value="all"
          control={<Radio />}
          label="All"
        />
        <FormControlLabel
          onChange={() => setGender("woman")}
          value="woman"
          control={<Radio />}
          label="Female"
        />
        <FormControlLabel
          onChange={() => setGender("man")}
          value="man"
          control={<Radio />}
          label="Male"
        />
      </RadioGroup>
    </FormControl>
  );
}

// const Filter = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [gender, setGender] = useState(searchParams.get("gender") || "all");

//   const { setPage } = useContext(usersContext) as usersContextType;

//   const [firstMount, setFirstMount] = useState(true);

//   useEffect(() => {
//     if (firstMount) {
//       setFirstMount(false);
//       return;
//     }
//     const currentParams = Object.fromEntries([...searchParams]);

//     if (gender === "all") {
//       delete currentParams.gender;
//       setSearchParams({
//         ...currentParams,
//       });
//     } else {
//       setSearchParams({
//         ...currentParams,
//         gender,
//       });
//     }
//     setPage(1);
//   }, [gender]);

//   return (
//     <ToggleButtonGroup
//       color="primary"
//       value={gender}
//       exclusive
//       onChange={(_, value) => value && setGender(value)}
//       aria-label="Platform"
//     >
//       <ToggleButton value="all">All</ToggleButton>
//       <ToggleButton value="pants">Gender</ToggleButton>
//     </ToggleButtonGroup>
//   );
// };

// export default Filter;
