import React, { useDebugValue, useEffect, useState } from "react";

export const useName = () => {
  const [name, setName] = useState(null);

  useEffect(() => {
    setName("Bob");
  });

  useDebugValue(name ?? "loading...");

  return {name};
};
