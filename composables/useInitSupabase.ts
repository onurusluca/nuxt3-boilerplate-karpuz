import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabase: SupabaseClient = createClient(
  "https://tuyftpyubgtivyvtpnbg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1eWZ0cHl1Ymd0aXZ5dnRwbmJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg2OTc1MDYsImV4cCI6MjAwNDI3MzUwNn0.z9Ms6Vfx2Iuvrx0QXhW1HfBCOEj0Ayy1vywq6k0d-68",
  {
    realtime: {
      params: {
        // JavaScript client has a default rate limit of 1 Realtime event every 100 milliseconds that's configured by eventsPerSecond. Here we set it to 5 events per second.
        eventsPerSecond: 5,
      },
    },
  }
);

export default supabase;
