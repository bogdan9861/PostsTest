import React, { useEffect, useState } from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import useDebounce from "../../hooks/useDebounce";

import "./Header.css";

const Header = ({ setSearch }) => {
  return (
    <header className="header">
      <input
        className="header__search"
        type="text"
        placeholder="Начните поиск по заголовку..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </header>
  );
};

export default Header;
