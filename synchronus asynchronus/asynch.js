function asynchronousTask(callback) {
    setTimeout(() => {
      console.log("Langkah 1 (Asyncronous)");
      callback();
    }, 2000);
  }
  
  console.log("Proses dimulai");
  asynchronousTask(() => {
    console.log("Langkah 2 (Asyncronous)");
    console.log("Proses selesai");
  });
  