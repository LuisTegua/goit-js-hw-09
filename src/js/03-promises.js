let info = {};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve)
  return Promise.resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
  return Promise.reject(`❌ Rejected promise ${position} in ${delay}ms`);
}

function addPromise() {
  let time = info.delay;
  for (let i = 1; i <= info.amount; i++) {
    setTimeout(() => {
      createPromise(i, info.delay)
        .then(greeting => console.log(greeting))
        .catch(error => console.log(error));
        info.delay += info.step;
    }, time);
    time += info.step;
  }
}

function submit(e) {
  const inputs = form.querySelectorAll('input');
  inputs.forEach(input => {
    info[input.name] = parseFloat(input.value);
  });
  e.preventDefault();
  addPromise();
}

const form = document.querySelector('form');
form.addEventListener('submit', submit);

