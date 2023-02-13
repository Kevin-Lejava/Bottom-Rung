import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, Grid } from "@mui/material";

function AutoSearch() {
  const [jobCategories, setjobCategories] = useState([]);
  return (
    <Grid>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={jobCategories}
          sx={{ width: 500 }}
          renderInput={(params) => (
            <TextField {...params} label="Search for jobs here!" />
          )}
        />
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={jobCategories}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Search for jobs here!" />
          )}
        />
      </Box>
    </Grid>
  );
}
export default AutoSearch;
