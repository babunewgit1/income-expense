/*
    TODO:
        1. getting value from form.
        2. create html for showing data from form in the ui.
        3. write function for sending null value.
 */

// === getting value from form ===
const form = document.querySelector('#ewallet-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const type = document.querySelector('.add__type').value;
    const description = document.querySelector('.add__description').value;
    const number = document.querySelector('.add__value').value;

    if (description && number) {
        htmlElement (type, description, number);
    } else {
        document.querySelector('#error').innerHTML = `empty input field`
    }
})

// === make html element ===
function htmlElement (select, description, number) {
    const item = `
        <div class="item">
          <div class="item-description-time">
            <div class="item-description">
              <p>${description}</p>
            </div>
            <div class="item-time">
              <p>25 Feb, 06:45 PM</p>
            </div>
          </div>
          <div class="item-amount ${(select === '+' ? 'income-amount' : 'expense-amount')}">
            <p>${select}$${number}</p>
          </div>
        </div> `

    const collection = document.querySelector('.collection');
    collection.insertAdjacentHTML("afterbegin",item);
}

// === function for reset form ===
function resetForm(one, two, three) {
    one = '+'
    two = 'babu';
    three = 'kamrul';
}
