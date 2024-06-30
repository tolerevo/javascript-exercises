// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p = document.createElement("p");
p.classList.add("paragraph");
p.textContent = "Hey I'm red!";
p.style.color = "red";
content.appendChild(p);

const h3 = document.createElement("h3");
h3.classList.add("blue-title");
h3.textContent = "I'm a blue H3!";
h3.style.color = "blue";
content.appendChild(h3);

const styledContent = document.createElement("div");
styledContent.setAttribute("id", "styled-content");
styledContent.setAttribute("style", "background: pink; border: 1px solid black;");

const h1 = document.createElement("h1");
h1.classList.add("red-title");
h1.style.color = "chocolate";
h1.textContent = "I'm in a div!";
styledContent.appendChild(h1);

const p2 = document.createElement("p");
p2.classList.add("second-paragraph");
p2.style.color = "aqua";
p2.textContent = "ME TOO!";
styledContent.appendChild(p2);

container.appendChild(styledContent);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
