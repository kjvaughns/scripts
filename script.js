function handleSelection() {
  const dropdown = document.getElementById("myDropdown");
  const selectedValue = dropdown.value;
  const spans = document.getElementsByClassName("script-type");

  for (let i = 0; i < spans.length; i++) {
    spans[i].style.display = "none";
  }

  const selectedSpans = document.getElementsByClassName(selectedValue);
  for (let j = 0; j < selectedSpans.length; j++) {
    selectedSpans[j].style.display = "inline";
  }
}

function togglesingle() {
  const singleCheckbox = document.getElementById("singleCheckbox");
  const singleSpans = document.getElementsByClassName("single");
  const coupleSpans = document.getElementsByClassName("couple");

  document.getElementById('spouseInput').disabled = singleCheckbox.checked;
  for (let i = 0; i < singleSpans.length; i++) {
    singleSpans[i].style.display = singleCheckbox.checked ? "inline" : "none";
  }
  for (let j = 0; j < coupleSpans.length; j++) {
    coupleSpans[j].style.display = singleCheckbox.checked ? "none" : "inline";
  }
}

function toggleUnion() {
  const sponsorgroupInput = document.getElementById("sponsorgroupInput");
  const nonunionSpans = document.getElementsByClassName("nonunion");
  const unionSpans = document.getElementsByClassName("union");

  const showUnion = sponsorgroupInput.value !== "";
  for (let i = 0; i < unionSpans.length; i++) {
    unionSpans[i].style.display = showUnion ? "inline" : "none";
  }
  for (let j = 0; j < nonunionSpans.length; j++) {
    nonunionSpans[j].style.display = showUnion ? "none" : "inline";
  }
}

function validateInput(input) {
  input.value = input.value.replace(/[^a-zA-Z]/g, '');
}

// Save and load agent name
const agentNameInput = document.getElementById('agentName');
window.addEventListener('load', () => {
  const savedAgentName = localStorage.getItem('savedAgentName');
  if (savedAgentName) {
    agentNameInput.value = savedAgentName;
    updateDisplay(savedAgentName, '.agentDisplay');
  }
});

agentNameInput.addEventListener('blur', () => {
  localStorage.setItem('savedAgentName', agentNameInput.value);
});

// Event listeners for inputs
function updateDisplay(inputText, displayText) {
  document.querySelectorAll(displayText).forEach(element => {
    element.textContent = inputText;
  });
}

// Listen for input events
document.getElementById('memberInput').addEventListener('input', function() {
  updateDisplay(this.value || "Member", '.memberDisplay');
});

document.getElementById('spouseInput').addEventListener('input', function() {
  updateDisplay(this.value || "Spouse", '.spouseDisplay');
});

document.getElementById('groupInput').addEventListener('input', function() {
  updateDisplay(this.value || "Group", '.groupDisplay');
});

document.getElementById('sponsorInput').addEventListener('input', function() {
  updateDisplay(this.value || "Sponsor", '.sponsorDisplay');
});

document.getElementById('sponsorgroupInput').addEventListener('input', function() {
  updateDisplay(this.value || "Sponsors Group", '.sponsorgroupDisplay');
});

handleSelection();
