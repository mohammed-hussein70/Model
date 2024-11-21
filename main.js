let btnModel = document.querySelector(".btnModel");
let model = document.querySelector(".modelContent");
let btnClose = document.querySelector(".modelContent .header span");
btnModel.onclick = function () {
  model.style.display = "block";
  btnModel.style.display = "none";
};
btnClose.onclick = function () {
  model.style.display = "none";
  btnModel.style.display = "block";
};
