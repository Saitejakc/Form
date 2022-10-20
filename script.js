const form = document.getElementById("myForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("number");
const subject = document.getElementById("subject");
const del = document.getElementById("delete");
const message = document.getElementById("area");
const modalbg = document.querySelector(".modal-bg");
const modal = document.querySelector(".modal");
const close = document.querySelector("#close");
const btn = document.getElementById("button");
const error = document.getElementById("error");
const emailerror = document.getElementById("emailerror");
const numerror = document.getElementById("numerror");
const msgerror = document.getElementById("msgerror");
const checkName = /^[A-Za-z]{6,20}$/;
const checkEmail = /^[A-Za-z0-9_]{3,}@[A-Za-z]{3,}[.]{1}[a-z]{2,6}$/;
const checkNum = /^[0-9]{10}$/;

//Table
var row = 1;
var display = document.getElementById("display");
var selectedRow = null;

function inputName() {
  // document.getElementById("error").innerHTML = null;
  if (checkName.test(name.value)) {
    document.getElementById("error").innerHTML = null;
  } else {
    document.getElementById("error").innerHTML = "Invalid Name";
  }
}
function inputEmail() {
  // document.getElementById("emailerror").innerHTML = null;
  if (checkEmail.test(email.value)) {
    document.getElementById("emailerror").innerHTML = null;
  } else {
    document.getElementById("emailerror").innerHTML = "Invalid E-mail";
  }
}
function inputNum() {
  // document.getElementById("numerror").innerHTML = null;
  if (checkNum.test(number.value)) {
    document.getElementById("numerror").innerHTML = null;
  } else {
    document.getElementById("numerror").innerHTML = "Invalid Number";
  }
}
function inputMsg() {
  document.getElementById("msgerror").innerHTML = null;
}

// function resetForm() {
//   document.getElementById("name").value = "";
//   document.getElementById("email").value = "";
//   document.getElementById("number").value = "";
//   selectedRow = null;
// }

// function readFormData() {
//   var formData = {};
//   formData["name"] = document.getElementById("name").value;
//   console.log("form");
//   formData["email"] = document.getElementById("email").value;
//   formData["number"] = document.getElementById("number").value;
//   return formData;
// }

// function insertRecord() {
//   display = document.getElementById("display").getElementsByTagName("tbody")[0];
// }

function onEdit(i) {
  selectedRow = i.parentElement.parentElement;
  document.getElementById("name").value = selectedRow.cells[0].innerHTML;
  console.log(selectedRow.cells[0].innerHTML);
  document.getElementById("email").value = selectedRow.cells[1].innerHTML;
  document.getElementById("number").value = selectedRow.cells[2].innerHTML;
}

// function updateRecord() {
//   selectedRow.cells[0].innerHTML = name.value;
//   selectedRow.cells[1].innerHTML = email.value;
//   console.log("email");
//   selectedRow.cells[2].innerHTML = number.value;
// }
function onDelete(i) {
  if (confirm("Are you sure to delete this record? ")) {
    row = i.parentElement.parentElement.rowIndex;
    console.log(row);
    console.log("test");
    document.getElementById("display").deleteRow(row);
    resetForm();
    // console.log("close");
  }
}

// del.addEventListener("click", function onDelete(td) {
//   if (confirm("Are you sure to delete this record? "))
//     row = r.parentNode.parentNode.rowIndex;
//   console.log("test");
//
// });
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // var formData = readFormData();
  // if (selectedRow == null) {
  //   insertRecord(formData);
  // } else {
  //   updateRecord(formData);
  // }
  // resetForm();

  var newRow = display.insertRow(row);
  // console.log(newRow);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);

  cell1.innerHTML = name.value;
  cell2.innerHTML = email.value;
  cell3.innerHTML = phone.value;
  cell4.innerHTML = `<a onClick="onEdit(this)" id='edit' >Edit</a> <a onClick="onDelete(this)" id='delete' >Delete</a> `;

  // cell4.innerHTML.value = input;
  // row++;

  if (
    name.value.length > 0 ||
    email.value.length > 0 ||
    phone.value.length > 0
  ) {
    modalbg.style.display = "block";
    // console.log("modal");
    modal.classList.add("bg-active");
    // console.log("test");
    document.getElementById("pop_name").innerHTML = name.value;
    // console.log(name.value);
    document.getElementById("pop_email").innerHTML = email.value;
    document.getElementById("pop_number").innerHTML = number.value;
  }

  if (name.value == "" || name.value == null) {
    document.getElementById("error").innerHTML = "*Your Name is Required";
  }

  if (email.value == "" || email.value == null) {
    document.getElementById("emailerror").innerHTML =
      "*Your E-Mail is Required";
  }

  if (phone.value === "" || phone.value == null) {
    document.getElementById("numerror").innerHTML = "Example: +91 8024711000";
  }

  if (message.value == "" || message.value == null) {
    document.getElementById("msgerror").innerHTML = "*Message is required";
  }
});
window.onclick = function (event) {
  if (event.target == modalbg) {
    modal.classList.remove("bg-active");
    modalbg.style.display = "none";
    // console.log("close");
  }
};
close.addEventListener("click", function () {
  modal.classList.remove("bg-active");
  modalbg.style.display = "none";
});
