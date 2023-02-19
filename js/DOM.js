document.getElementById("apply-bg").addEventListener("click", function () {
  const friends = document.getElementsByClassName("friend");
  for (let friend of friends) {
    friend.style.backgroundColor = "blue";
  }
});

document.getElementById("center-third").addEventListener("click", function () {
  const third = document.getElementById("third-friend");
  third.style.textAlign = "center";
});
// add new friend
document.getElementById("add-friend").addEventListener("click", function () {
  const container = document.getElementById("friends");
  //   creating an element
  const friend = document.createElement("div");
  //   adding class with created element
  friend.classList.add("friend");
  //   adding innerhtml
  friend.innerHTML = `
    <h3 class="friend-name">added friend</h3>
    <p>this is a new friend</p>
    `;
  container.appendChild(friend);
});
