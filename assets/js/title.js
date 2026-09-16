var titles = [
  "Hi",
  "Hey",
  "Welcome",
  "to my",
  "profile",
  "Feel free",
  "to explore",
  "Enjoy!",
  "to explore",
  "Feel free",
  "Welcome",
  "Hey",
  "Hi",
];

function changeTitle() {
  var index = 0;

  setInterval(function () {
    document.title = titles[index];
    index = (index + 1) % titles.length;
  }, 1000);
}

changeTitle();
