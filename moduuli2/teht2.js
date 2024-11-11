function collectParticipants() {
    let numParticipants = parseInt(prompt("Enter the number of participants:"));
    let participants = [];

    for (let i = 0; i < numParticipants; i++) {
        let name = prompt(`Enter the name of participant ${i + 1}:`);
        participants.push(name);
    }

    participants.sort();

    let participantsListDiv = document.getElementById("participantsList");
    let ol = document.createElement("ol");

    participants.forEach(name => {
        let li = document.createElement("li");
        li.textContent = name;
        ol.appendChild(li);
    });

    participantsListDiv.innerHTML = "";
    participantsListDiv.appendChild(ol);
}
