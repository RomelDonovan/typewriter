const sentence = "Hello there from Lighthouse Labs\n";
let timer = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
  timer += 50;
};