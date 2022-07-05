let discordtag;

function showTag() {
    if (!discordtag) {

    }
    alert(`My Discord tag is ${discordtag}`);
}

function wait(time) {
    let date = Date.now();
    let current = null;
    
    do {
        current = Date.now();
    } while (current - date < time);
}


var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === 'And I ') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = async function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #ffcaba}";
    document.body.appendChild(css);

    let request = await fetch('https://discordid.net/api?key=did_ZSkpmnZW5hG3ssB7RShCXR6ltqOYUApIEF9QdLZbjlSpQnAHBSFY8WvNpsY0&id=755473025209466950');
    if (request.status != 200) return;
    
    let response = await request.json();
    if (response.error) return;

    discordtag = response.usernamewtag;

    let page = $('.main_container');
    page.css('display', '');
};

