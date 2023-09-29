import React from "react";
import { Box } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const onLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <Box className="absolute w-screen h-24 pt-6 pl-10 pb-4 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-40"
        src="https://assets.nflxext.com/en_us/layout/ecweb/common/logo-shadow2x.png"
        alt="netflix-header-logo"
      ></img>
      <Box className="flex items-center">
        <Box className="text-white mr-2">{user?.email}</Box>
        <img
          className="w-12 h-12 mr-2"
          src="https://occ-0-1492-3662.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
          alt="netflix-profile-logo"
        ></img>
        {user && (
          <button className="mr-2 text-white" onClick={onLogout}>
            Sign Out
          </button>
        )}
      </Box>
    </Box>
  );
};

export default Header;
