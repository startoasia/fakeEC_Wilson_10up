var lazyMedias = ["img", "video", "iframe"];
var observer = new IntersectionObserver(
  function (entries, observer) {
    /*
    entries.forEach(entry => {
    	if (entry.isIntersecting) {
    		entry.target.src = entry.target.dataset.src;
    		observer.unobserve(entry.target);
    	}
    });
    //*/
    for (var i in entries) {
      if (entries[i].isIntersecting) {
        if (lazyMedias.indexOf(entries[i].target.tagName.toLowerCase()) == -1) {
          entries[i].target.style.background = entries[i].target.dataset.src;
          entries[i].target.style.backgroundSize = "cover";
        } else {
          entries[i].target.src = entries[i].target.dataset.src;
        }
        observer.unobserve(entries[i].target);
      }
    }
  },
  {
    rootMargin: "100px",
  }
);

// document.querySelectorAll('.lazy').forEach(o => { observer.observe(o) });

var lazys = document.querySelectorAll(".lazy");
for (var j in lazys) {
  observer.observe(lazys.item(j));
}
