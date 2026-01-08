document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('.site-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Navigation Toggle
    console.log('Mobile navigation initialization...');
    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.setAttribute('aria-label', 'Toggle Menu');
    menuToggle.innerHTML = '<i data-lucide="menu"></i>';

    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelector('.nav-links');

    if (navContainer && navLinks) {
        navContainer.appendChild(menuToggle);

        menuToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('mobile-open');
            menuToggle.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
            document.body.style.overflow = isOpen ? 'hidden' : '';
            lucide.createIcons(); // Re-initialize icons
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('mobile-open');
                menuToggle.innerHTML = '<i data-lucide="menu"></i>';
                document.body.style.overflow = '';
                lucide.createIcons();
            });
        });
    }

    // Video Facade Loader
    const videoFacades = document.querySelectorAll('.video-facade');

    videoFacades.forEach(facade => {
        const loadVideo = () => {
            const videoId = facade.dataset.videoId;
            const platform = facade.dataset.platform; // 'youtube' or 'vimeo'
            let embedUrl = '';

            if (platform === 'vimeo') {
                embedUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&color=F59E0B&title=0&byline=0&portrait=0`;
            } else if (platform === 'youtube') {
                // Determine current origin for YouTube API compatibility
                const currentOrigin = window.location.origin || (window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : ''));

                // Use standard YouTube embed with correct origin parameter
                embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1&origin=${encodeURIComponent(currentOrigin)}`;
            }

            const iframe = document.createElement('iframe');
            iframe.setAttribute('src', embedUrl);
            iframe.setAttribute('width', '100%');
            iframe.setAttribute('height', '100%');
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.setAttribute('allowfullscreen', 'true');
            // Remove 'no-referrer' as it blocks YouTube from verifying the site identity on a live domain
            iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
            iframe.classList.add('video-embed');

            facade.innerHTML = '';
            facade.appendChild(iframe);
        };

        // Check if this video should autoplay on load
        if (facade.dataset.autoplayLoad === 'true') {
            loadVideo();
        } else {
            // Otherwise wait for click
            facade.addEventListener('click', loadVideo);
        }
    });
});
