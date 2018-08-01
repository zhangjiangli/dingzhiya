function Mobileevent(ME1, ME2, ME3) {
    ME1.on("click",function () {
        ME1.css("border-bottom", "3px solid #365250");
        ME2.show();
        ME3.hide();
    })
    ME1.on("mouseout",function () {
        ME1.css("border-bottom", "none");
        ME3.hide();
    });
}

function Mobileevent2(ME1, ME2, ME3, ME4, ME5) {
    ME1.on("click",function () {
        ME1.hide();
        ME2.show();
        ME3.show();
        ME4.hide();
        ME5.hide();
    })
}
function Mobileevent3(ME1, ME2, ME3, ME4, ME5) {
    ME1.on("click",function () {
        ME1.hide();
        ME2.hide();
        ME3.show();
        ME4.show();
        ME5.show();
    })
}
function Backtothetop(id) {
    $(function () {
        id.hide(); 
        $(window).scroll(function () {        
            if ($(this).scrollTop() > 100) {
                id.fadeIn();
            } else {
                id.fadeOut();
            }
        });
        $('#goToTop a').click(function () {
            $('html ,body').animate({
                scrollTop: 0
            }, 300);
            return false;
        });
    });
}

