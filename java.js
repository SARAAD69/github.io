

function getAPI() {
  fetch('https://jsonplaceholder.typicode.com/posts').then(function (res) {
    return res.json();
  }).then(function (data) {
    var result = "<h2> Random User Info From Jsonplaceholder API</h2>";
    data.forEach(function (user) {
      var userId = user.userId,
          id = user.id,
          title = user.title,
          body = user.body;
      result += "<div>\n <h5> User ID: ".concat(userId, " </h5>\n <ul class=\"w3-ul\">\n <li> User Full Name : ").concat(id, "</li>\n <li> User Email : ").concat(title, " </li>\n <li> User Address : ").concat(body, " </li>\n </ul>\n </div>");
      document.getElementById('result').innerHTML = result;
    });
  });
}