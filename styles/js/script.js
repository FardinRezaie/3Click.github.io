// JavaScript to handle overlay and click events
const toggleAsideButton = document.getElementById("toggleAsideButton");
const asideCollapse = document.getElementById("asideCollapse");
const overlay = document.getElementById("overlay");
const mainContent = document.getElementById("mainContent");

// Function to show the aside and overlay
function showAside() {
  asideCollapse.classList.add("show");
  overlay.style.display = "block";
}

// Function to hide the aside and overlay
function hideAside() {
  asideCollapse.classList.remove("show");
  overlay.style.display = "none";
}

// Event listener for the toggle button
toggleAsideButton.addEventListener("click", () => {
  if (asideCollapse.classList.contains("show")) {
    hideAside();
  } else {
    showAside();
  }
});

// Event listener for the overlay
overlay.addEventListener("click", () => {
  hideAside();
});

// Event listener for the main content
mainContent.addEventListener("click", () => {
  if (asideCollapse.classList.contains("show")) {
    hideAside();
  }
});

// Active link in header part
const navuls = document.querySelectorAll(".headeritems");

navuls.forEach((navul) => {
  navul.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    navul.classList.add("active");
  });
});

/*--------------------- Button 1 ----------------------*/
const wrapper = document.querySelector(".citypart"),
  selectBtn = wrapper.querySelector(".select-btn"),
  searchInp = wrapper.querySelector("input"),
  options = wrapper.querySelectorAll(".options li");

function addCountry(selectedCountry) {
  options.forEach((option) => {
    option.classList.remove("selected");
    if (option.innerText === selectedCountry) {
      option.classList.add("selected");
    }
  });
}

function updateName(selectedLi) {
  searchInp.value = "";
  addCountry(selectedLi.innerText);
  wrapper.classList.remove("active");
  selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

options.forEach((option) => {
  option.addEventListener("click", () => updateName(option));
});

searchInp.addEventListener("keyup", () => {
  let searchWord = searchInp.value.toLowerCase();
  options.forEach((option) => {
    if (option.innerText.toLowerCase().startsWith(searchWord)) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
});
selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));
/*-------------------------------------------*/

/*---------------------- Button 2 ---------------------*/
const wrapper2 = document.querySelector(".citypart2"),
  selectBtn2 = wrapper2.querySelector(".select-btn2"),
  searchInp2 = wrapper2.querySelector("input"),
  options2 = wrapper2.querySelectorAll(".options2 li");

function addCountry2(selectedCountry) {
  options2.forEach((option) => {
    option.classList.remove("selected");
    if (option.innerText === selectedCountry) {
      option.classList.add("selected");
    }
  });
}

function updateName2(selectedLi) {
  searchInp2.value = "";
  addCountry2(selectedLi.innerText);
  wrapper2.classList.remove("active");
  selectBtn2.firstElementChild.innerText = selectedLi.innerText;
}

options2.forEach((option) => {
  option.addEventListener("click", () => updateName2(option));
});

searchInp2.addEventListener("keyup", () => {
  let searchWord = searchInp2.value.toLowerCase();
  options2.forEach((option) => {
    if (option.innerText.toLowerCase().startsWith(searchWord)) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
});

selectBtn2.addEventListener("click", () => wrapper2.classList.toggle("active"));
/*-------------------------------------------*/

// Swapp button
document.addEventListener("DOMContentLoaded", function () {
  const swapButton = document.querySelector(".swapbutton");
  const originButton = document.querySelector(".citypart .select-btn");
  const destinationButton = document.querySelector(".citypart2 .select-btn2");

  // Function to swap the selected values
  swapButton.addEventListener("click", function () {
    // Get the current text of the origin and destination buttons
    const originText = originButton.querySelector("span").innerText;
    const destinationText = destinationButton.querySelector("span").innerText;

    // Swap the text
    originButton.querySelector("span").innerText = destinationText;
    destinationButton.querySelector("span").innerText = originText;
  });

  // Add event listeners to the dropdown items to update the button text when a city is selected
  document
    .querySelectorAll(".citypart .nav-item.dropdown-item")
    .forEach((item) => {
      item.addEventListener("click", function () {
        const selectedCity = this.innerText;
        const button = originButton.querySelector("span");
        button.innerText = selectedCity;
      });
    });

  document
    .querySelectorAll(".citypart2 .nav-item.dropdown-item")
    .forEach((item) => {
      item.addEventListener("click", function () {
        const selectedCity = this.innerText;
        const button = destinationButton.querySelector("span");
        button.innerText = selectedCity;
      });
    });
});
/*-------------------------------------------*/

const rowDiv = document.querySelector(".row");
const dropdownHeader = document.querySelector(".dropdown-header");

rowDiv.addEventListener("scroll", () => {
  if (rowDiv.scrollTop > 0) {
    dropdownHeader.style.marginTop = "0";
  } else {
    dropdownHeader.style.marginTop = "5px";
  }
});

/*-------------------------------------------*/

document.querySelectorAll(".divradio").forEach((divRadio) => {
  divRadio.addEventListener("click", function () {
    const radioInput = this.previousElementSibling; // Get the input element
    radioInput.checked = true; // Check the input
  });
});

/*-------------------------------------------*/

// Part 1: Update passengertype span when a label is clicked
const labels = document.querySelectorAll(".form-check-label");
const passengerTypeSpan = document.querySelector(".passengertype span");

labels.forEach((label) => {
  label.addEventListener("click", function () {
    const selectedText = this.querySelector("span + span").textContent;
    passengerTypeSpan.textContent = selectedText;
  });
});

// Part 2: Update passenger count and total
const passengerNumContainers = document.querySelectorAll(".passenger_num");
const counterpartSpan = document.querySelector(".counterpart .counterpart-num");

function updateTotalPassengers() {
  let total = 0;
  passengerNumContainers.forEach((container) => {
    const count = parseInt(
      container.querySelector("span:nth-child(2)").textContent
    );
    total += count;
  });
  counterpartSpan.textContent = total;
}

passengerNumContainers.forEach((container) => {
  const plusButton = container.querySelector("span:nth-child(1)");
  const minusButton = container.querySelector("span:nth-child(3)");
  const countSpan = container.querySelector("span:nth-child(2)");

  plusButton.addEventListener("click", function () {
    let count = parseInt(countSpan.textContent);
    count++;
    countSpan.textContent = count;
    updateTotalPassengers();
  });

  minusButton.addEventListener("click", function () {
    let count = parseInt(countSpan.textContent);
    if (count > 0) {
      count--;
      countSpan.textContent = count;
      updateTotalPassengers();
    }
  });
});

/*-------------------------------------------*/

// Get the select3 button
// Get the select3 button
const select3Button = document.querySelector("#select3 button");

// Get the passenger section
const passengerSection = document.querySelector(".passenger");

// Get the passenger-button
const passengerButton = document.querySelector(".passenger-button button");

// Show the passenger section when select3 button is clicked
select3Button.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent the click event from bubbling up to the document
  passengerSection.classList.add("visible");
});

// Hide the passenger section when passenger-button is clicked
passengerButton.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent the click event from bubbling up to the document
  passengerSection.classList.remove("visible");
});

