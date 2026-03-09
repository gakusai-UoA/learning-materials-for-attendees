// Part 5 - z.infer：定義と型を一本化する
import { z } from "zod";
import { UserSchema } from "./01-zod-user-schema";

type User = z.infer<typeof UserSchema>;
