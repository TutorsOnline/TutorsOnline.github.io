! function() {
    "use strict";

    function e() {
        var e = window.scrollY,
            n = document.getElementsByClassName("arrow");
        n.length && (e >= 100 ? n[0].classList.add("arrow--scrolled") : n[0].classList.remove("arrow--scrolled"))
    }

    function n() {
        var e = window.innerHeight,
            n = document.querySelectorAll(".scroll-in:not(.scroll-in--scrolled)");
        n.length && Array.from(n).forEach(n => { n.getBoundingClientRect().y < e && n.classList.add("scroll-in--scrolled") })
    }
    e(), window.addEventListener("scroll", (function() { e(), n() })), window.addEventListener("load", (function() {
        n(),
            function() {
                var e = document.getElementsByClassName("nav-bar");
                if (e.length) {
                    var n = e[0],
                        l = n.querySelector(".nav-bars"),
                        t = n.querySelector(".nav-close");
                    l && l.addEventListener("click", () => { l.classList.toggle("nav--expand") }), t && t.addEventListener("click", () => { l && l.classList.remove("nav--expand") })
                }
            }()
    }))
}()
