

var btnPopup = document.querySelector(".popup-btn");
var formPopup = document.querySelector(".popup-form");

function changeOpacityForm()
{
	formPopup.classList.toggle('active');
}

btnPopup.addEventListener("click", changeOpacityForm);


