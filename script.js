
function menuscroll() {
    var menuList = document.getElementById("menubar");
    console.log("is running",menuList);
    if (menuList.style.display === "none" || menuList.style.display === "") {
        menuList.style.display = "block";
    } else {
        menuList.style.display = "none";
    }
};