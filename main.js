const worker = new Worker("worker.js");

worker.addEventListener("message", (event) => {
  document.getElementById("result").textContent =
    "Worker completed task: " + event.data;
  console.log("Worker sent:", event.data);
});

document.getElementById("startWorker").addEventListener("click", () => {
  worker.postMessage("Start counting");
});
