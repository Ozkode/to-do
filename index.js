const inputBox = document.getElementById('inputField');
const listContainer = document.getElementById('list-container');

function addTask() {

    if(inputBox.value ===''){
        alert('what is the run-down for today?');
    }

    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        inputBox.value = '';

    }

    
}

