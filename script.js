document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("infi-list");

  // Function to add list items
  function addListItems() {
    for (let i = 0; i < 2; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = "List Item " + (list.childElementCount + 1);
      list.appendChild(listItem);
    }
  }

  // Add initial list items
  for (let i = 0; i < 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = "List Item " + (i + 1);
    list.appendChild(listItem);
  }

  // Add more list items when scrolling to the bottom
  list.addEventListener("scroll", function () {
    if (
      list.scrollTop + list.clientHeight >=
      list.scrollHeight - list.clientHeight
    ) {
      addListItems();
    }
  });
});
