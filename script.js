// Course Data
const courses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    description: "Learn HTML, CSS, and JavaScript basics.",
    lessons: ["HTML Basics", "CSS Styling", "JavaScript Fundamentals"],
    completed: false
  },
  {
    id: 2,
    title: "Python for Beginners",
    description: "Get started with Python programming.",
    lessons: ["Syntax & Variables", "Loops & Conditions", "Functions & Modules"],
    completed: false
  },
  {
    id: 3,
    title: "Data Structures in C++",
    description: "Understand arrays, linked lists, stacks, and queues.",
    lessons: ["Arrays", "Linked Lists", "Stacks & Queues"],
    completed: false
  }
];

const content = document.getElementById("content");

function renderHome() {
  content.innerHTML = `
    <h2>Available Courses</h2>
    <div class="course-list">
      ${courses.map(course => `
        <div class="course-card" onclick="viewCourse(${course.id})">
          <h3>${course.title}</h3>
          <p>${course.description}</p>
          <p><strong>Status:</strong> ${course.completed ? "✅ Completed" : "⏳ In Progress"}</p>
        </div>
      `).join("")}
    </div>
  `;
}

function viewCourse(id) {
  const course = courses.find(c => c.id === id);
  if (!course) return;

  const progress = course.completed ? 100 : 0;

  content.innerHTML = `
    <div class="course-detail">
      <h2>${course.title}</h2>
      <p>${course.description}</p>
      <div class="progress">
        <div class="progress-bar" style="width: ${progress}%;"></div>
      </div>
      <ul class="lesson-list">
        ${course.lessons.map(lesson => `<li class="lesson-item">${lesson}</li>`).join("")}
      </ul>
      <button onclick="markComplete(${course.id})">
        ${course.completed ? "Completed ✅" : "Mark as Completed"}
      </button>
      <button class="back-btn" onclick="renderHome()">← Back</button>
    </div>
  `;
}

function markComplete(id) {
  const course = courses.find(c => c.id === id);
  if (!course) return;
  course.completed = true;
  alert(`🎉 You have completed "${course.title}"!`);
  viewCourse(id);
}

renderHome();
