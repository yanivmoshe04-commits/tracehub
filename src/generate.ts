import { createRandomLog } from "./generator.ts";

for (let i = 0; i < 10; i++) {
    const log = createRandomLog();
    console.log(JSON.stringify(log));
}

