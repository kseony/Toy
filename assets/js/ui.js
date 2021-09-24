'use strict;'

function easingInput(){
    var activeClass = 'has-content';
    $('.easing-input input').on('focusout', function(){
        if($(this).val() != ""){
            $(this).addClass(activeClass);
        }else{
            $(this).removeClass(activeClass);
        }
    });
}