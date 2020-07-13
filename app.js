const worker = new Worker('./worker.js');

function buttonClicked(number) {

  worker.postMessage({ number });
  console.log('Message posted to worker');
}

worker.onmessage = function(e) {
  result.textContent = e.data;
  console.log('Message received from worker');
}