
export function initIntro() {
    const introScreen = document.getElementById('intro-screen');
    const introText = document.getElementById('intro-text-1');
    const enterSiteBtn = document.getElementById('enter-site-btn');
    const heroText = document.getElementById('hero-text');

    if (!introScreen || !introText || !enterSiteBtn) return;

    // Check session storage
    if (sessionStorage.getItem('3am_entered') === 'true') {
        introScreen.style.display = 'none';
        document.body.style.overflow = '';
        if (heroText) heroText.classList.add('fade-in');
    } else {
        document.body.style.overflow = 'hidden';

        // Animation sequences
        setTimeout(() => {
            introText.classList.add('visible');
        }, 1000);

        setTimeout(() => {
            enterSiteBtn.classList.add('visible');
        }, 2500);

        enterSiteBtn.addEventListener('click', () => {
            sessionStorage.setItem('3am_entered', 'true');
            introScreen.classList.add('hidden');
            document.body.style.overflow = '';

            if (heroText) {
                setTimeout(() => {
                    heroText.classList.add('fade-in');
                }, 500);
            }
        });
    }
}
