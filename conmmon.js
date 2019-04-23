function my$(id) {
    return document.getElementById(id);

}

function getStyle(element,arrt) {
    return window.getComputedStyle?
        window.getComputedStyle(element,null)[arrt]
        :element.currentStyle[arrt];
}

function getScroll() {
    return {
        left:window.pageXOffset||document.documentElement.scrollLeft
    ||document.body.scrollLeft||0,
        top:window.pageYOffset||document.documentElement.scrollTop
    ||document.body.scrollTop||0
    }
}
