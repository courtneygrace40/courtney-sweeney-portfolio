

const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the item is visible
        });

        // Find all elements we want to animate
        document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
            observer.observe(element);
        });

// Start the animation after a 4-second delay (to match your logo)
