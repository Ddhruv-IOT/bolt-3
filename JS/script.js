
// Dynamically add the images to the thumbnails section
for (let i = 0; i <= 25; i++) {
    const parent = document.querySelector('.thumbnails');
    // add img tag to parent
    const img = document.createElement('img');
    img.src = `assets/1 (${i}).jpg`;
    img.alt = `Image ${i}`;
    parent.appendChild(img);
}

const thumbnails = document.querySelectorAll('.thumbnails img');
const display = document.querySelector('.display img');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        // Smoothly fade out the current displayed image
        display.style.opacity = '0';
        display.style.transition = 'opacity 0.5s ease-in-out';
        // After a short delay, update the displayed image source
        setTimeout(() => {
            display.src = thumbnail.src;
            // Smoothly fade in the new displayed image
            display.style.opacity = '1';
            display.style.transition = 'opacity 0.5s ease-in-out';
            // Highlight the clicked thumbnail
            thumbnails.forEach(t => t.classList.remove('active'));
            thumbnails.forEach(t => t.style.borderColor = 'black');

            thumbnail.classList.add('active');
            document.getElementsByTagName('body')[0].style.backgroundImage = `url("${display.src}")`;
            thumbnail.style.border = '2px solid red';
            thumbnail.style.opacity = '0.4';

        }, 300); // Adjust the delay (in milliseconds) as needed

    });
});

function plusSlides(a = 0) {
    let current = 1;
    for (let i = 0; i <= thumbnails.length; i++) {
        if (thumbnails[i].src === display.src) {
            current = i;
            break;
        }
    }

    let newSlide = current + a;
    if (newSlide < 0) {
        newSlide = thumbnails.length - 1;
    } else if (newSlide > thumbnails.length - 1) {
        newSlide = 0;
    }
    display.src = thumbnails[newSlide].src;
    document.getElementsByTagName('body')[0].style.backgroundImage = `url("${display.src}")`;
    thumbnails.forEach(t => t.classList.remove('active'));
    thumbnails.forEach(t => t.style.borderColor = 'black');
    thumbnails[newSlide].classList.add('active');
    thumbnails[newSlide].style.border = '2px solid red';
    thumbnails[newSlide].style.opacity = '0.4';
    display.style.opacity = '1';
    display.style.transition = 'opacity 0.5s ease-in-out';
}


// setting up the initial display image
display.src = thumbnails[0].src
display.style.opacity = '1';
document.getElementsByTagName('body')[0].style.backgroundImage = `url("${display.src}")`;

let current = 1;
let prev = 0;
scroll_curr = 100;
scroll_step = 100;
setInterval(() => {
//     const thumbnails = document.querySelectorAll('.thumbnails img');
// const display = document.querySelector('.display img');
//     let current = 1;
for (let i = 0; i <= thumbnails.length; i++) {
    if (thumbnails[i].src === display.src) {
        current = i;
        break;
    }
    console.log(current, prev);
    if (prev !== current) {
        
        document.querySelector('.thumbnails').scrollTo({
            left: scroll_curr += scroll_step,
            behavior: 'smooth', // You can use 'auto' for instant scrolling
          });
          prev = current;
    }
    
}}, 2000);