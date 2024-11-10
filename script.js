// script.ts
document.addEventListener('DOMContentLoaded', function () {
    // Function to add a new Education entry
    function addEducation() {
        var container = document.getElementById('educationContainer');
        var newEntry = document.createElement('div');
        newEntry.classList.add('education-entry');
        newEntry.innerHTML = "\n            <label for=\"education\">Education:</label>\n            <textarea name=\"education\" class=\"textarea\" required></textarea><br>\n        ";
        container.appendChild(newEntry);
    }
    // Function to add a new Work Experience entry
    function addExperience() {
        var container = document.getElementById('experienceContainer');
        var newEntry = document.createElement('div');
        newEntry.classList.add('experience-entry');
        newEntry.innerHTML = "\n            <label for=\"experience\">Work Experience:</label>\n            <textarea name=\"experience\" class=\"textarea\" required></textarea><br>\n        ";
        container.appendChild(newEntry);
    }
    // Function to add a new Skill entry
    function addSkill() {
        var container = document.getElementById('skillsContainer');
        var newEntry = document.createElement('div');
        newEntry.classList.add('skills-entry');
        newEntry.innerHTML = "\n            <label for=\"skills\">Skills:</label>\n            <textarea name=\"skills\" class=\"textarea\" required></textarea><br>\n        ";
        container.appendChild(newEntry);
    }
    // Function to generate the resume
    function generateResume() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var educationEntries = document.querySelectorAll('.education-entry textarea');
        var education = '';
        educationEntries.forEach(function (entry) {
            education += "<p>".concat(entry.value, "</p>");
        });
        var experienceEntries = document.querySelectorAll('.experience-entry textarea');
        var experience = '';
        experienceEntries.forEach(function (entry) {
            experience += "<p>".concat(entry.value, "</p>");
        });
        var skillsEntries = document.querySelectorAll('.skills-entry textarea');
        var skills = '';
        skillsEntries.forEach(function (entry) {
            skills += "<p>".concat(entry.value, "</p>");
        });
        var resumeOutput = "\n            <h2>".concat(name, "</h2>\n            <p>Email: ").concat(email, "</p>\n            <h3>Education</h3>\n            ").concat(education, "\n            <h3>Work Experience</h3>\n            ").concat(experience, "\n            <h3>Skills</h3>\n            ").concat(skills, "\n        ");
        document.getElementById('resumeOutput').innerHTML = resumeOutput;
    }
    // Ensure these functions are globally accessible
    window.addEducation = addEducation;
    window.addExperience = addExperience;
    window.addSkill = addSkill;
    window.generateResume = generateResume;
});
