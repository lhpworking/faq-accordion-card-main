//accordion function
var faqBtns = document.querySelectorAll(".faq-btn");
var i;

faqBtns.forEach((faqBtn) => {
    faqBtn.addEventListener("click", () => {
        if (faqBtn.classList.contains("isActive")) {
            faqBtn.classList.remove("isActive");
        } else {
            const faqBtnWithIsActive = document.querySelectorAll(".faq-btn");
            faqBtnWithIsActive.forEach((faqBtnWithIsActive) => {
                faqBtnWithIsActive.classList.remove("isActive");
            });
            faqBtn.classList.add("isActive");
        }
    });
});
// for (i = 0; i < faqBtn.length; i++) {
//     faqBtn[i].addEventListener("click", function () {
//         this.classList.toggle("isActive");
//         var panel = this.nextElementSibling;
//         if (panel.style.display === "block") {
//             panel.style.display = "none";
//         } else {
//             panel.style.display = "block";
//         }
//     });
// }
// $(window).resize(function() {
//         if ($(window).width() < 768) {
//             $('.faq-img-woman').attr("src","images/illustration-woman-online-mobile.svg");
//         }
//         else {
//             $('.faq-img-woman').attr("src", "images/illustration-woman-online-desktop.svg");
//         }
// });
