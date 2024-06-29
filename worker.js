self.addEventListener("message", (event) => {
  if (event.data === "Start counting") {
    let count = 0;
    for (let i = 0; i < 1000000000; i++) {
      count++;
    }

    self.postMessage("Counting completed: " + count);
  }
});
