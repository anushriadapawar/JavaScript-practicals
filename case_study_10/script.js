const loadBtn = document.getElementById('loadBtn');
const tableBody = document.querySelector('#studentTable tbody');
const loadingMsg = document.getElementById('loadingMsg');

loadBtn.addEventListener('click', () => {
    tableBody.innerHTML = ''; // clear previous data
    loadingMsg.textContent = 'Loading data...';

    // Simulate API delay with setTimeout
    setTimeout(() => {
        fetch('data.json')
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => {
                loadingMsg.textContent = '';
                displayTable(data);
            })
            .catch(error => {
                loadingMsg.textContent = 'Error loading data: ' + error;
            });
    }, 1000); // 1 second delay to simulate API
});

// Function to display data in the table
function displayTable(data) {
    data.forEach(student => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.email}</td>
            <td>${student.course}</td>
        `;

        tableBody.appendChild(row);
    });
}
