function getAPI() {
  fetch('https://jsonplaceholder.typicode.com/posts').then(function (list) {
    return list.json();
  }).then(function (data) {
    var result = "<p class=\"list_heading\"> Custom List </p>\n <p class=\"list_text\"> Some heading </p>";
    data.forEach(function (user) {
      var userId = user.userId,
          id = user.id,
          title = user.title,
          body = user.body;
      result += "<div>\n <ul>\n <li> User ID: ".concat(userId, " </li>\n  <li> ID: ").concat(id, "</li>\n <li> Title: ").concat(title, " </li>\n <li> Body: ").concat(body, " </li>\n </ul>\n </div>");
      document.getElementById('result').innerHTML = result;
    });
  });
}

function ChangeBorder(x){
  x.style.borderColor = "#1e2123"
}

function ReturnBorder(x){
  x.style.borderColor = "#d7d7d7"
}

function LearnMore() {
  alert("Will be implemented in future...");
}