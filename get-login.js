const button = document.querySelector(".verify-button");
const inputs = document.querySelectorAll("input");

button.onclick = (event) => {
  event.preventDefault();
  console.log(event);
//   const blog = {};
//   inputs.forEach((input) => {
//     blog[input.name] = input.value;
//   });

//   console.log(blog);

//   fetch("http://localhost:5002/logins", {
//     method: "POST",
//     body: JSON.stringify(blog),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
};