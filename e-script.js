window.addEventListener('load', function () {
    setTimeout(function () {
        document.querySelector('.preloader').style.opacity = '0';
        setTimeout(function () {
            document.querySelector('.preloader').style.display = 'none';
        }, 500);
    }, 1500);
});

// Dynamic Hero Padding
window.addEventListener('load', function () {
    const navHeight = document.querySelector('nav').offsetHeight;
    document.querySelector('.event-hero').style.paddingTop = `${navHeight + 20}px`;
});

// Floating particles
document.addEventListener('DOMContentLoaded', function () {
    const colors = ['#9a0000', '#af996c', '#e4ddcb'];
    const particleCount = window.innerWidth <= 768 ? 20 : 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 6 + 2;
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const duration = Math.random() * 4 + 4;
        const delay = Math.random() * 2;
        const opacity = Math.random() * 0.5 + 0.3;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.background = color;
        particle.style.opacity = opacity;
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

        document.body.appendChild(particle);
    }
});

// Custom Cursor (only for non-touch devices)
if (!('ontouchstart' in window)) {
    const cursor = document.createElement('div');
    const cursorFollower = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursorFollower.className = 'custom-cursor-follower';
    document.body.appendChild(cursor);
    document.body.appendChild(cursorFollower);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, .timeline-item, .rules-item, .cta-button, .calendar-button').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '30px';
            cursor.style.height = '30px';
            cursor.style.background = 'rgba(154, 0, 0, 0.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.background = 'rgba(154, 0, 0, 0.3)';
        });
    });

    document.addEventListener('click', () => {
        cursor.classList.add('click');
        setTimeout(() => cursor.classList.remove('click'), 500);
    });
}

// Accordion for Rules (Hover and Click)
document.querySelectorAll('.rules-item').forEach(item => {
    const header = item.querySelector('h3');
    
    // Click event for mobile/touch devices
    header.addEventListener('click', () => {
        item.classList.toggle('active');
    });

    // Hover events for desktop
    if (!('ontouchstart' in window)) {
        header.addEventListener('mouseenter', () => {
            item.classList.add('active');
        });
        item.addEventListener('mouseleave', () => {
            item.classList.remove('active');
        });
    }
});