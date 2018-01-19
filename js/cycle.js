$(document).ready(function(){
    var classCycle=['BG1','BG2', 'BG3', 'BG4'];

    var randomNumber = Math.floor(Math.random() * classCycle.length);
    var classToAdd = classCycle[randomNumber];

    $('.bg-gallery').addClass(classToAdd);

});
