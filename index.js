var form = document.getElementById('form-send')

form.addEventListener('submit', event => {
  event.preventDefault();
  var formData = new FormData(form);
  fetch("https://60376bfd5435040017722533.mockapi.io/form", {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .then(res => {
  if (res.status) {
    window.location.href = 'success.html'
  }
  else {
    window.location.href = 'error.html'
  }})
});
