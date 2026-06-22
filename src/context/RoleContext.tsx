"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Role = "Full Stack" | "Data Analyst";

interface RoleContextType {
  role: Role;
  setRole: (role: Role) => void;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<Role>("Full Stack");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-role") as Role;
    if (saved === "Full Stack" || saved === "Data Analyst") {
      setRole(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio-role", role);
  }, [role]);

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const context = useContext(RoleContext);
  if (context === undefined) {
    throw new Error("useRole must be used within a RoleProvider");
  }
  return context;
}
