// js/courses.js

// Fetch courses dynamically from JSON
fetch("courses.json")
  .then(response => response.json())
  .then(courses => {
    const container = document.getElementById("courseContainer");

    // Render all courses
    container.innerHTML = courses.map(course => `
      <div class="feature-card" data-title="${course.title}">
        <i class="icon">${course.icon}</i>
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <p><strong>Duration:</strong> ${course.duration}</p>
        <p><strong>Level:</strong> ${course.level}</p>
        <button class="btn-primary enroll-btn" style="margin-top:1rem;">Enroll</button>
      </div>
    `).join("");

    // Handle enrollments
    document.querySelectorAll(".enroll-btn").forEach(btn => {
      btn.addEventListener("click", e => {
        const courseTitle = e.target.closest(".feature-card").dataset.title;

        let enrolled = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
        if (enrolled.includes(courseTitle)) {
          alert(`You are already enrolled in ${courseTitle}.`);
          return;
        }

        enrolled.push(courseTitle);
        localStorage.setItem("enrolledCourses", JSON.stringify(enrolled));
        alert(`Successfully enrolled in ${courseTitle}!`);
      });
    });

    // Course search filter
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      document.querySelectorAll(".feature-card").forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = title.includes(query) ? "block" : "none";
      });
    });
  })
  .catch(err => console.error("Error loading courses:", err));
