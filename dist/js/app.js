(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const newPost = (post, addedAt = Date()) => {
        const addDate = {
            ...post,
            addedAt
        };
        return addDate;
    };
    const firstPost = {
        id: 1,
        author: "Max"
    };
    newPost(firstPost);
    const fnWithError = () => {
        throw new Error("Some error");
    };
    try {
        fnWithError();
    } catch (error) {}
    const myArr = [ 1, 2, 3 ];
    const newArr = myArr.map((e => 5 * e));
    console.log(newArr);
    window["FLS"] = true;
    isWebp();
})();