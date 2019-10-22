import React, {useEffect, useState} from "react";
import {Header} from "./Header";

export const Layout = ({children, userIsLoged}) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    if (userIsLoged) {
      const user = JSON.parse(localStorage.getItem("user"));
      setUser(user);
    }
  }, [userIsLoged]);
  return (
    <>
      <Header userIsLoged={userIsLoged} user={user} />
      <main>{children}</main>
    </>
  );
};
