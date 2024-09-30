import zod from "zod";

export const taskZodSchema = zod.object({
  name: zod.string({ required_error: "name is required" }),
  //   completed: zod.boolean(),
});
