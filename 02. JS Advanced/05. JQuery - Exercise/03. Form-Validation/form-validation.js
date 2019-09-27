function validate() {

    let $isCompany = $('#userInfo input#company');
    $isCompany.on('change', toggleCompanyNumber);

    let $form = $('form#registerForm');
    $form.on('submit', validateForm);

    function validateForm(event) {

        event.preventDefault();

        let allValid = true;

        let $username = $('#userInfo input#username');
        let username = $username.val();
        let $email = $('#userInfo input#email');
        let email = $email.val();
        let $password = $('#userInfo input#password');
        let password = $password.val();
        let $confirmPassword = $('#userInfo input#confirm-password');
        let confirmPassword = $confirmPassword.val();

        let usernameRegex = new RegExp('^[a-zA-Z0-9]{3,20}$', 'gm');
        if (!usernameRegex.test(username)) {
            $username.css('border-color', 'red');
            $username.css('border-width', '0.12rem');
            allValid = false;
        } else {
            $username.css('border-color', 'darkblue');
            $username.css('border-width', '0.06rem');
        }

        let emailRegex = new RegExp('^[^@]+@[^\\.]+\\..+$', 'gm');
        if (!emailRegex.test(email)) {
            $email.css('border-color', 'red');
            $email.css('border-width', '0.12rem');
            allValid = false;
        } else {
            $email.css('border-color', 'darkblue');
            $email.css('border-width', '0.06rem');
        }

        if (password.length < 5 || password.length > 15) {
            $password.css('border-color', 'red');
            $password.css('border-width', '0.12rem');
            allValid = false;
        } else {
            $password.css('border-color', 'darkblue');
            $password.css('border-width', '0.06rem');
        }

        if (confirmPassword.length < 5 || confirmPassword.length > 15) {
            $confirmPassword.css('border-color', 'red');
            $confirmPassword.css('border-width', '0.12rem');
            allValid = false;
        } else {
            $confirmPassword.css('border-color', 'darkblue');
            $confirmPassword.css('border-width', '0.06rem');
        }

        if (password !== confirmPassword) {
            $password.css('border-color', 'red');
            $password.css('border-width', '0.12rem');
            $confirmPassword.css('border-color', 'red');
            $confirmPassword.css('border-width', '0.12rem');
        } else {
            $password.css('border-color', 'darkblue');
            $password.css('border-width', '0.06rem');
            $confirmPassword.css('border-color', 'darkblue');
            $confirmPassword.css('border-width', '0.06rem');
        }

        if ($isCompany.is(':checked')) {

            let companyNumberRegex = new RegExp('^([1-8][0-9]{3}|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9])$', 'gm');
            let $companyNumber = $('#companyInfo #companyNumber');
            let companyNumber = $companyNumber.val();

            if (!companyNumberRegex.test(companyNumber)) {
                $companyNumber.css('border-color', 'red');
                $companyNumber.css('border-width', '0.12rem');
                allValid = false;
            } else {
                $companyNumber.css('border-color', 'darkblue');
                $companyNumber.css('border-width', '0.06rem');
            }
        }

        if (allValid) {
            $('#valid').css('display', 'block');
        } else {
            $('#valid').css('display', 'none');
        }

    }

    function toggleCompanyNumber() {
        if ($(this).is(':checked')) {
            $('#companyInfo').css('display', 'block');
        } else {
            $('#companyInfo').css('display', 'none');
        }
    }
}
