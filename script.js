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
            thumbnail.classList.add('active');
        }, 300); // Adjust the delay (in milliseconds) as needed
        // Smoothly fade out the current displayed image
        //

        // display.style.opacity = '1';
        // // display.style.transition = 'opacity 0.5s ease-in-out';
        // // Update the displayed image source
        // display.src = thumbnail.src;
        // // display.style.opacity = '0';
        // display.classList.add('active');
        // thumbnail.style.border = '2px solid yellow';

        // // Highlight the clicked thumbnail
        // thumbnails.forEach(t => t.classList.remove('active'));
        // thumbnails.forEach(t => t.style.border = '2 px solid transparent');
        // // display.style.opacity = '1';

        // //display.forEach(t => t.remove('active'));
        // //thumbnails.forEach(t => t.style.opacity = '0.8');
        // // display.style.transition = 'opacity 0.5s out-in-out';
        // display.classList.add('active');
        // thumbnail.classList.add('active');
        // document.getElementsByTagName('body')[0].style.backgroundImage = `url("${display.src}")`;
        // thumbnail.style.border = '2px solid red';
        // thumbnail.style.opacity = '1';

    });
});

//const thumbnails = document.querySelectorAll('.thumbnails img');
const displayContainer = document.querySelector('.display .image-container');
//const display = displayContainer.querySelector('img');

/*thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        // Smoothly fade out the current displayed image
        displayContainer.style.opacity = '0';

        // After a short delay, update the displayed image source
        setTimeout(() => {
            display.src = thumbnail.src;

            // Smoothly fade in the new displayed image
            displayContainer.style.opacity = '1';

            // Highlight the clicked thumbnail
            thumbnails.forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
        }, 100); // Adjust the delay (in milliseconds) as needed
    });
});*/

// Set the first thumbnail as active initially
//thumbnails.classList.add('active');
display.src = thumbnails[0].src
thumbnails[0].src = display.src 