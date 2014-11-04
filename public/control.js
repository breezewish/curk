$(document).ready(function() {
    var mc = new Hammer(document.getElementById('area'));
    mc.get('swipe').set({
        threshold: 5,
        velocity: 0.1,
        direction: Hammer.DIRECTION_ALL
    });
    mc.on('swipeleft swipedown', function() {
        jQuery.post('/next');
        navigator.vibrate(50);
    });
    mc.on('swiperight swipeup', function() {
        jQuery.post('/prev');
        navigator.vibrate(50);
    });
});