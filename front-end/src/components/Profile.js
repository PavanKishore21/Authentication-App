import { Button } from "@chakra-ui/button";
import React from "react";

const Profile = ({ auth, setIsLogin }) => {
  const logout = async () => {
    localStorage.clear();
    setIsLogin(false);
  };
  console.log(auth);
  return (
    <div> 
      <Button onClick={() => logout()}>Log out</Button>
      {auth && auth.map((item) => <div key={item._id}>
        <img src={item.imgUrl} alt={item.name}></img>
        <h3>{item.name}</h3>
        <p>Price : ${item.price}</p>
        </div>)}
    </div>
  );
};

export default Profile;
