// Function to handle dropdown selection and display relevant script
function handleSelection() {
    var dropdown = document.getElementById("myDropdown");
    var selectedValue = dropdown.value;

    var spans = document.getElementsByClassName("script-type");

    // Hide all script sections
    for (var i = 0; i < spans.length; i++) {
        spans[i].style.display = "none";
    }

    // Show the selected script section
    var selectedSpans = document.getElementsByClassName(selectedValue);
    for (var j = 0; j < selectedSpans.length; j++) {
        selectedSpans[j].style.display = "inline";
    }
}

// Function to toggle between single and couple display settings
function togglesingle() {
    var singleCheckbox = document.getElementById("singleCheckbox");
    var singleSpans = document.getElementsByClassName("single");
    var coupleSpans = document.getElementsByClassName("couple");

    if (singleCheckbox.checked) {
        document.getElementById('spouseInput').disabled = true;
        // Show single spans and hide couple spans
        for (var i = 0; i < singleSpans.length; i++) {
            singleSpans[i].style.display = "inline";
        }
        for (var j = 0; j < coupleSpans.length; j++) {
            coupleSpans[j].style.display = "none";
        }
    } else {
        document.getElementById('spouseInput').disabled = false;
        // Show couple spans and hide single spans
        for (var k = 0; k < singleSpans.length; k++) {
            singleSpans[k].style.display = "none";
        }
        for (var l = 0; l < coupleSpans.length; l++) {
            coupleSpans[l].style.display = "inline";
        }
    }
}

// Function to clear placeholder text on focus
function clearPlaceholder(inputElement) {
    inputElement.setAttribute('data-placeholder', inputElement.getAttribute('placeholder'));
    inputElement.setAttribute('placeholder', '');
}

// Function to restore placeholder text on blur
function restorePlaceholder(inputElement) {
    inputElement.setAttribute('placeholder', inputElement.getAttribute('data-placeholder'));
}

// Function to validate input, allowing only alphabetic characters
function validateInput(input) {
    input.value = input.value.replace(/[^a-zA-Z\s]/g, '');
}

// Update display based on text inputs
function updateDisplay(inputText, displayText) {
    document.querySelectorAll(displayText).forEach(element => {
        element.textContent = inputText;
    });
}

// Load saved agent name from local storage
window.addEventListener('load', () => {
    const savedAgentName = localStorage.getItem('savedAgentName');
    if (savedAgentName) {
        const agentNameInput = document.getElementById('agentName');
        agentNameInput.value = savedAgentName;
        updateDisplay(savedAgentName, '.agentDisplay');
    }
});

// Save the agent name to local storage when input field loses focus
document.getElementById('agentName').addEventListener('blur', () => {
    const agentNameInput = document.getElementById('agentName');
    const newAgentName = agentNameInput.value;
    localStorage.setItem('savedAgentName', newAgentName);
});

// Event listeners to update displayed text based on user input
document.getElementById('memberInput').addEventListener('input', function() {
    var inputText = document.getElementById('memberInput').value || "Member";
    updateDisplay(inputText, '.memberDisplay');
});

document.getElementById('spouseInput').addEventListener('input', function() {
    var inputText = document.getElementById('spouseInput').value || "Spouse";
    updateDisplay(inputText, '.spouseDisplay');
});

document.getElementById('agentName').addEventListener('input', function() {
    var inputText = document.getElementById('agentName').value || "Agent";
    updateDisplay(inputText, '.agentDisplay');
});

document.getElementById('groupInput').addEventListener('input', function() {
    var inputText = document.getElementById('groupInput').value || "Group";
    updateDisplay(inputText, '.groupDisplay');
});

document.getElementById('sponsorInput').addEventListener('input', function() {
    var inputText = document.getElementById('sponsorInput').value || "Sponsor";
    updateDisplay(inputText, '.sponsorDisplay');
});

// Function to toggle visibility based on user interactions
function toggleVisibility(className, hide, show) {
    const elements = document.getElementsByClassName(className);
    const button = document.getElementById('toggleButton');
    
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].style.display === 'none') {
            elements[i].style.display = 'grid';
            button.textContent = hide;
        } else {
            elements[i].style.display = 'none';
            button.textContent = show;
        }
    }
}

// Function to switch between instant and set appointment display
function toggleInstant() {
    var toggleInstantButton = document.getElementById('toggleInstant');
    const instantElements = document.getElementsByClassName('instant');
    const setElements = document.getElementsByClassName('set');

    if (toggleInstantButton.textContent === 'SWITCH TO INSTANT IF HOME') {
        toggleInstantButton.textContent = 'SWITCH BACK TO SET APPT';

        for (let i = 0; i < instantElements.length; i++) {
            instantElements[i].style.display = 'inline';
        }
        for (let j = 0; j < setElements.length; j++) {
            setElements[j].style.display = 'none';
        }
    } else {
        toggleInstantButton.textContent = 'SWITCH TO INSTANT IF HOME';

        for (let i = 0; i < setElements.length; i++) {
            setElements[i].style.display = 'inline';
        }
        for (let j = 0; j < instantElements.length; j++) {
            instantElements[j].style.display = 'none';
        }
    }
}

// Initialize the page to display the selected dropdown value's script
handleSelection();
