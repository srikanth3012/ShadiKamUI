"use client";
import React, { memo, useEffect } from "react";
import useFetchUser from "@/hooks/useFetchUser";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const AuthUser = ({ children }) => {
  const user = useSelector((store) => store.userRole.user);

  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/auth");
  }, [user]);
  if (!user) return <h1>Loading</h1>;
  if (user) return <>{children}</>;
};

export default memo(AuthUser);
