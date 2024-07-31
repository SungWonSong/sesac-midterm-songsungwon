const addBtn = document.querySelector('#input-button');

addBtn.addEventListener('click', () => {
    if(addBtn.value == ''){
        return
    }
})


// input버튼시 add
function addTodo(elem) {
    const inputBoxElem = document.querySelector("#input-box");
    const inputBoxValue = inputBoxElem.value;
    document.querySelector(".to-do-list").innerHTML += `
    <li>
    <input
      type="checkbox"
      class="checkbox"
      onclick="onClickCheckbox(this)"
    />
    ${inputBoxValue}
    <input
              type="button"
                value="x"
                width="20"
                height="20"
                onclick="onClickDeleteButton(this)"
              />
  </li>
    `;
    inputBoxElem.value = "";
  }

// enter 키 눌렀을 경우 작동한다....
  function enterKey() {
    if (window.event.keyCode == 13) {
      addTodo();
    }
  }

// delete 삭제버튼
function onClickDeleteButton(deleteElem) {
    deleteElem.parentElement.remove();
  }

