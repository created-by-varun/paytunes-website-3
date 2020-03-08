
// Collapses the navigation bar after an item is seleced

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});