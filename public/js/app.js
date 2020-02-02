const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

messageOne.textContent = "";
messageTwo.textContent = "";

weatherForm.addEventListener("submit", e => {
  e.preventDefault();

  const location = search.value;
  messageOne.textContent = "Please wait...";
  messageTwo.textContent = "";

  fetch(`/weather?address=${location}`).then(res => {
    res.json().then(data => {
      if (data.error) {
        return (messageOne.textContent = data.error);
      }
      messageOne.textContent = data.location;
      messageTwo.textContent = data.forecast;
    });
  });
});
