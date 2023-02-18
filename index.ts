import { serve } from 'https://deno.land/std/http/server.ts'
import {yoga} from "./yoga.ts";

serve(yoga, {
  onListen({hostname, port}) {
    console.log(`Listening on http://${hostname}:${port}/graphql`)
  }
})
