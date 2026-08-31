/* ids in the HTML*/
const editor = document.querySelector("#editor");
const editButton = document.querySelector("#edit-button");
const editorPanel = document.querySelector("#editor-panel");
const loginForm = document.querySelector("#login-form");
const passwordInput = document.querySelector("#password");
const loginMessage = document.querySelector("#login-message");

const saveButton = document.querySelector("#save-button");

const headingInput = document.querySelector("#heading-input");

const textInput = document.querySelector("#text-input");

const mainHeading = document.querySelector("#main-heading");

const mainText = document.querySelector("#main-text");

const logoutButton = document.querySelector("#logout-button");

/*End of the ids*/

/*Const variables in javascript*/
const savedHeading = loadContent("mainHeading");
const savedText = loadContent("mainText");
/*end of const variables*/




if (savedHeading !== null) {
		  mainHeading.textContent = savedHeading;
}

if (savedHeading !== null) {
		  mainText.textContent = savedText;
}

let editMode = false;

function saveContent(key, value) {
		  localStorage.setItem(key, value);
}

function loadContent(key) {
		  return localStorage.getItem(key);
}

function loadEditorContent() {
		  headingInput.value = mainHeading.textContent;
		  textInput.value = mainText.textContent;
}

editButton.addEventListener("click", function () {
		  if (editorPanel.hidden === true){
					 editorPanel.hidden = false;
		  }
		  else {
					 editorPanel.hidden = true;
		  }
		 /*Simpiler Method. Uncomment when you understand js more
		  * editorPanel.hidden = !editorPanel.hidden;
		  * the !editorPanel.hidden makes it not what it currently is. Since its a boolean
		  * It can only be two values, acting as a switch*/
});

loginForm.addEventListener("submit", function (event) {
		  event.preventDefault();

		  const password = passwordInput.value;

		  if (password === "password") {
					 editMode = true;
					 editor.hidden = false;
					 editorPanel.hidden = true;

					 loadEditorContent();

		  } else {
					 loginMessage.textContent = "Incorrect password.";
		  }
});



saveButton.addEventListener("click", function () {
		  mainHeading.textContent = headingInput.value;
		  mainText.textContent = textInput.value;

		  saveContent("mainHeading", headingInput.value);
		  saveContent("mainText", textInput.value);
});

logoutButton.addEventListener("click", function () {
		  editMode = false;
		  editor.hidden = true;
});
