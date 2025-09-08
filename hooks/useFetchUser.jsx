import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useFetchUser = () => {
  const [auth, setAuth] = useState("");
  const [loading, setLoading] = useState(true);
  const user = useSelector((store) => store.userRole.user);
  console.log(user, "auth");

  const fetchUser = () => {
    setAuth(user);
    setLoading(false);
    console.log(user, "auth");
  };

  useEffect(() => {
    if (user) fetchUser(); // initial fetch
  }, [user]);

  return { auth, loading };
};

export default useFetchUser;
