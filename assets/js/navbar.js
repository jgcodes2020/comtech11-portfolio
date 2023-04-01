let nav_inputs = $("nav > input.nav-toggle");

// whenever you click on the "hamburger" icon it toggles the view, open and closed.
nav_inputs.on("input", event => {
  let target = $(event.delegateTarget);
  let links = target.siblings("ul.nav-links");
  if (target.is(":checked"))
    links.css("height", links.prop("scrollHeight"));
  else
    links.css("height", 0);
});

// whenever the window is resized, it switches between mobile and desktop navbars.
$(window).resize(event => {
  nav_inputs.each(_ => {
    let links = $(this).siblings("ul.nav-links");

    if (window.matchMedia("screen and (min-width: 768px)").matches) {
      links.css("height", links.prop("scrollHeight"));
    }
    else {
      if ($(this).is(":checked")) {
        links.css("height", links.prop("scrollHeight"));
      }
      else {
        links.css("height", 0);
      }
    }
  })
});