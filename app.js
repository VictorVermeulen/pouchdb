const worker = new Worker('./worker.js');

function buttonClicked(number) {
  worker.postMessage({ number });
  console.log(`Posted task with ${number} entries to worker...`);
}
