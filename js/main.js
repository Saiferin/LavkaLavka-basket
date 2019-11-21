/* $(document).ready(() => {

    $('.plus').click(e => {

        e.preventDefault();

        let prevElement = $('.plus').siblings('.qty');

        // Get its current value
        let currentVal = parseInt($(prevElement).val());

        if (!isNaN(currentVal) && currentVal < 20) {
            prevElement.val(currentVal + 1);
        };
    });

    $('.minus').click(e => {

        e.preventDefault();

        let prevElement = $('.plus').siblings('.qty');

        // Get its current value
        let currentVal = parseInt($(prevElement).val());

        if (!isNaN(currentVal) && currentVal !== 0) {
            prevElement.val(currentVal - 1);
        };
    })
}); */