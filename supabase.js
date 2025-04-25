
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

export const supabase = createClient(
  'https://mhezmwpbbxuzzcpcpege.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oZXptd3BiYnh1enpjcGNwZWdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2MTA3NzIsImV4cCI6MjA2MTE4Njc3Mn0.eEgaMdWAfZywvIZgQFIe6-DIxc1__2vaEt3j4Ey0jxw'
);
