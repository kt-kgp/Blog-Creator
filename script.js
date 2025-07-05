function showManualForm() {
  document.getElementById('manualForm').style.display = 'block';
  document.getElementById('apiForm').style.display = 'none';
  clearCard();
}

function showAPIForm() {
  document.getElementById('manualForm').style.display = 'none';
  document.getElementById('apiForm').style.display = 'block';
  clearCard();
}

function clearCard() {
  document.getElementById('blogCard').innerHTML = '';
}

function submitManual() {
  let title = document.getElementById('manualTitle').value;
  let desc = document.getElementById('manualDesc').value;

  if (title && desc) {
    document.getElementById('blogCard').innerHTML = `
      <h3>${title}</h3>
      <p>${desc}</p>
    `;
  }
}

function submitAPI() {
  let inputTitle = document.getElementById('apiTitle').value.toLowerCase();

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      let found = data.find(post => post.title.toLowerCase().includes(inputTitle));

      if (found) {
        document.getElementById('blogCard').innerHTML = `
          <h3>${found.title}</h3>
          <p>${found.body}</p>
        `;
      } else {
        alert("Blog not found!");
      }
    })
    .catch(() => {
      alert("Error fetching from API");
    });
}
