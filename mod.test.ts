import {assertEquals} from "https://deno.land/x/std/testing/asserts.ts";
import {shorten} from './mod.ts';

Deno.test("should generate a tiny url", async () => {
    const tinyUrl = await shorten('https://example.com/');
    assertEquals(tinyUrl, "https://tinyurl.com/yqp7ct");
});
