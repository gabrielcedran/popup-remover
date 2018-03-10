// this is the code which will be injected into a given page...

(function() {
	document.getElementsByClassName("tm-gate")[0]
  .parentNode.removeChild(document.getElementsByClassName("tm-gate")[0]);
  document.getElementsByTagName("html")[0].setAttribute("style", "");
})();
