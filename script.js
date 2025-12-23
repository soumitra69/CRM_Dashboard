// Toggle submenus when menu items are clicked
document.querySelectorAll(".menu-item").forEach((item) => {
  const header = item.querySelector("div");

  header.addEventListener("click", function () {
    // Close all other menu items
    document.querySelectorAll(".menu-item").forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    // Toggle current menu item
    item.classList.toggle("active");
  });
});

// Handle submenu item clicks
document.querySelectorAll(".submenu li").forEach((subItem) => {
  subItem.addEventListener("click", function (e) {
    e.stopPropagation();

    // Remove active class from all submenu items
    document.querySelectorAll(".submenu li").forEach((item) => {
      item.classList.remove("active");
    });

    // Add active class to clicked submenu item
    this.classList.add("active");
  });
});


function updateDateTime() {
  const now = new Date();

  const days = [
    "Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"
  ];

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const dayName = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Leading zero
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  function getSuffix(d) {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  }

  document.getElementById("dateText").innerHTML =
    `It's ${dayName}, ${date}${getSuffix(date)} ${month} ${year}
       <br>
       Time: ${hours}:${minutes}:${seconds}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);


// Example dynamic notification count
let notifications = 3;
let emails = 5;

document.getElementById("notiCount").innerText = notifications;
document.getElementById("mailCount").innerText = emails;

// Optional: increase on click
document.querySelectorAll(".noti")[0].addEventListener("click", () => {
  notifications++;
  document.getElementById("notiCount").innerText = notifications;
});

document.querySelectorAll(".noti")[1].addEventListener("click", () => {
  emails++;
  document.getElementById("mailCount").innerText = emails;
});



