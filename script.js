const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');
var inputs = [document.querySelector('#task-input'), document.querySelector('#input-button')];

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();
};

function addTask(description) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}

async function darkMode() {
  // pega o checkbox do documento.
  var checkBox = document.getElementById("switchDark");
  // pega o body do documento.
  var body = document.body;
  body.classList.toggle("light-mode");

  // se o checkbox está checado, coloca o body na classe "dark-mode"
  if (checkBox.checked == true){
	await body.classList.toggle("light-mode");
    await body.classList.toggle("dark-mode");
  } else {
	await body.classList.toggle("dark-mode");
	await body.classList.toggle("light-mode");
  }
}