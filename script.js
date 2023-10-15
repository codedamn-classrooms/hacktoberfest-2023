document.getElementById("date").innerText = new Date().toLocaleDateString(
	"default",
	{
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	}
);

function createHabit() {
	var title = document.getElementById("habit-title").value;
	var emoji = document.getElementById("habit-emoji").value;
	var color = document.getElementById("habit-color").value;

	// Form validation
	const regex = /^\p{Emoji}$/u;
	if (!title || !emoji.match(regex)) {
		alert("Please enter valid habit details.");
		return;
	}

	var habitDiv = document.createElement("div");
	habitDiv.className = "habit";
	habitDiv.style.backgroundColor = color;
	habitDiv.innerHTML = `
                <h3>${emoji} ${title}</h3>
                <span>0</span>
                <button onclick="markDone(event)">Done for the day</button>
                <button onclick="showLogs(event)">i</button>
            `;
	document.getElementById("habit-container").appendChild(habitDiv);

	// Save habit data to local storage
	var habits = JSON.parse(localStorage.getItem("habits")) || [];
	habits.push({ title, emoji, color, count: 0, logs: [] });
	localStorage.setItem("habits", JSON.stringify(habits));

	updateDailyProgress();
}

// function incrementCounter() {
// 	var counters = document.querySelectorAll(".habit span");
// 	for (var i = 0; i < counters.length; i++) {
// 		var currentCount = parseInt(counters[i].innerText, 10);
// 		counters[i].innerText = currentCount + 1;

// 		// Update habit data in local storage
// 		var habits = JSON.parse(localStorage.getItem("habits"));
// 		habits[i].count++;
// 		localStorage.setItem("habits", JSON.stringify(habits));
// 	}
// }

function showLogs(event) {
	var habitDiv = event.target.closest(".habit");
	var index = Array.from(habitDiv.parentElement.children).indexOf(habitDiv);
	var habits = JSON.parse(localStorage.getItem("habits"));
	var logList = document.getElementById("log-list");
	logList.innerHTML = "";
	habits[index].logs.forEach((log) => {
		var logItem = document.createElement("li");
		logItem.innerText = `${log.type} - ${new Date(
			log.timestamp
		).toLocaleString()}`;
		logList.appendChild(logItem);
	});
	document.getElementById("log-dialog").showModal();
}

function markDone(event) {
	console.log({ markDoneEvent: event });
	var habitDiv = event.target.closest(".habit");
	habitDiv.style.display = "none"; // Hide the habit div when marked as done
	var index = Array.from(habitDiv.parentElement.children).indexOf(habitDiv);
	var habits = JSON.parse(localStorage.getItem("habits"));
	var timestamp = new Date().toISOString();
	habits.forEach((habit) => {
		// Bug: marks all habits as done
		habit.logs.push({ type: "done", timestamp });
	});
	localStorage.setItem("habits", JSON.stringify(habits));
	updateDailyProgress();
}

function updateDailyProgress() {
	var habits = JSON.parse(localStorage.getItem("habits")) || [];
	var habitsMet = habits.filter((habit) =>
		habit.logs.some((log) => {
			var logDate = new Date(log.timestamp).toLocaleDateString();
			var today = new Date().toLocaleDateString();
			return log.type === "done" && logDate === today;
		})
	).length;
	document.getElementById("habits-met").innerText = habitsMet;
	document.getElementById("total-habits").innerText = habits.length;
	document.getElementById("daily-progress").style.display =
		habits.length > 0 ? "block" : "none";
}

// Call this function to initialize daily progress on page load
updateDailyProgress();
