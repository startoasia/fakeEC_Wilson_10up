// 開闔
function toggleContent(e) {
    var Content = document.querySelector(`${e}`);

    if (Content.style.maxHeight) {
        Content.style.maxHeight = null;
    } else {
        Content.style.maxHeight = Content.scrollHeight + "px";
    }
}

// 彈窗
function popUp(e) {
    let Content = document.querySelector(`${e}`);
    let Close = Content.querySelector(".closeBox");
    let html = document.documentElement;

    html.style.overflowY = 'hidden';

    Content.classList.add("popUp--active");
    Close.addEventListener("click", () => {
        Content.classList.remove("popUp--active");
        html.style.overflowY = 'scroll';
    });
}

// 滾動到指定錨點
function scrollLink() {
    // const header = document.querySelector("");
    let scrollLink = document.querySelectorAll('.scrollLink');

    for (let i = 0; i < scrollLink.length; i++) {
        scrollLink[i].addEventListener("click", function(e) {
            e.preventDefault();

            // 取得屬性id
            let targetID = this.attributes["href"].value;

            //取得目標DOM
            let target = document.querySelector(`${targetID}`);

            window.scrollTo({
                // top: target.offsetTop - header.offsetHeight,
                top: target.offsetTop,
                behavior: "smooth"
            });
        });
    }
}
scrollLink();