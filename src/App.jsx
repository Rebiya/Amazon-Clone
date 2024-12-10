import "./App.css";
import Routers from "./Routers";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { auth } from "./Utility/firebase";
import { type } from "./Utility/action.type";
import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react";

function App() {
  const [{ user }, Dispatch] = useContext(DataContext);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser({
  //       type: type.SET_USER,
  //       user: currentUser,
  //     });
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser);
        Dispatch({
          type: type.SET_USER,
          user: authUser
        });
      } else {
        Dispatch({
          type: type.SET_USER,
          user: null
        });
      }
    });
  }, []);

  return (
    <>
      <Routers />
    </>
  );
}

export default App;
