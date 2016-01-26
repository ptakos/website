$( document ).ready(function() {
    $("[rel='tooltip']").tooltip();    

    $('.thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
        ); 
});

$(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please provide your first name'
                    }
                }
            },
            last_name: {
                validators: {
                   stringLength: {
                    min: 2,
                },
                notEmpty: {
                    message: 'Please provide your last name'
                }
            }
        },
        email: {
            validators: {
                notEmpty: {
                    message: 'Please provide your email address'
                },
                emailAddress: {
                    message: 'Please provide a valid email address'
                }
            }
        },
        InputMessage: {
            validators: {
              stringLength: {
                min: 10,
                max: 200,
                message:'Please enter at least 10 characters and no more than 200'
            },
            notEmpty: {
                message: 'Please provide a description of your project'
            }
        }
    }
}
})
.on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
            $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});