(function() {
    'use strict';

    const START_HOUR_AT = 9;
    const END_HOUR_AT = 18;

    const getRandom = function (min, max) {
      return ("00" + (Math.floor( Math.random() * (max + 1 - min) ) + min)).slice(-2);
    };

    setTimeout(function() {
        if ($('.c-time-input.is-error').length === 0) {
            return;
        }

        if (!window.confirm("勤怠を自動入力しますか？")) {
            return;
        }

        $('.c-time-input.is-error').each(function() {
            let self = $(this);

            if (self.attr('name').indexOf('result_start_time_text') !== -1) {
                self.val(START_HOUR_AT + ':' + getRandom(0, 59));
            } else if(self.attr('name').indexOf('result_end_time_text') !== -1) {
                self.val(END_HOUR_AT + ':' + getRandom(0, 59));
            }

            self.trigger('change');
        });
    }, 1500);
})();
