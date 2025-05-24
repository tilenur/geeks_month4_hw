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

//CONVERTER

const somInput = document.querySelector("#som");
const usdInput = document.querySelector("#usd");
const eurInput = document.querySelector("#eur");

//DRY

const converter = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "../data/converter.json");
  request.setRequestHeader("Content-type", "application/json");
  request.send();

  request.onload = () => {
    const data = JSON.parse(request.response);

    somInput.oninput = () => {
      usdInput.value = (somInput.value / data.usd).toFixed(2);
      eurInput.value = (somInput.value / data.eur).toFixed(2);
      if (somInput.value === "") {
        usdInput.value = "";
        eurInput.value = "";
      }
    };

    usdInput.oninput = () => {
      somInput.value = (usdInput.value * data.usd).toFixed(2);
      eurInput.value = ((usdInput.value * data.usd) / data.eur).toFixed(2);
      if (usdInput.value === "") {
        somInput.value = "";
        eurInput.value = "";
      }
    };

    eurInput.oninput = () => {
      somInput.value = (eurInput.value * data.eur).toFixed(2);
      usdInput.value = ((eurInput.value * data.eur) / data.usd).toFixed(2);
      if (eurInput.value === "") {
        somInput.value = "";
        usdInput.value = "";
      }
    };
  };
};

converter();

// // ____.oninput - when the input is changed

// usdInput.oninput = () => {
//   const request = new XMLHttpRequest();
//   request.open("GET", "../data/converter.json");
//   request.setRequestHeader("Content-type", "application/json");
//   request.send();

//   request.onload = () => {
//     const data = JSON.parse(request.response);
//     somInput.value = (usdInput.value * data.usd).toFixed(2); // ().toFixed(2) - means that the number will be rounded to 2 decimal places
//   };
// };

// DRY - Don't repeat yourself
// KISS - Keep it simple stupid
