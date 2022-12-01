document.addEventListener("DOMContentLoaded", () => {
  // Get the form element
  let form = document.getElementById('create-task-form');

  // On submitting the form, carry out the creating of new todo item
  form.addEventListener('submit', (event) => {
      // Prevent the submit button from reloading the page
    event.preventDefault();

    // Add todo to list
    addToDo();
    
    // Clear the form after submitting
    form.reset();
  })
});

function addToDo(){
  // Get the input text from the input field and save it in a variable
  let todo = document.getElementById('new-task-description').value
  
  // Create a paragraph element to hold the value
  let listItem = document.createElement('li');
  listItem.textContent = `${todo} `;

  // Create a delete button and add to the list item
  let delButton = document.createElement('button');
  // Add event listener to delete listItem on click
  delButton.addEventListener('click', deleteToDo);
  // Style the button
  delButton.textContent = 'X';
  delButton.width = '50px';
  delButton.height = '50px';
  // Append to listItem
  listItem.appendChild(delButton);
  
  // Add the paragraph element to the page
  document.getElementById('tasks').appendChild(listItem);
}

function deleteToDo(event){
  // Delete the parent node aka the listItem
  event.target.parentNode.remove();
}
