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
        <Box className="flex items-center mr-2">
          <Box className="flex flex-col">
            <Box className="text-white p-2   ">{user?.email}</Box>
            <button
              className="bg-red-500 p-2 rounded-lg text-white"
              onClick={onLogout}
            >
              Sign Out
            </button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Header;