// Hide the passenger section when clicking outside
document.addEventListener("click", function (event) {
  // Check if the click happened outside the passenger section
  if (
    !passengerSection.contains(event.target) &&
    !select3Button.contains(event.target)
  ) {
    passengerSection.classList.remove("visible");
  }
});

/*-------------------------------------------*/

// Get all radio buttons and the target element
const radioButtons = document.querySelectorAll(
  '.formsection .oneway input[type="radio"]'
);
const targetElement = document.querySelector(
  ".formsection div.selection_part #select2 button div:last-child"
);

// Add event listeners to all radio buttons
radioButtons.forEach((radio) => {
  radio.addEventListener("change", function () {
    // Check if the last radio button is checked
    if (
      document.querySelector(
        '.formsection .oneway div:last-child input[type="radio"]:checked'
      )
    ) {
      targetElement.style.opacity = "1";
    } else {
      targetElement.style.opacity = "0"; // Apply display: none when unchecked
    }
  });
});

/*-------------------------------------------*/

var swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 8,
  loop: false,
  navigation: {
    nextEl: ".swiperchevron-left",
    prevEl: ".swiperchevron-right",
  },
  on: {
    init: function () {
      this.navigation.prevEl.classList.add("swiper-button-disabled");
    },
    reachBeginning: function () {
      this.navigation.prevEl.classList.add("swiper-button-disabled");
    },
    reachEnd: function () {
      this.navigation.nextEl.classList.add("swiper-button-disabled");
    },
    fromEdge: function () {
      this.navigation.prevEl.classList.remove("swiper-button-disabled");
      this.navigation.nextEl.classList.remove("swiper-button-disabled");
    },
  },
});

/*-------------------------------------------*/

jalaliDatepicker.startWatch({
  minDate: "attr",
  maxDate: "attr",
  time: true,
});
