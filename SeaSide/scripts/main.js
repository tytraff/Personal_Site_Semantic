/**
 * Created by dtraf on 5/19/2017.
 */

function clearCookies() {
    var cookieString = document.cookie;
    var cookieArray = cookieString.split("; ");
    var expiresDate = new Date();
    expiresDate.setDate(expiresDate.getDate() - 7);
    for (var i = 0; i < cookieArray.length; i++) {
        document.cookie = cookieArray[i] + "; expires=" + expiresDate.toUTCString();
    }
}

if (window.addEventListener) {
    window.addEventListener("load", clearCookies, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", clearCookies);
}

function blinker() {
    $('#slogan').fadeOut('slow');
    $('#slogan').fadeIn('slow');
}
setInterval(blinker, 2000);
