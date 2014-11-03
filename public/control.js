$(document).ready(function() {
    var mc = new Hammer(document.getElementById('area'));
    mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    mc.on('swipeleft', function() {
        jQuery.post('/next');
    });
    mc.on('swiperight', function() {
        jQuery.post('/prev'); 
    });
});