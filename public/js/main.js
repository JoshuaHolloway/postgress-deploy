const message = document.querySelector('.message');

// ==============================================

const button_get = document.querySelector('.button-get');
button_get.addEventListener('click', () => {
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

// ==============================================

const button_post = document.querySelector('.button-post');
button_post.addEventListener('click', () => {
  const form_data = { message: 'from frontend!' };

  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data
  fetch('/josh', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form_data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      message.textContent = data.message;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});

// ==============================================

const button_add_user = document.querySelector('.button-add-user');
button_add_user.addEventListener('click', () => {
  const form_data = { user_id: 1, username: 'josh', password: 'pw1' };

  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data
  fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form_data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      // message.textContent = data.message;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});

// ==============================================

const button_get_users = document.querySelector('.button-get-users');
button_get_users.addEventListener('click', () => {
  fetch('/api/users')
    .then((res) => res.json())
    .then((data) => {
      console.log('data: ', data);
      message.textContent = data.message;
    })
    .catch((err) => {
      console.log('.catch() - err: ', err);
    });
});
