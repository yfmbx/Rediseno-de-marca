document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('heroVideo');
    const btn = document.getElementById('playPauseBtn');


    // If user prefers reduced motion, pause the video and hide the control
    try {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        if (video) video.pause();
        if (btn) btn.style.display = 'none';
    }
    } catch (e) {
    // matchMedia may not be supported; ignore errors
    }


    if (btn) {
    btn.addEventListener('click', function () {
        if (!video) return;
        if (video.paused) {
        video.play();
        btn.textContent = 'Pause';
        btn.setAttribute('aria-pressed', 'false');
        btn.setAttribute('aria-label', 'Pause background video');
        } else {
        video.pause();
        btn.textContent = 'Play';
        btn.setAttribute('aria-pressed', 'true');
        btn.setAttribute('aria-label', 'Play background video');
        }
    });
    }


    // Simple dropdown handling for nav (keeps JS minimal)
    document.querySelectorAll('.nav-item.has-dropdown').forEach(item => {
    const btn = item.querySelector('.drop-toggle');
    const menu = item.querySelector('.dropdown');
    btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        item.classList.toggle('show');
    });
    // close when focus leaves
    item.addEventListener('focusout', (e) => {
        // if the newly focused element is outside the item, close
        if (!item.contains(e.relatedTarget)) {
        item.classList.remove('show');
        btn.setAttribute('aria-expanded', 'false');
        }
    });
    });

});