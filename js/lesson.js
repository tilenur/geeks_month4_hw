// PHONE BLOCK

const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");

// \+ - is just a symbol with \
// d{2} - means 2 digits - \d\d
// /^________$/ - means that the string must start and end with the regular expression

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;

// .test - checks if the string matches the regular expression

phoneButton.onclick = () => {
  if (regExp.test(phoneInput.value)) {
    phoneResult.innerHTML = "OK";
    phoneResult.style.color = "green";
  } else {
    phoneResult.innerHTML = "NOT OK";
    phoneResult.style.color = "red";
  }
};

//TAB SLIDER

const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabs = document.querySelectorAll(".tab_content_item");
//Event delegation - when pressing on the parent element
const tabsParent = document.querySelector(".tab_content_items");

const hideTabContent = () => {
  tabContentBlocks.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((tab) => {
    tab.classList.remove("tab_content_item_active");
  });
};

const showTabContent = (index = 0) => {
  tabContentBlocks[index].style.display = "block";
  tabs[index].classList.add("tab_content_item_active");
};

hideTabContent();
showTabContent(); //index of the tab to show

//(index = 0) - default parametr - means that if the index is not passed, it will be 0 by default

//Delegation continue from up
tabsParent.onclick = (event) => {
  const target = event.target;
  if (event.target.classList.contains("tab_content_item")) {
    tabs.forEach((tab, tabIndex) => {
      if (event.target === tab) {
        hideTabContent();
        showTabContent(tabIndex);
        index = tabIndex;
      }
    });
  }
};

//hw3 Auto slider - 3 sex

let index = 0;

setInterval(() => {
  index++;
  if (index >= tabs.length) {
    index = 0;
  }
  hideTabContent();
  showTabContent(index);
}, 3000);
