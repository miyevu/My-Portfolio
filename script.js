document.addEventListener('DOMContentLoaded', function () {
    const projectsContainer = document.querySelector('.projects');

    let isMouseDown = false;
    let startX;

    projectsContainer.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        startX = e.pageX - projectsContainer.offsetLeft;
    });

    projectsContainer.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    projectsContainer.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;
        const x = e.pageX - projectsContainer.offsetLeft;
        const scroll = x - startX;
        projectsContainer.scrollLeft -= scroll;
        startX = x;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const clickMeLinks = document.querySelectorAll('.click-me');

    clickMeLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            displayPopup('Contact Me for github file', 3000);
        });
    });

    function displayPopup(message, duration) {
        const popupDiv = document.createElement('div');
        popupDiv.classList.add('popup');
        popupDiv.innerHTML = `<p>${message}</p>`;
        document.body.appendChild(popupDiv);

        setTimeout(function () {
            document.body.removeChild(popupDiv);
        }, duration);

        popupDiv.addEventListener('click', function () {
            document.body.removeChild(popupDiv);
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navItems = document.querySelector('.nav-items');
    const listItems = document.querySelectorAll('.nav-items li');

    menuIcon.addEventListener('click', function () {
        navItems.classList.toggle('show');
    });

    

    listItems.forEach(function (item) {
        item.addEventListener('click', function () {
            menuIcon.click(); // Simulate a click on the menu icon to close the menu
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.sendEmail');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Use FormData to collect form data
        const formData = new FormData(form);

        // Send the form data to the server using fetch
        fetch('send-message.php', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.text())
        .then(result => {
            if (result === 'success') {
                alert('Message successfully sent!');
            } else {
                alert('Error sending the message. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});