let check = $("nav > input.nav-toggle");
let links = $("nav > ul.nav-links")

// whenever you click on the "hamburger" icon it toggles the view, open and closed.
check.on("input", event => {
  let target = $(event.delegateTarget);
  if (target.is(":checked"))
    links.css("height", links.prop("scrollHeight"));
  else
    links.css("height", 0);
});

// whenever the window is resized, it switches between mobile and desktop navbars.
$(window).resize(event => {
  
  if (window.matchMedia("screen and (min-width: 768px)").matches) {
    links.css("height", "initial");
    check.prop("checked", false);
  }
  else {
    if (check.is(":checked")) {
      links.css("height", links.prop("scrollHeight"));
    }
    else {
      links.css("height", 0);
    }
  }
});