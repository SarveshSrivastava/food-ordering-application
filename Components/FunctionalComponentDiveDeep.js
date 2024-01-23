import { useEffect, useState } from "react";

const FunctionalComponentDiveDeep = () => {
  const [userInfo, setUserInfo] = useState({
    login: "dummy",
    id: 0,
    avatar_url: "",
  });

  useEffect(() => {
    console.log("useEffect");
    fetchUserProfile();
    timer = setInterval(() => {
      console.log("This is setInterval from functionalComponent");
    }, 1000);

    return () => {
      console.log("useEffect Return");
      clearInterval(timer);
    };
  }, []);

  const fetchUserProfile = async () => {
    const userInfoData = await fetch(
      "https://api.github.com/users/SarveshSrivastava"
    );
    const userInfoJson = await userInfoData.json();
    setUserInfo(userInfoJson);
  };

  console.log("render");
  return (
    <div>
      <img src={userInfo.avatar_url} />
      <h2>{userInfo.login}</h2>
      <h2>{userInfo.id}</h2>
    </div>
  );
};
export default FunctionalComponentDiveDeep;
