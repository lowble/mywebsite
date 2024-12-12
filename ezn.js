document.addEventListener("DOMContentLoaded", function() {

    var button = document.createElement("button");
    button.innerHTML = "Zmień autora";
    button.addEventListener("click", function() {
      changeAuthor();
    });
  
    var footer = document.querySelector("footer");
    footer.appendChild(button);
  
    function changeAuthor() {
      var author = prompt("Podaj nowego autora strony:");
      if (author !== null && author.trim() !== "") {
        document.querySelector("footer p").textContent = "Stronę stworzył: " + author;
      }
    }
  });