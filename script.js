// Function to update the display
function updateDisplay(inputText, displayText) {
    document.querySelectorAll(displayText).forEach(element => {
        element.textContent = inputText;
    });
}

// Save the value to local storage when the input field loses focus (onblur)
document.getElementById('agentName').addEventListener('blur', () => {
    const newAgentName = document.getElementById('agentName').value;
    localStorage.setItem('savedAgentName', newAgentName);
});

// Load the saved value from local storage when the page loads
window.addEventListener('load', () => {
    const savedAgentName = localStorage.getItem('savedAgentName');
    if (savedAgentName) {
        document.getElementById('agentName').value = savedAgentName;
    }
});

function handleSelection() {
    var dropdown = document.getElementById("myDropdown");
    var selectedValue = dropdown.value;
    var spans = document.getElementsByClassName("script-type");

    for (var i = 0; i < spans.length; i++) {
        spans[i].style.display = "none";
    }

    var selectedSpans = document.getElementsByClassName(selectedValue);
    for (var j = 0; j < selectedSpans.length; j++) {
        selectedSpans[j].style.display = "inline";
    }
}

function toggleInstant() {
    var toggleInstantButton = document.getElementById('toggleInstant');
    const instantElements = document.getElementsByClassName('instant');
    const setElements = document.getElementsByClassName('set');

    if (toggleInstantButton.textContent === 'SWITCH TO INSTANT IF HOME') {
        toggleInstantButton.textContent = 'SWITCH BACK TO SET APPT';
        Array.from(instantElements).forEach(element => element.style.display = 'inline');
        Array.from(setElements).forEach(element => element.style.display = 'none');
    } else {
        toggleInstantButton.textContent = 'SWITCH TO INSTANT IF HOME';
        Array.from(setElements).forEach(element => element.style.display = 'inline');
        Array.from(instantElements).forEach(element => element.style.display = 'none');
    }
}
