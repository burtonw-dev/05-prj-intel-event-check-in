const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

let count = 0;
const maxCount = 50;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;
  const totalCount = document.getElementById("attendeeCount");
  console.log(name, teamName);

  count++;
  totalCount.textContent = parseInt(totalCount.textContent) + 1;
  console.log("Total check-ins: ", count);

  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log(`Progress: ${percentage}`);
  document.getElementById("progressBar").style.width = percentage;

  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;
  const attendee = document.createElement("li");
  attendee.textContent = name;
  document.getElementById(team + "Attendees").appendChild(attendee);

  const message = `🎉 Welcome, ${name} from ${teamName}`;
  console.log(message);
  const greeting = document.getElementById("greeting");
  greeting.textContent = message;
  greeting.className = "success-message";
  greeting.style.display = "block";
  form.reset();
});
