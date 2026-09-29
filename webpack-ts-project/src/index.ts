window.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("section-1");
  const button = document.querySelector("button");
  const form = document.getElementById("user-form") as HTMLFormElement;
  const input = document.getElementById("user-input") as HTMLInputElement;

  // 1️⃣ Товч дээр дарсан үед div текст өөрчлөгдөх
  button?.addEventListener("click", () => {
    if (section) section.textContent = "Та товч дарсан байна!";
    console.log("Текст өөрчлөгдсөн эсэх:", section?.textContent);
  });

  // 2️⃣ Form submit хийх үед input утга console-д хэвлэх
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Хэрэглэгчийн оруулсан утга:", input.value);
    // Дэлгэц дээр харуулах
    const displayDiv = document.getElementById("display");
    if (displayDiv) displayDiv.textContent = `Оруулсан утга: ${input.value}`;
  });
});