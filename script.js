
var imgs = Array.from(document.querySelectorAll(".content img"));
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");
var currentIndex = 0;


for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function (e) {

        currentIndex = imgs.indexOf(e.target);
        console.log(currentIndex);
        var imgSrc = e.target.getAttribute("src");
        lightBoxItem.style.backgroundImage = `url( ${imgSrc} )`;
        lightBoxContainer.style.display = "flex";
    })
}

function nextSlide() {
    currentIndex++;
    if (currentIndex == imgs.length) {
        currentIndex = 0;
    }
    console.log(currentIndex)
    var imgSrc = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = `url( ${imgSrc} )`;
}
nextBtn.addEventListener("click", nextSlide);

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    }
    console.log(currentIndex)
    var imgSrc = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = `url( ${imgSrc} )`;
}
prevBtn.addEventListener("click", prevSlide);
function closeSlide() {
    lightBoxContainer.style.display = "none";
}
closeBtn.addEventListener("click", closeSlide);

lightBoxContainer.addEventListener("click", function (e) {
    if (e.target.getAttribute("id") == "lightBoxContainer") {
        lightBoxContainer.style.display = "none";
    }
})
var events=["click", "mouseenter","mousemove"];
for(var i=0;i<events.length;i++){
    nextBtn.addEventListener(events[i], nextSlide);
}
document.addEventListener("keydown",function(e){
    console.log(e)
    if(e.code=="ArrowRight"){
        nextSlide();
    }
    else if (e.code=="ArrowLeft"){
        prevSlide();
    }
    else if (e.code=="Enter"){
        closeSlide() ;
    }

})

