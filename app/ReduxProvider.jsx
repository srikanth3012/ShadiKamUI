"use client";
import { Provider } from "react-redux";
import Store from "@/store/store";

export default function ReduxProvider({ children }) {
  return <Provider store={Store}>{children}</Provider>;
}
