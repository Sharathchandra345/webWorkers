const worker = new Worker("perfworker.js");

worker.addEventListener("message", (data) => {
  console.log("worker sent", data);
  alert("worker sent " + data);
});

let count = 0;
const start = performance.now();
for (let i = 0; i < 2000000000; i++) {
  count++;
}

console.log("time taken = ", +performance.now() - start);
