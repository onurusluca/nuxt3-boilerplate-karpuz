import { Database } from "~/types/database.types";
import supabase from "~/composables/useInitSupabase";

// const client = useSupabaseClient<Database>();

export default function () {
  /**************************************
   * READ
   **************************************/
  const readProfiles = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId);
      return { data, error };
    } catch (error) {
      console.error("Read profiles error thrown from useSupabase.ts:", error);
      throw error;
    }
  };

  const readUserSpaces = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("spaces")
        .select("*")
        .eq("user_id", userId);
      return { data, error };
    } catch (error) {
      console.error(
        "Read user spaces error thrown from useSupabase.ts:",
        error
      );
      throw error;
    }
  };

  const readVisitedSpaces = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("visited_spaces")
        .select("*")
        .eq("user_id", userId);
      return { data, error };
    } catch (error) {
      console.error(
        "Read visited spaces error thrown from useSupabase.ts:",
        error
      );
      throw error;
    }
  };

  /**************************************
   * CREATE
   **************************************/

  /**************************************
   * UPDATE
   **************************************/
  const updateProfile = async (
    userId: string,
    username: string,
    avatar_url: string
  ) => {
    const updates = {
      id: userId,
      username: username,
      avatar_url: avatar_url,
      updated_at: new Date(),
    };

    try {
      const { data, error } = await supabase
        .from("profiles")
        .upsert(updates)
        .select();

      return { error };
    } catch (error) {
      console.error("Update profile error thrown from useSupabase.ts:", error);
      throw error;
    }
  };

  /**************************************
   * DELETE
   **************************************/

  return { readProfiles, readUserSpaces, readVisitedSpaces, updateProfile };
}
