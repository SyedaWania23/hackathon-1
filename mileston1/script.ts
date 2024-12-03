

// Wait for the DOM to be fully loaded before accessing elements
document.addEventListener("DOMContentLoaded", () => {
    // Get the button and the skills section
    const toggleButton = document.getElementById("toggle-skills") as HTMLButtonElement;
    const skills = document.getElementById("skills") as HTMLElement;

    // Check if both the elements exist
    if (toggleButton && skills) {
        // Initially hide the skills section if it's not hidden
        skills.style.display = skills.style.display || "block"; // Set it to "block" by default if no inline style is set

        // Add the event listener to toggle the skills visibility
        toggleButton.addEventListener("click", () => {
            if (skills.style.display === "none") {
                skills.style.display = "block";
                toggleButton.textContent = "Hide Skills Section";
            } else {
                skills.style.display = "none";
                toggleButton.textContent = "Show Skills Section";
            }
        });
    }
});
