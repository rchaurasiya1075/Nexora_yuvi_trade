import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as fbSignOut,
  updateProfile,
  type User,
} from "firebase/auth";
import { ensureAuthPersistence, firebaseAuth } from "./client";
import { ensureTraderProfile } from "./desk";
import { firebaseMessage } from "./errors";

export type DeskSessionUser = {
  id: string;
  name: string;
  email: string;
  image?: string | null;
};

type SessionState = {
  user: DeskSessionUser | null;
  isPending: boolean;
  error: string | null;
};

const Ctx = createContext<
  SessionState & {
    signUpEmail: (email: string, password: string, name?: string) => Promise<void>;
    signInEmail: (email: string, password: string) => Promise<void>;
    signOutDesk: () => Promise<void>;
  }
>({
  user: null,
  isPending: true,
  error: null,
  signUpEmail: async () => undefined,
  signInEmail: async () => undefined,
  signOutDesk: async () => undefined,
});

function toUser(u: User): DeskSessionUser {
  return {
    id: u.uid,
    name: u.displayName || u.email?.split("@")[0] || "Trader",
    email: u.email || "",
    image: u.photoURL,
  };
}

export function FirebaseAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<DeskSessionUser | null>(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let unsub = () => undefined as void;
    void ensureAuthPersistence().then(() => {
      unsub = onAuthStateChanged(firebaseAuth, (next) => {
        setUser(next ? toUser(next) : null);
        setPending(false);
        if (next) {
          void ensureTraderProfile(next).catch(() => undefined);
        }
      });
    });
    return () => unsub();
  }, []);

  const signUpEmail = useCallback(async (email: string, password: string, name?: string) => {
    setError(null);
    try {
      await ensureAuthPersistence();
      const cred = await createUserWithEmailAndPassword(firebaseAuth, email.trim(), password);
      const label = (name || email.split("@")[0] || "Trader").slice(0, 40);
      await updateProfile(cred.user, { displayName: label });
      await ensureTraderProfile(cred.user);
    } catch (err) {
      const message = firebaseMessage(err);
      setError(message);
      throw new Error(message);
    }
  }, []);

  const signInEmail = useCallback(async (email: string, password: string) => {
    setError(null);
    try {
      await ensureAuthPersistence();
      const cred = await signInWithEmailAndPassword(firebaseAuth, email.trim(), password);
      await ensureTraderProfile(cred.user);
    } catch (err) {
      const message = firebaseMessage(err);
      setError(message);
      throw new Error(message);
    }
  }, []);

  const signOutDesk = useCallback(async () => {
    await fbSignOut(firebaseAuth);
  }, []);

  const value = useMemo(
    () => ({ user, isPending, error, signUpEmail, signInEmail, signOutDesk }),
    [user, isPending, error, signUpEmail, signInEmail, signOutDesk],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useDeskSession() {
  return useContext(Ctx);
}

export function useDeskUser() {
  return useContext(Ctx).user;
}
