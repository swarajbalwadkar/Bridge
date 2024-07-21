document.addEventListener('DOMContentLoaded', function () {
    const icons = document.querySelectorAll('.icons');

    icons.forEach(icon => {
        icon.addEventListener('click', function () {
            const appUrl = icon.getAttribute('data-app-url');
            const webUrl = icon.getAttribute('data-web-url');

            // Open the app if installed, fallback to web URL
            const appLink = document.createElement('a');
            appLink.href = appUrl;
            appLink.style.display = 'none';
            document.body.appendChild(appLink);

            const start = new Date().getTime();
            let appOpened = false;

            window.addEventListener('blur', function () {
                appOpened = true;
            });

            window.setTimeout(function () {
                const end = new Date().getTime();
                if (!appOpened && (end - start) < 1500) {
                    window.location.href = webUrl;
                }
                document.body.removeChild(appLink);
            }, 1000);

            appLink.click();
        });
    });
});
