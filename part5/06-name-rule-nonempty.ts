// Part 5 - 【逆引きクイズ】こたえ - 別の書き方
import { z } from "zod";

z.string().nonempty().max(20);
