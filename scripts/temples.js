const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
menuButton.addEventListener("click", () => {
navigation.classList.toggle("open");
menuButton.classList.toggle("open");
});
const yearSpan = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
yearSpan.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;