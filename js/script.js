// Arsh Luthra 0777039 Assignment 7

$(function () {
    $('.thumb img').css({
        padding: '10px',
        border: '1px solid black'
    })

    $.fn.photoViewer = function () {
        var selectedObjects = this;
        return {
            show: function () {
                return $('#photo-viewer');
            }
        };
    }


    $('#photo-viewer').photoViewer().show().on('click', '.photo-frame', function (e) {
        e.preventDefault();
        console.log("test", this);
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto',
            border: '4px solid black',
        });
        //modal code goes here
        var modal = new Modal();
        modal.open({
            content: $content,
            width: 800,
            height: 450
        });
    });


});



$(function () {

    $('.thumb').click(function (e) {
        e.preventDefault();
        var anchorHref = e.target.parentNode.href;
        var arrayvalue = anchorHref.split('/');
        var hrefPhotoFrame = arrayvalue[arrayvalue.length - 1];
        $(".photo-frame").find("img").remove();
        $(".photo-frame").append("<img id='spinner' src='img/load.gif' style='width: 800px!important; height: 450px!important;' alt=''>")
        setTimeout(function () {
            $("#spinner").remove();
            $(".photo-frame").append('<img src="' + `img/${hrefPhotoFrame}` + '">');
            $("a.photo-frame").attr('href', `img/${hrefPhotoFrame}`);
        }, 2000)

    });
});