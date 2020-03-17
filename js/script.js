var link = document.querySelector(".contacts-button");
    var popup = document.querySelector(".feedback");
    var close = popup.querySelector(".modal-close");
    var form = popup.querySelector("form");
    var login = popup.querySelector("[name=user-name]");
    var email = popup.querySelector("[name=user-email]");
    var background = document.querySelector(".modal-background");

    var isStorageSupport = true;
    var storage = "";
  
    try {
      storage = localStorage.getItem("login");
    } catch (err) {
      isStorageSupport = false;
    }    

    link.addEventListener("click", function (evt) {
      evt.preventDefault();    
      popup.classList.add("feedback-open");
      background.classList.add("background-open");
      if (storage) {
      login.value = storage;
      email.focus();
      } else {
      login.focus();
      }
    });

    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("feedback-open");
      popup.classList.remove("feedback-error");
      background.classList.remove("background-open");
    });
    form.addEventListener("submit", function (evt) {
      if (!login.value || !email.value) {
        evt.preventDefault();
        popup.classList.remove("feedback-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("feedback-error");
      } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
      }
    });
    window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("feedback-open")) {
        popup.classList.remove("feedback-open");
        popup.classList.remove("feedback-error");
        background.classList.remove("background-open");

      }
      }
    });
