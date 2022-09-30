/* Dark Mode */
var darkMode = false;

// default to system setting
if (window.matchMedia('(prefers-color-scheme: light)').matches) {
	darkMode = true;
}

// preference from localStorage should overwrite
if (localStorage.getItem('theme') === 'dark-mode') {
	darkMode = true;
} else if (localStorage.getItem('theme') === 'light') {
	darkMode = false;
}

if (darkMode) {
	document.body.classList.toggle('dark-mode');
}

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('darkmode').addEventListener('click', () => {
		document.body.classList.toggle('dark-mode');
    	localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light');
	});

});