import { z } from "zod"
import { publicProcedure, router } from "../trpc"

export const postRouter = router({
  getAll: publicProcedure.query(() => {
    return [
      { id: "1", title: "Post One" },
      { id: "2", title: "Post Two" },
    ]
  }),

  create: publicProcedure
    .input(z.object({ title: z.string() }))
    .mutation(({ input }) => {
      // TODO: Save to DB
      return { id: "new", ...input }
    }),
})