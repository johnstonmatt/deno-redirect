import { serve } from "https://deno.land/std@0.155.0/http/server.ts";

const Location = Deno.env.get("LOCATION") || "World";
const PERMANENT_REDIRECT = 301;

serve(
  (_: Request) =>
    new Response("Hello World", {
      status: PERMANENT_REDIRECT,
      headers: { Location },
    })
);
