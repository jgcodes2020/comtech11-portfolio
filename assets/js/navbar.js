let check = $("nav > input.nav-toggle");
let links = $("nav > ul.nav-links")

// whenever you click on the "hamburger" icon it toggles the view, open and closed.
// check.on("input", event => {
//   let target = $(event.delegateTarget);
//   if (target.is(":checked"))
//     links.css("max-height", 100000);
//   else
//     links.css("max-height", 0);
// });

// whenever the window is resized, it switches between mobile and desktop navbars.
$(window).resize(event => {
  if (window.matchMedia("screen and (min-width: 768px)").matches) {
    check.prop("checked", false);
  }
  
  links.css("--data-nav-scrollheight", `${links.prop("scrollHeight")}px`);
});

$(() => {
  links.css("--data-nav-scrollheight", `${links.prop("scrollHeight")}px`);
})