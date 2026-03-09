// Part 5 - 【逆引きクイズ】こたえ - 20文字以内、空NG
import { z } from "zod";

z.string().min(1).max(20);
