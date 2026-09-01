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

/*Objects (Structs for your cpp mind)*/
const page = {
		  title: mainHeading.textContent,
		  text: mainText.textContent
};
/*End of Objects*/

function saveContent(key, value) {
		  localStorage.setItem(key, value);
}

function loadContent(key) {
		  return localStorage.getItem(key);
}

if (savedHeading !== null) {
		  page.title = savedHeading;
}

if (savedText !== null) {
		  page.text = savedText;
}

mainHeading.textContent = page.title;
mainText.textContent = page.text;

function loadEditorContent() {
		  headingInput.value = page.title;
		  textInput.value = page.text;
}

let editMode = false;

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
		  page.title = headingInput.value;
		  page.text = textInput.value;

		  mainHeading.textContent = page.title;
		  mainText.textContent = page.title;

		  saveContent("mainHeading", headingInput.value);
		  saveContent("mainText", textInput.value);
});

logoutButton.addEventListener("click", function () {
		  editMode = false;
		  editor.hidden = true;
});
