import React, { useEffect } from "react";
import Login from "../Login";
import Browse from "../Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, deleteUser } from "../../utils/userSlice";
import { auth } from "../../utils/firebase";

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        // User is signed out
        dispatch(deleteUser());
      }
    });
  }, []);
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
