document.addEventListener('DOMContentLoaded', function () {
    // Inicializa los desplegables del menú
    function initDropdowns() {
        const toggles = document.querySelectorAll('.drop-toggle');

        function closeAll() {
            document.querySelectorAll('.dropdown').forEach(d => {
                d.style.display = 'none';
                const btn = d.previousElementSibling;
                if (btn && btn.classList.contains('drop-toggle')) btn.setAttribute('aria-expanded', 'false');
            });
        }

        toggles.forEach(btn => {
            const container = btn.closest('.has-dropdown') || btn.parentElement;
            const dropdown = btn.nextElementSibling;
            if (!dropdown || !dropdown.classList.contains('dropdown')) return;

            // Oculta inicialmente
            dropdown.style.display = 'none';
            btn.setAttribute('aria-expanded', 'false');

            function openSelf() {
                dropdown.style.display = 'block';
                btn.setAttribute('aria-expanded', 'true');
            }
            function closeSelf() {
                dropdown.style.display = 'none';
                btn.setAttribute('aria-expanded', 'false');
            }

            // Click: alterna (y evita que el clic burbujee al document)
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                const isOpen = btn.getAttribute('aria-expanded') === 'true';
                if (isOpen) {
                    closeSelf();
                } else {
                    closeAll();
                    openSelf();
                }
            });

            // Hover: abrir al pasar el ratón por la palabra
            btn.addEventListener('mouseenter', function () {
                closeAll();
                openSelf();
            });

            // Mantener abierto si se pasa al dropdown
            dropdown.addEventListener('mouseenter', function () {
                // no hacer nada, solo prevenir cierre por mouseleave del container
            });

            // Cierra al salir del contenedor (botón + dropdown)
            container.addEventListener('mouseleave', function () {
                closeSelf();
            });

            // Evita que clics dentro del dropdown cierren el menú inmediatamente
            dropdown.addEventListener('click', function (e) {
                e.stopPropagation();
            });
        });

        // Cierra al hacer clic fuera
        document.addEventListener('click', closeAll);

        // Cierra con Escape
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeAll();
        });
    }

    initDropdowns();
});