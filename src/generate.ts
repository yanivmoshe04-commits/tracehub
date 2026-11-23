import { createRandomLog } from "./generator.ts";

const countIndex = process.argv.indexOf("--count");
if (countIndex === -1) {
    console.error("Please provide a count using --count <number>");
    process.exit(1);
}
const countText = process.argv[countIndex + 1];
const count = parseInt(countText, 10);
if (Number.isNaN(count) || count <= 0) {
    console.error("Please provide a valid positive number for count");
    process.exit(1);
}  

for (let i = 0; i < count; i++) {
    const log = createRandomLog();
    console.log(JSON.stringify(log));
}

