//  when we click profile image then profile page will be render
const clickImage = document.querySelector('.showProfile');
const profileSection = document.querySelector('.profileSection');
const postCard = document.querySelectorAll('.post-card');
const messageIcon = document.querySelector('.message-icon');
const messagePage = document.querySelector('.message-page');
const footer = document.querySelector('footer');

clickImage.addEventListener('click',()=>{
    profileSection.classList.add('showProfilePage');
    for (let i = 0; i < 2; i++) {
        postCard[i].style.display = 'none';
    }
    footer.style.display='none';
});;

messageIcon.addEventListener('click',()=>{
    messagePage.style.transform='translate(0%) scale(1)';
    for (let i = 0; i < 2; i++) {
        postCard[i].style.display = 'none';
    }
    footer.style.display='none';
});


// when we click back button then home page will be render
const backBtn = document.querySelector('.backBtn>span');
const msgBackBtn = document.querySelector('.message-backBtn');

backBtn.addEventListener('click',()=>{
    profileSection.classList.remove('showProfilePage');
    for (let i = 0; i < 2; i++) {
        postCard[i].style.display = 'block';
    }
    footer.style.display='block';
});

msgBackBtn.addEventListener('click',()=>{
    messagePage.style.transform = 'translate(100%) scale(0)';
    for (let i = 0; i < 2; i++) {
        postCard[i].style.display = 'block';
    }
    footer.style.display='block';
});


// show more or less function
function toggleText() {
    // Get all the elements from the page
    let points = document.getElementById("points");
    let showMoreText = document.getElementById("moreText");
    let buttonText = document.getElementById("textButton");

    /* If the display property of the dots to be displayed is already set to 'none' (that is hidden) then this section of code triggers*/

    if (points.style.display === "none") {
        // Hide the text between the span elements
        showMoreText.style.display = "none";

        // Show the dots after the text
        points.style.display = "inline";

        // Change the text on button to 'Show More'
        buttonText.innerHTML = "Show more";
    }

    // If the hidden portion is revealed, we will change it back to be hidden
    else {
        // Show the text between the span elements
        showMoreText.style.display = "inline";

        // Hide the dots after the text
        points.style.display = "none";

        // Change the text on button to 'Show Less'
        buttonText.innerHTML = "Show less";
    }
}


// Js for active class in footer
let spans = document.querySelectorAll('.footer-icon');
let border = document.querySelectorAll('.border');

for (let i = 0; i < spans.length; i++) {
    spans[i].addEventListener('click', () => {
        resetClass();
        spans[i].classList.add('active');
        border[i].classList.add('top-border');
    });

}

function resetClass() {
    border.forEach(ele => {
        ele.classList.remove('top-border');
    });
    spans.forEach(ele => {
        ele.classList.remove('active');
    });
}