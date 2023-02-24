import {serve} from 'https://deno.land/std/http/server.ts'
import {yoga} from "./yoga.ts";

const start = new Date()

serve(yoga, {
  onListen({hostname, port}) {
    const finish = new Date()
    console.log(`Listening on http://${hostname}:${port}/graphql`)
    console.log(`started in ${finish - start}ms`)
  }
})
