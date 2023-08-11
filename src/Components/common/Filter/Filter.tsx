import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useSearchParams } from "react-router-dom";
import { usersContext } from "../../contexts/UsersContext/UsersContext";
import { usersContextType } from "../../contexts/UsersContext/types";

// interface IProps {
//   setGender: (gender: string) => void;
//   gender: string;
// { setGender, gender }: IProps}

export default function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [gender, setGender] = React.useState(
    searchParams.get("gender") || "all"
  );
  const { setPage, getUsers } = React.useContext(
    usersContext
  ) as usersContextType;
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
    getUsers();
    setPage(1);
  }, [gender]);
  return (
    <FormControl>
      <FormLabel
        id="demo-radio-buttons-group-label"
        sx={{
          fontSize: "18px",
          borderBottom: "solid 1px blue",
          color: "darkblue",
        }}
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
