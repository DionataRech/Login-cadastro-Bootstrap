const formCreateUser = document.getElementById("create-user");
const alertPlaceholder = document.getElementById("alert");
const rePasswordInput = document.getElementById("re-password");
const passwordInput = document.getElementById("password-register");
const userNameInput = document.getElementById("email-register");
const nameInput = document.getElementById("nameInput");

const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);

  setTimeout(() => {
    wrapper.innerHTML = "";
  }, 3000);
};

const velidateRepassword = () => {
  const password = passwordInput.value;
  const rePassword = rePasswordInput.value;

  if (password !== rePassword) {
    rePasswordInput.value = null;
    form.classList.add("was-validated");
  }
};

formCreateUser.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();

    if (!formCreateUser.checkValidity()) {
      event.stopPropagation();

      appendAlert("Ops, verifique os campos!", "danger");
    }

    formCreateUser.classList.add("was-validated");

    if (formCreateUser.checkValidity()) {
      axios
        .post("/usuarios", {
          email: userNameInput.value,
          senha: passwordInput.value,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  },
  false
);

//////// consumindo api com axios ////////////////

// const createAccount = async (event) => {
//   event.preventDefault();
//   try {
//     const email = document.getElementById("email-register").value;
//     const senha = document.getElementById("password-register").value;

//     const data = {
//       email,
//       senha,
//     };

//     localStorage.setItem("register", JSON.stringify(data));

//     const dataSave = JSON.parse(localStorage.getItem("register"));

//     const response = await api.post("usuarios", dataSave);

//     console.log("conta criada", response.data);

//     localStorage.removeItem("register");

//     window.location.href = "./register.html";
//   } catch (error) {
//     console.log("errrrrrrrrrrrrrrrrrrrrouuuuuuuuuuuuuuu");
//     //   const alert = document.getElementById("my-alert");

//     //   alert.innerHTML = `<div class="alert alert-danger" role="alert">
//     //   Invalid credentials!
//     // </div>`;
//   }
// };

// ///login ////

const login = async (event) => {
  event.preventDefault();
  try {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    const data = {
      email,
      senha,
    };

    localStorage.setItem("login", JSON.stringify(data));

    const dataSave = JSON.parse(localStorage.getItem("login"));

    const response = await api.post("login", dataSave);

    console.log("login realizado", response.data);

    localStorage.removeItem("login");
  } catch (error) {
    console.log(error);
  }
};
