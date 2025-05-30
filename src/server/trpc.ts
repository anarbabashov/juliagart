import { initTRPC } from "@trpc/server"
import superjson from "superjson"
import { postRouter } from "./routers/post"

const t = initTRPC.create({ transformer: superjson })
export const router = t.router
export const publicProcedure = t.procedure

export const appRouter = router({
  post: postRouter,
})

export type AppRouter = typeof appRouter