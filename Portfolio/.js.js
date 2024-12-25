let currentStep = 1;

function updateProgress(step) {
    const steps = document.querySelectorAll('.step');
    steps.forEach((s, index) => {
        if (index < step) {
            s.style.background = 'green'; // Completed steps
        } else if (index === step) {
            s.style.background = 'blue'; // Current step
        } else {
            s.style.background = '#ccc'; // Upcoming steps
        }
    });
}

// Call this function to update the progress
updateProgress(currentStep);

