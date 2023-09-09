for (let i = 0; i < 25; i++) {
    const parent = document.querySelector('.thumbnails');
    // add img tag to parent
    const img = document.createElement('img');
    img.src = `assets/1 (${i}).jpg`;
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

//const thumbnails = document.querySelectorAll('.thumbnails img');
const displayContainer = document.querySelector('.display .image-container');
//const display = displayContainer.querySelector('img');
display.src = thumbnails[0].src
thumbnails[0].src = display.src 