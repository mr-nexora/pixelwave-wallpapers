<script>
        // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mobileMenu = document.querySelector('.mobile-menu');
        const mobileMenuClose = document.querySelector('.mobile-menu-close');
        const overlay = document.querySelector('.overlay');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        overlay.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Mobile Dropdown Toggle
        const dropdownBtns = document.querySelectorAll('.mobile-dropdown-btn');

        dropdownBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                const dropdownMenu = btn.nextElementSibling;
                dropdownMenu.classList.toggle('active');
            });
        });

        // Sticky Header on Scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.main-header');
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
            }
        });
    </script>