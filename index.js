const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const email = document.getElementById("email");
const passwordElement = document.getElementById("password");
const form = document.getElementById("form");

function addErrorStyles(element) {
	element.style.border = "1px solid hsl(0, 100%, 74%)";
	element.nextElementSibling.style.display = "block";
	element.parentNode.children[2].textContent = element.placeholder + " cannot be empty";
}

function addEmailErrorStyles(element) {
	element.style.border = "1px solid hsl(0, 100%, 74%)";
	element.nextElementSibling.style.display = "block";
	element.parentNode.children[2].textContent = "Looks like this is not an email";
}

function removeErrorStyles(element) {
	element.style.border = "1px solid hsl(246, 25%, 77%)";
	element.nextElementSibling.style.display = "none";
	element.parentNode.children[2].textContent = "";
}

function isEmpty(element) {
	if (element.value == "" || element.value == null) {
		return true;
	}
	return false;
}

function isValidEmail(element) {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (regex.test(element.value)) {
		return true;
	}
	return false;
}

form.addEventListener("submit", function (e) {
	if (isEmpty(first_name) || isEmpty(last_name) || !isValidEmail(email) || isEmpty(passwordElement)) {
		e.preventDefault();

		if (isEmpty(first_name)) {
			addErrorStyles(first_name);
		} else {
			removeErrorStyles(first_name);
		}

		if (isEmpty(last_name)) {
			addErrorStyles(last_name);
		} else {
			removeErrorStyles(last_name);
		}

		if (!isValidEmail(email)) {
			addEmailErrorStyles(email);
		} else {
			removeErrorStyles(email);
		}

		if (isEmpty(passwordElement)) {
			addErrorStyles(passwordElement);
		} else {
			removeErrorStyles(passwordElement);
		}
	}
});
