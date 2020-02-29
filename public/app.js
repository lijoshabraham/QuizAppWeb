function onSideBarClosed() {
    document.getElementById("first-sidebar").transition = "all .5s ease";
    document.getElementById("first-sidebar").style.width="0px";
    //transition: all .5s ease;
}
function onSideBarOpen() {
    document.getElementById("first-sidebar").transition = "all .5s ease";
    document.getElementById("first-sidebar").style.width="16%";
}