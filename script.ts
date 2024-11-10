// script.ts
document.addEventListener('DOMContentLoaded', function() {
    // Function to add a new Education entry
    function addEducation() {
        const container = document.getElementById('educationContainer') as HTMLElement;
        const newEntry = document.createElement('div');
        newEntry.classList.add('education-entry');
        newEntry.innerHTML = `
            <label for="education">Education:</label>
            <textarea name="education" class="textarea" required></textarea><br>
        `;
        container.appendChild(newEntry);
    }

    // Function to add a new Work Experience entry
    function addExperience() {
        const container = document.getElementById('experienceContainer') as HTMLElement;
        const newEntry = document.createElement('div');
        newEntry.classList.add('experience-entry');
        newEntry.innerHTML = `
            <label for="experience">Work Experience:</label>
            <textarea name="experience" class="textarea" required></textarea><br>
        `;
        container.appendChild(newEntry);
    }

    // Function to add a new Skill entry
    function addSkill() {
        const container = document.getElementById('skillsContainer') as HTMLElement;
        const newEntry = document.createElement('div');
        newEntry.classList.add('skills-entry');
        newEntry.innerHTML = `
            <label for="skills">Skills:</label>
            <textarea name="skills" class="textarea" required></textarea><br>
        `;
        container.appendChild(newEntry);
    }

    // Function to generate the resume
    function generateResume() {
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;

        const educationEntries = document.querySelectorAll('.education-entry textarea');
        let education = '';
        educationEntries.forEach(entry => {
            education += `<p>${(entry as HTMLTextAreaElement).value}</p>`;
        });

        const experienceEntries = document.querySelectorAll('.experience-entry textarea');
        let experience = '';
        experienceEntries.forEach(entry => {
            experience += `<p>${(entry as HTMLTextAreaElement).value}</p>`;
        });

        const skillsEntries = document.querySelectorAll('.skills-entry textarea');
        let skills = '';
        skillsEntries.forEach(entry => {
            skills += `<p>${(entry as HTMLTextAreaElement).value}</p>`;
        });

        const resumeOutput = `
            <h2>${name}</h2>
            <p>Email: ${email}</p>
            <h3>Education</h3>
            ${education}
            <h3>Work Experience</h3>
            ${experience}
            <h3>Skills</h3>
            ${skills}
        `;

        (document.getElementById('resumeOutput') as HTMLDivElement).innerHTML = resumeOutput;
    }

    // Ensure these functions are globally accessible
    (window as any).addEducation = addEducation;
    (window as any).addExperience = addExperience;
    (window as any).addSkill = addSkill;
    (window as any).generateResume = generateResume;
});
