self.addEventListener("message", (event) => {
  self.postMessage("Task completed: " + event.data);
});

self.postMessage("Worker started");
