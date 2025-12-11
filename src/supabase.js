import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Log for debugging, but DO NOT throw if they are missing
console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Anon Key:", supabaseAnonKey);

let supabase = null;

// Only create the client if both values exist
if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn(
    "Supabase not configured. VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY are missing. " +
      "Portfolio still works, but Supabase features (like contact form saving) are disabled."
  );
}

// ✅ Named export (for `import { supabase } from "../supabase"`)
export { supabase };

// ✅ Default export (in case anything uses `import supabase from "../supabase"`)
export default supabase;
