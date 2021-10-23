const message = document.querySelector('.message');

const button = document.querySelector('.button');
button.addEventListener('click', () => {
  fetch('/josh')
    .then((res) => res.json())
    .then((data) => {
      console.log('data: ', data);
      message.textContent = data.message;
    })
    .catch((err) => {
      console.log('.catch() - err: ', err);
    });
});
