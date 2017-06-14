function submitSucess() {
    var type = document.form1;
    var lName = document.getElementById('lName').value;
    var txt = '';
    for(var i =0;i<4;i++){
        if(type[i].checked){
            txt = type[i].value;
        }
    }

    document.getElementById('wrapper').innerHTML = "Thank " + txt + lName + " for your purchasing at Seaside Vacation";
}

function verifyCard(number) {
    var visa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var americanExpress = /^(?:3[47][0-9]{13})$/;
    var master = /^(?:5[1-5][0-9]{14})$/;
    if(number.value.match(visa) || number.value.match(americanExpress) || number.value.match(master))
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
    var tax = subtotal * 0.13;
    document.getElementById('tax').innerHTML = "$"+tax;
    var total = subtotal * 1.13;
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
    return "";
}
