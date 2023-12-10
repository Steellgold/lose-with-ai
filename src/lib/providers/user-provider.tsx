"use client";

import type { PropsWithChildren } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import type { Component } from "../utils/component";
import type { User } from "@supabase/supabase-js";
import { createClient } from "../utils/supabase/client";

type ContextType = {
  user: User | null;
  setUser: (value: User | null) => void;
}

const UserContext = createContext<ContextType | null>(null);

export const useUser = (): ContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a DateProvider");
  }

  return context;
};

export const UserProvider: Component<PropsWithChildren> = ({ children }) => {
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
  }, [supabase.auth]);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};