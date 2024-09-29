import zod from "zod";

export const taskZodSchema = zod.object({
  name: zod.string(),
  completed: zod.boolean(),
});
