import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, deleteUser } from "../../utils/userSlice";
import { LOGO } from "../../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const onLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(deleteUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Box className="absolute w-screen h-24 pt-6 pl-10 pb-4 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-40" src={LOGO} alt="netflix-header-logo"></img>
      {user && (
        <Box className="flex items-center">
          <Box className="text-white mr-2">{user?.email}</Box>
          <img
            className="w-12 h-12 mr-2"
            src="https://occ-0-1492-3662.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
            alt="netflix-profile-logo"
          ></img>

          <button className="mr-2 text-white" onClick={onLogout}>
            Sign Out
          </button>
        </Box>
      )}
    </Box>
  );
};

export default Header;
