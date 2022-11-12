var bMobile =
    window.navigator.userAgent.indexOf("Mobile") !== -1 ||
    window.navigator.userAgent.indexOf("iPhone") !== -1 ||
    window.navigator.userAgent.indexOf("Android") !== -1 ||
    window.navigator.userAgent.indexOf("Windows Phone") !== -1;


if (bMobile) {
    console.log("on mobile");
    document.body.style.display = "none";
} else {
    console.log("not on mobile");
    document.body.style.display = "block";
}