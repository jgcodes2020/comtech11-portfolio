// VERY small script.
// whenever you click on the "hamburger" icon it toggles the view, open and closed.

$("input.nav-toggle").on("input", event => {
  let target = $(event.delegateTarget);
  let links = target.siblings("ul.nav-links");
  if (target.is(":checked"))
    links.css("height", links.prop("scrollHeight"));
  else
  links.css("height", 0);
})