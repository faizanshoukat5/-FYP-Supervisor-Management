// Supervisor Data Array
const supervisors = [
    { id: 1, name: "Dr. Ali Khan", researchDomain: "AI & Machine Learning", availableSlots: 3, contactInfo: "ali.khan@example.com" },
    { id: 2, name: "Dr. Sarah Ahmed", researchDomain: "Cybersecurity", availableSlots: 0, contactInfo: "sarah.ahmed@example.com" },
    { id: 3, name: "Dr. Usman Raza", researchDomain: "Blockchain", availableSlots: 2, contactInfo: "usman.raza@example.com" },
    { id: 4, name: "Dr. Hina Tariq", researchDomain: "Computer Vision", availableSlots: 1, contactInfo: "hina.tariq@example.com" },
    { id: 5, name: "Dr. Faisal Malik", researchDomain: "Software Engineering", availableSlots: 4, contactInfo: "faisal.malik@example.com" },
    { id: 6, name: "Dr. Ayesha Siddiqui", researchDomain: "AI & Machine Learning", availableSlots: 0, contactInfo: "ayesha.siddiqui@example.com" },
    { id: 7, name: "Dr. Kamran Iqbal", researchDomain: "Cloud Computing", availableSlots: 2, contactInfo: "kamran.iqbal@example.com" },
    { id: 8, name: "Dr. Zeeshan Ahmed", researchDomain: "Data Science", availableSlots: 5, contactInfo: "zeeshan.ahmed@example.com" },
    { id: 9, name: "Dr. Nadia Shah", researchDomain: "Cybersecurity", availableSlots: 3, contactInfo: "nadia.shah@example.com" },
    { id: 10, name: "Dr. Waqas Anwar", researchDomain: "AI & Machine Learning", availableSlots: 1, contactInfo: "waqas.anwar@example.com" }
];

// Bookmarked Supervisors
let bookmarkedSupervisors = [];

// Function to Display Supervisors
function displaySupervisors(supervisorList = supervisors) {
    const listContainer = document.getElementById("supervisorList");
    listContainer.innerHTML = "";

    supervisorList.forEach(supervisor => {
        const supervisorCard = document.createElement("div");
        supervisorCard.style.opacity = "0";
        setTimeout(() => supervisorCard.style.opacity = "1", 100); // Fade-in effect
        
        supervisorCard.className = "bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500 transition-transform transform hover:scale-105";

        supervisorCard.innerHTML = `
            <h2 class="text-xl font-semibold">${supervisor.name}</h2>
            <p><strong>Domain:</strong> ${supervisor.researchDomain}</p>
            <p><strong>Available Slots:</strong> ${supervisor.availableSlots}</p>
            <p><strong>Contact:</strong> ${supervisor.contactInfo}</p>
           <button onclick="bookmarkSupervisor(${supervisor.id})"
    class="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300">
    📌 Bookmark
</button>

        `;
        listContainer.appendChild(supervisorCard);
    });
}

// Function to Filter Supervisors
function filterSupervisors() {
    const searchQuery = document.getElementById("searchDomain").value.toLowerCase();
    const filteredList = supervisors.filter(supervisor => 
        supervisor.researchDomain.toLowerCase().includes(searchQuery) && supervisor.availableSlots > 0
    );
    displaySupervisors(filteredList);
}

// Function to Bookmark a Supervisor
function bookmarkSupervisor(id) {
    const supervisor = supervisors.find(s => s.id === id);
    if (supervisor && !bookmarkedSupervisors.includes(supervisor)) {
        bookmarkedSupervisors.push(supervisor);
        alert(`${supervisor.name} has been bookmarked!`);
    } else {
        alert("Supervisor already bookmarked.");
    }
}

// Display Supervisors on Page Load
document.addEventListener("DOMContentLoaded", () => {
    displaySupervisors();
});

// Function to Sort Supervisors
function sortSupervisors(order) {
    let sortedSupervisors = [...supervisors]; 

    sortedSupervisors.sort((a, b) => {
        return order === "asc" ? a.availableSlots - b.availableSlots : b.availableSlots - a.availableSlots;
    });

    displaySupervisors(sortedSupervisors);
}
