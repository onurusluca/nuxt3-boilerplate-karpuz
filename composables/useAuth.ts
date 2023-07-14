import { Database } from "~/types/database.types";
import supabase from "~/composables/useInitSupabase";

// const { auth } = useSupabaseAuthClient<Database>();
export default function () {
  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      return { data, error };
    } catch (error) {
      console.error("Login error thrown from useAuth.ts:", error);
      throw error;
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({ email, password });
      return { data, error };
    } catch (error) {
      console.error("Sign up error thrown from useAuth.ts:", error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      return error;
    } catch (error) {
      console.error("Sign Out error thrown from useAuth.ts:", error);
      throw error;
    }
  };

  const googleAuth = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      return error;
    } catch (error) {
      console.error("Google Auth error thrown from useAuth.ts:", error);
      throw error;
    }
  };

  return { signIn, signUp, signOut, googleAuth };
}
