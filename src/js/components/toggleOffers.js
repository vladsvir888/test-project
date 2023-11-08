const buttons = document.querySelectorAll('.offer__button');
const continueLink = document.querySelector('.app__button');
const appleUrl = 'https://www.apple.com/';
const googleUrl = 'https://www.google.com/';

function handleButtonClick(event) {
    const clickedButton = event.target;
    const parentClickedButton = clickedButton.closest('.offer');
    if (parentClickedButton.classList.contains('offer--active')) return;

    const activeOffer = document.querySelector('.offer--active');
    if (activeOffer) activeOffer.classList.remove('offer--active');

    parentClickedButton.classList.add('offer--active');

    if (parentClickedButton.classList.contains('offer--yearly-access')) {
        continueLink.setAttribute('href', appleUrl);
    } else {
        continueLink.setAttribute('href', googleUrl);
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick);
});
