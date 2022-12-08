import { serve } from "https://deno.land/std@0.155.0/http/server.ts";

const Location = Deno.env.get("TO") || 'https://github.com/johnstonmatt/deno-redirect';
const PERMANENT_REDIRECT = 301;

serve(
  (_: Request) =>
    new Response(null, {
      status: PERMANENT_REDIRECT,
      headers: { Location },
    })
);
