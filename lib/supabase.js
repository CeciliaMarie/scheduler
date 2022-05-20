import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://hzzaimjqkkgaduiozzgk.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6emFpbWpxa2tnYWR1aW96emdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTMwMDQzOTUsImV4cCI6MTk2ODU4MDM5NX0.BBi77wa-etaAjHmCrabQjphB-0e-27KE3g6gQkEhgVA"

export const supabase = createClient(supabaseUrl, supabaseKey)