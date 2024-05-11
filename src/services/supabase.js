import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mzoqbqkdojrbkpfalqeq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16b3FicWtkb2pyYmtwZmFscWVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczOTUxNDYsImV4cCI6MjAyMjk3MTE0Nn0.bjkQUMWJGyfwV_eIRyT29hAS8-LriecxmJfUYZX3ppc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
