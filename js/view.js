// view.js
const dataView = {
    renderData(data) {
        const container = document.getElementById('data-container');
        container.innerHTML = `<ul>${data.map(item => `<li>${item}</li>`).join('')}</ul>`;
    },
};