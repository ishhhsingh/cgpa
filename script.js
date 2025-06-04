function addSubject() {
  const container = document.getElementById("subjectInputs");
  const div = document.createElement("div");
  div.className = "subject";
  div.innerHTML = `
    <input type="number" step="0.01" placeholder="Enter GPA" class="gpa-input" required />
    <input type="number" placeholder="Enter Credits" class="credit-input" required />
  `;
  container.appendChild(div);
}

document.getElementById("cgpaForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const gpas = document.querySelectorAll(".gpa-input");
  const credits = document.querySelectorAll(".credit-input");

  let totalPoints = 0;
  let totalCredits = 0;

  for (let i = 0; i < gpas.length; i++) {
    const gpa = parseFloat(gpas[i].value);
    const credit = parseFloat(credits[i].value);
    totalPoints += gpa * credit;
    totalCredits += credit;
  }

  const cgpa = (totalPoints / totalCredits).toFixed(2);
  document.getElementById("result").innerText = `Your CGPA is: ${cgpa}`;
});
