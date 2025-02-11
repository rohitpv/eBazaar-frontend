import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (<Box display="flex" alignItems="center" gap={2}>
    <TextField
      label="Search by SKU or Name"
      variant="outlined"
      fullWidth
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
      }}
    />
    <Button variant="contained" color="primary" onClick={() => onSearch(query)}>
      Search
    </Button>
  </Box>
  );
};

export default SearchBar;
