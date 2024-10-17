

    function showContent(contentId) {
        const content = document.getElementById('content');

        const contentMap = {
            content1: `
                <img class="img-fluid" src="assets/images/Illustration Container.svg" alt="">
                <div class="card-heading">
                    Future-oriented orientation
                    <p class="card-text">
                       Explore the perfect path for your business in the digital world. We'll create a custom plan that aligns with your objectives and addresses evolving technology and market demands.
                    </p>
                </div>
            `,
            content2: `
                <img class="img-fluid" src="assets/images/Illustration Container.svg" alt="">
                <div class="card-heading">
                    Digital transformation strategy
                    <p class="card-text">
                       Explore the perfect path for your business in the digital world. We'll create a custom plan that aligns with your objectives and addresses evolving technology and market demands.
                    </p>
                </div>
            `,
            content3: `
                <img class="img-fluid" src="assets/images/Illustration Container.svg" alt="">
                <div class="card-heading">
                    Digital transformation implementation
                    <p class="card-text">
                       Explore the perfect path for your business in the digital world. We'll create a custom plan that aligns with your objectives and addresses evolving technology and market demands.
                    </p>
                </div>
            `,
            content4: `
                <img class="img-fluid" src="assets/images/Illustration Container.svg" alt="">
                <div class="card-heading">
                    Digital transformation support
                    <p class="card-text">
                        Explore the perfect path for your business in the digital world. We'll create a custom plan that aligns with your objectives and addresses evolving technology and market demands.
                    </p>
                </div>
            `
        };

        // Update the innerHTML of the content div with the appropriate content
        content.innerHTML = contentMap[contentId] || '<p>No content available.</p>';
    }
    // --------------------script for navbar--------------------
    document.querySelector('.navbar-toggler').addEventListener('click', function () {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        navbarCollapse.classList.toggle('active');
    });


    document.querySelectorAll('.navbar-collapse .nav-link').forEach(link => {
        link.addEventListener('click', function () {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('active')) {
                navbarCollapse.classList.remove('active');
            }

            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: true
            });
            bsCollapse.hide();
        });
    });
