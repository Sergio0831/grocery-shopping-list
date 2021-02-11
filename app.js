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

/********* Tabs **********/
const tabsHeading = document.querySelector('.tabs__heading');
const tabsPanels = document.querySelectorAll('.tabs__panel');
let selectedPanel = null;

tabsHeading.addEventListener('click', (e) => {
	let target = e.target;
	let dataAttribute = e.target.dataset.clicked;
	if (target.tagName === 'LI') {
		// remove the currently selected element
		if (selectedPanel !== null) {
			selectedPanel.classList.toggle('selected');
		}
		selectedPanel = target;
		selectedPanel.classList.toggle('selected');

		// show panel
		let targetPanel = document.querySelector(dataAttribute);

		tabsPanels.forEach((item) => {
			item === targetPanel
				? item.classList.add('active')
				: item.classList.remove('active');
		});
	}
});

/********* Show answer **********/
const showAnswerBtn = document.getElementById('show-answer');

showAnswerBtn.addEventListener('click', (e) => {
	let p = document.createElement('p');
	p.textContent = 'Blue cheese';
	// document.getElementById('joke').appendChild(p);
	document.getElementById('joke').insertAdjacentHTML(
		'beforeend',
		`
	<p><strong>Blue Cheese</strong></p>
	`
	);
	e.target.style.display = 'none';
});
