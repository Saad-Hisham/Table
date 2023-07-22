const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","AA","AB","AC","AD"];

// Define an array of numbers
const numbers = ["Platform", "Blog Website", "Contract Mngt", "CRM", "Dashboard Metric Tracking", "Database Mngt System", "Document Storage",
 "Email Mrkt", "integratlon Api interface", "LMS Student Portal", "Platform", "Blog Website", "Contract Mngt", "CRM", "Dashboard Metric Tracking", "Database Mngt System", "Document Storage",
 "Email Mrkt", "integratlon Api interface", "LMS Student Portal", "Platform", "Blog Website", "Contract Mngt", "CRM", "Dashboard Metric Tracking", "Database Mngt System", "Trustplot",
 "Capterra", "Tustraduis", "Monthly Total Cost (Plan)"];
 
// Define an array of images
const images = ["4436481.png", "4436481.png", "4436481.png","4436481.png", "4436481.png", "4436481.png", "4436481.png", "4436481.png", "4436481.png", 
 "4436481.png", "4436481.png", "4436481.png", "4436481.png", "4436481.png", "4436481.png", "4436481.png", "4436481.png", "4436481.png","4436481.png",
 "4436481.png", "4436481.png","4436481.png", "4436481.png", "4436481.png", "4436481.png", "4436481.png", "stars.jpg", "stars.jpg", "stars.jpg", "image-30.jpg"];

// Get a reference to the <div> element
const myDiv = document.getElementById("myDiv");

// Loop 3 times to create 3 rows
for (let i = 1; i <= 3; i++) {
  // Create a new <div> element for the row
  const row = document.createElement("div");

  // Set the display property of the row to "flex"
  row.style.display = "flex";

  // Choose the array to use based on the row number
  const arr = i === 1 ? letters : i === 3 ? images : numbers;

  // Loop 30 times to create 30 columns for each row
  for (let j = 0; j < 30; j++) {
    // Create a new <div> element for the column
    const col = document.createElement("div");

    // If the current value is "LMS Student Portal", split the string into two parts and wrap the LMS part with a span with a line break after it
    if (arr[j] === "LMS Student Portal") {
      const [lms, studentPortal] = arr[j].split(" ");
      col.innerHTML = `${"LMS/"} <br> ${"Student Portal"}`;
    } else {
      // If the current row is the third row, add an image to the column
      if (i === 3) {
        if (j === 29) {
          col.textContent = "124$";
        } else {
          const img = document.createElement("img");
          img.src = images[j];
          col.appendChild(img);
        }
        if (j >= 26) {
          col.classList.add("special");
        }
      } else {
        col.textContent = arr[j];
      }
    }

    // Add the "flex: 1" style to the column to make all columns in the row the same width
    col.style.flex = "1";

    // Add a class to the last 4 columns
    if (j >= 26) {
      col.classList.add("wide-col");
    }

    // Add the column to the current row
    row.appendChild(col);
  }

  // Add the row to the main <div> element
  myDiv.appendChild(row);
}