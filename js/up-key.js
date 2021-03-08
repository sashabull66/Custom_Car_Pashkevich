let smoothJumpUp = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        window.scrollBy(0,-10);
        setTimeout(smoothJumpUp, 1);
    }
}

window.onscroll = function() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 100) {
        document.getElementById('upbutton').style.display = 'block';
    } else {
        document.getElementById('upbutton').style.display = 'none';
    }
}