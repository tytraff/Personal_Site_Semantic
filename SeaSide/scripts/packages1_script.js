var slideIndex = 1;
slide1(slideIndex);
slide2(slideIndex);
slide3(slideIndex);
slide4(slideIndex);

function slide1Divs(n) {
    slide1(slideIndex += n);
}

function slide2Divs(n) {
    slide2(slideIndex += n);
}

function slide3Divs(n) {
    slide3(slideIndex += n);
}

function slide4Divs(n) {
    slide4(slideIndex += n);
}

function slide1(n) {
    var i;
    var x = document.getElementsByClassName("Slides1");
    var div = document.getElementById("info1");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";

    if(slideIndex == 1){
        div.innerHTML = "Enjoy our ocean view pool as you sit back and enjoy drinks from our open bar" +
            "<br>You will enjoy every moment having your every need catered too";
    }

    if(slideIndex == 2){
        div.innerHTML = "Bask in the view of the beautiful Dominican Republic beaches" +
            "<br>With activities like snokeling and scuba diving there is never a dull moment!";
    }

    if(slideIndex == 3){
        div.innerHTML = "Snorkeling Tours" +
            "<br>Enjoy snokeling in some of the best reef you can find!";
    }

    if(slideIndex == 4){
        div.innerHTML = "Let us make in memorable!" +
            "<br>Wedding packages to meet every brides needs!";
    }
}

function slide2(n) {
    var i;
    var x = document.getElementsByClassName("Slides2");
    var div = document.getElementById("info2");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";

    if(slideIndex == 1){
        div.innerHTML = "With our water park you will have a splash!" +
            "<br>Slides for all ages!";
    }

    if(slideIndex == 2){
        div.innerHTML = "Endless Water!" +
            "<br>Walk right our of the pool and right onto the beach!";
    }

    if(slideIndex == 3){
        div.innerHTML = "Romance? We got it covered!" +
            "<br>Enjoy horseback riding along the coast!";
    }

    if(slideIndex == 4){
        div.innerHTML = "Feeling Adventerous?" +
            "<br>Take one of our hiking packages to tropical paradises!";
    }

}

function slide3(n) {
    var i;
    var x = document.getElementsByClassName("Slides3");
    var div = document.getElementById("info3");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";

    if(slideIndex == 1){
        div.innerHTML = "Pools Everywhere!" +
            "<br>We have pools wraping the entire resort";
    }

    if(slideIndex == 2){
        div.innerHTML = "Swim up bar?" +
            "<br>Yes Please!";
    }

    if(slideIndex == 3){
        div.innerHTML = "Enjoy beautiful Jamaica" +
            "<br>See what so many people are talking about!";
    }

    if(slideIndex == 4){
        div.innerHTML = "Country Club House" +
            "<br>After hitting the golf course why not come back to our club house?";
    }
}

function slide4(n) {
    var i;
    var x = document.getElementsByClassName("Slides4");
    var div = document.getElementById("info4");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";

    if(slideIndex == 1){
        div.innerHTML = "Enjoy our ocean view pool as you sit back and enjoy drinks from our open bar" +
            "<br>You will enjoy every moment having your every need catered too";
    }

    if(slideIndex == 2){
        div.innerHTML = "Bask in the view of the beautiful Dominican Republic beaches" +
            "<br>With activities like snokeling and scuba diving there is never a dull moment!";
    }

    if(slideIndex == 3){
        div.innerHTML = "Enjoy our ocean view pool as you sit back and enjoy drinks from our open bar" +
            "<br>You will enjoy every moment having your every need catered too";
    }

    if(slideIndex == 4){
        div.innerHTML = "Bask in the view of the beautiful Dominican Republic beaches" +
            "<br>With activities like snokeling and scuba diving there is never a dull moment!";
    }
}

