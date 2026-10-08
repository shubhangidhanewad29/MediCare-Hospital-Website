(function () {

    'use strict';


    /* =========================
       FORM VALIDATION
    ========================= */

    const forms =
        document.querySelectorAll('.needs-validation');


    forms.forEach(function (form) {

        form.addEventListener('submit', function (event) {

            if (!form.checkValidity()) {

                event.preventDefault();

            } else {

                event.preventDefault();

                alert("Form submitted successfully!");

            }

            form.classList.add('was-validated');

        });

    });


    /* =========================
       TOOLTIP
    ========================= */

    const tooltipTriggerList =
        document.querySelectorAll(
            '[data-bs-toggle="tooltip"]'
        );


    tooltipTriggerList.forEach(function (tooltipTriggerEl) {

        new bootstrap.Tooltip(tooltipTriggerEl);

    });

})();