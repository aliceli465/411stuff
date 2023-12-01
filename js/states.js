$(document).ready(function() {
    $.getJSON("/js/statefinal.json", function(data) {
        var size = Object.keys(data.values).length;
        for(let i = 0; i < size; i++) {
            var output = Mustache.render($("#stateTemplate").html(),data.values[i]);
            $("#statemodals").append(output);
        }
    });
});
