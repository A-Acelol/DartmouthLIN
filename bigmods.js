// Make text editable on click
document.querySelectorAll(".editable").forEach(el => {
    el.addEventListener("click", () => {
        const currentText = el.innerText;
        const newText = prompt("Enter new text:", currentText);
        if (newText !== null && newText.trim() !== "") {
            el.innerText = newText;
        }
    });
});

// Page navigation
function showPage(pageId) {
    document.querySelectorAll(".page").forEach(sec => {
        sec.classList.remove("active");
    });
    document.getElementById(pageId).classList.add("active");
}

// Show/hide leader descriptions
function showDescription(id) {
    var desc = document.getElementById(id);
    if (desc.style.display === "none" || desc.style.display === "") {
        desc.style.display = "block";
    } else {
        desc.style.display = "none";
    }
}

// Dropdown toggle for features
function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    if (dropdown) {
        dropdown.classList.toggle('open');
    }
}

// Set background images from data-bg attribute
document.querySelectorAll('.home-section').forEach(section => {
    const bg = section.getAttribute('data-bg');
    if (bg) {
        section.style.setProperty('--bg-img', `url(${bg})`);
        section.style.backgroundImage = `url(${bg})`;
    }
});

// Fade-in on scroll
function revealSections() {
    document.querySelectorAll('.home-section').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);