

/* Hamburger menu function. adapted from: https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_onclick */

function mobileMenu() {
    var x = document.getElementById("navigation");
    if (x.className === "navigation") {
        x.className += "unhide";
    } else {
        x.className = "navigation";
    }
}
