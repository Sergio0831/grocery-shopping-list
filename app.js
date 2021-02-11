// ************* REMOVE ITEMS ************
const list = document.querySelector('.shopping-list__action ul');

list.addEventListener('click', removeItem);

function removeItem(e) {
	let target = e.target;
	if (target.id === 'btn--delete') {
		target.parentElement.remove();
	}
}

// ************* ADD ITEMS ************
const addItemForm = document.getElementById('add-item');

addItemForm.addEventListener('submit', addItem);

function addItem(e) {
	e.preventDefault();
	let input = document.getElementById('add');
	if (input.value === '') {
		alert('Add grocery');
	} else {
		list.insertAdjacentHTML(
			'beforeend',
			`
  <li class="item">${input.value}<input type="button" id="btn--delete" value="delete" /></li>
  `
		);
		input.value = '';
	}
}

// ************* HIDE ITEMS ************
const checkbox = document.querySelector('#hide');

checkbox.addEventListener('change', hideItems);

function hideItems() {
	checkbox.checked
		? (list.style.display = 'none')
		: (list.style.display = 'grid');
}

/************* FILTER ITEMS ************/
const searchInput = document.forms['search'].querySelector('input');

searchInput.addEventListener('keyup', (e) => {
	let text = e.target.value.toLowerCase();
	// take each li
	let groceries = list.getElementsByTagName('li');

	// loop through each li
	Array.from(groceries).forEach((grocery) => {
		let groceryName = grocery.textContent.toLowerCase();

		groceryName.indexOf(text) === -1
			? (grocery.style.display = 'none')
			: (grocery.style.display = 'flex');
	});
});
