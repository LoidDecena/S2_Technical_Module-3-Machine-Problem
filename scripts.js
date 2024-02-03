let boxCount = 0;

function animateBox(newDay) {
    const container = document.getElementById('animated-container');
    const box = document.createElement('div');
    box.className = 'animated-box';
    const targetColor = getButtonColor(newDay.toLowerCase());
    box.style.backgroundColor = targetColor;
    box.style.setProperty('--target-color', targetColor);
    box.id = `animated-box-${boxCount}`;
    boxCount++;
    container.appendChild(box);
    const button = document.getElementById(`${newDay.toLowerCase()}-button`);
    if (button) {
        button.style.backgroundColor = targetColor;
    }
    box.offsetHeight;
    box.style.animation = 'appearFromTop 1s forwards';
    const previousBox = document.getElementById(`animated-box-${boxCount - 2}`);
    if (previousBox) {
        previousBox.style.animation = 'retractToTop 1s forwards';
    }
}

function getButtonColor(day) {
    switch (day) {
        case 'monday':
            return '#8FBB76';
        case 'tuesday':
            return '#FCC76A';
        case 'wednesday':
            return '#F4A755';
        case 'thursday':
            return '#E06C79';
        case 'friday':
            return '#8B4513'; 
        case 'saturday':
            return '#8A5F9E';
        case 'sunday':
            return '#519FB0'; 
        default:
            return 'black';
    }
}