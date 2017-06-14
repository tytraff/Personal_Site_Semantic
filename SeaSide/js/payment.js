function submitSucess() {

    document.getElementById('wrapper').innerHTML = "Thank you for your purchasing at Seaside Vacation";
}

function verifyCard(number) {
    var visa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var americanExpress = /^(?:3[47][0-9]{13})$/;
    var master = /^(?:5[1-5][0-9]{14})$/;
    var discover = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
    if(number.value.match(visa) || number.value.match(americanExpress) || number.value.match(master) || number.value.match(discover))
    {
        submitSucess();
    }
    else
    {
        alert("Not a valid Credit card number!");
    }
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function calculatePayment() {
    var subtotal = getCookie('value');
    document.getElementById('subTotal').innerHTML = "$"+subtotal;
    var tax = Math.round(subtotal * 0.13 * 100)/100 ;
    document.getElementById('tax').innerHTML = "$"+tax;
    var total = Math.round(subtotal * 1.13 * 100)/100 ;
    document.getElementById('total').innerHTML = "$"+total;
}
function SetTypeText(number)
{
    var typeField = document.getElementById("type");
    typeField.innerHTML = GetCardType(number);
}
function GetCardType(number)
{
    var re = new RegExp("^4");
    if (number.match(re) != null)
        return "<a href='http://www.credit-card-logos.com/'><img alt='Credit Card Logos' title='Credit Card Logos' src='http://www.credit-card-logos.com/images/visa_credit-card-logos/visa_logo_3.gif' width='35' height='22' border='0' /></a>";
    re = new RegExp("^(34|37)");
    if (number.match(re) != null)
        return "<a href='http://www.credit-card-logos.com/'><img alt='Credit Card Logos' title='Credit Card Logos' src='http://www.credit-card-logos.com/images/american_express_credit-card-logos/american_express_logo_3.gif' width='22' height='22' border='0' /></a>";
    re = new RegExp("^5[1-5]");
    if (number.match(re) != null)
        return "<a href='http://www.credit-card-logos.com/'><img alt='Credit Card Logos' title='Credit Card Logos' src='http://www.credit-card-logos.com/images/mastercard_credit-card-logos/mastercard_logo_3.gif' width='37' height='22' border='0' /></a>";
    re = new RegExp("^(65|6011)");
    if (number.match(re) != null)
        return "<a href='http://www.credit-card-logos.com/'><img alt='Credit Card Logos' title='Credit Card Logos' src='http://www.credit-card-logos.com/images/discover_credit-card-logos/discover_network1.jpg' width='32' height='22' border='0' /></a>";
    return "";
}

