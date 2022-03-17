var levelCounter = 0;
console.log(levelCounter);

var profielEen = document.querySelector('.active')
var profielTwee = document.querySelector('li:nth-of-type(2)')
var profielDrie = document.querySelector('li:nth-of-type(3)')
var profielVier = document.querySelector('li:nth-of-type(4)')
var profielVijf = document.querySelector('li:nth-of-type(5)')

// NO BUTTON COUNT

var noBtn = document.querySelector('.nobtn');

function clickNoBtn(){
    levelCounter ++;
    console.log(levelCounter);

    if (levelCounter == 1) {
        profielEen.classList.remove('active');
        profielEen.classList.add('no');
        profielTwee.classList.remove('profile');
        profielTwee.classList.add('active');
    }

    if (levelCounter == 2) {
        profielTwee.classList.remove('active');
        profielTwee.classList.add('no');
        profielDrie.classList.remove('profile');
        profielDrie.classList.add('active');
    }

    if (levelCounter == 3) {
        profielDrie.classList.remove('active');
        profielDrie.classList.add('no');
        profielVier.classList.remove('profile');
        profielVier.classList.add('active');
    }

    if (levelCounter == 4) {
        profielVier.classList.remove('active');
        profielVier.classList.add('no');
        profielVijf.classList.remove('profile');
        profielVijf.classList.add('active');
    }

    if (levelCounter == 5) {
        profielVijf.classList.remove('active');
        profielVijf.classList.add('no');
    }
}

noBtn.addEventListener('click', clickNoBtn);

// YES BUTTON COUNT

var yesBtn = document.querySelector('.yesbtn');

function clickYesBtn(){
    levelCounter ++;
    console.log(levelCounter);

    if (levelCounter == 1) {
        profielEen.classList.remove('active');
        profielEen.classList.add('yes');
        profielTwee.classList.remove('profile');
        profielTwee.classList.add('active');
    }

    if (levelCounter == 2) {
        profielTwee.classList.remove('active');
        profielTwee.classList.add('yes');
        profielDrie.classList.remove('profile');
        profielDrie.classList.add('active');
    }

    if (levelCounter == 3) {
        profielDrie.classList.remove('active');
        profielDrie.classList.add('yes');
        profielVier.classList.remove('profile');
        profielVier.classList.add('active');
    }

    if (levelCounter == 4) {
        profielVier.classList.remove('active');
        profielVier.classList.add('yes');
        profielVijf.classList.remove('profile');
        profielVijf.classList.add('active');
    }

    if (levelCounter == 5) {
        profielVijf.classList.remove('active');
        profielVijf.classList.add('yes');
    }
}

yesBtn.addEventListener('click', clickYesBtn);