document.onreadystatechange = function () {
if (document.readState == "complete") {
document.body.style.display = "block";
} else {
document.body.style.display = "none";
};
};