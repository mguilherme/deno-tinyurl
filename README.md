# Deno tinyURL

> Deno module for shorten url with [tinyURL](https://tinyurl.com/).

## Usage
To use this library you need to include the `--allow-net` flag into your script.

```typescript
import {shorten} from "https://raw.githubusercontent.com/mguilherme/deno-tinyurl/main/mod.ts";

const shortLink = await shorten("https://www.google.com/");
console.log(shortLink);
```
