import { BetterAuth } from "better-auth"
import { z } from "zod"

export const auth = new BetterAuth({
  providers: ["email"],

  schema: {
    register: z.object({
      email: z.string().email(),
      password: z.string().min(6),
    }),
    login: z.object({
      email: z.string().email(),
      password: z.string().min(6),
    }),
  },
})