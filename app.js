// Form Events
const nameSurname = document.querySelector('#name-surname');
const pName = document.querySelector('#p-name');
nameSurname.addEventListener('input', function () {
    pName.innerText = this.value;
});

const title = document.querySelector('#title');
const pTitle = document.querySelector('#p-title');
title.addEventListener('input', function () {
    pTitle.innerText = this.value;
});

const email = document.querySelector('#email');
const pEmail = document.querySelector('#p-email');
email.addEventListener('input', function () {
    pEmail.innerText = this.value;
});

const telephone = document.querySelector('#telephone');
const pTelephone = document.querySelector('#p-telephone');
telephone.addEventListener('input', function () {
    pTelephone.innerText = this.value;
});

const telephoneOther = document.querySelector('#telephone-other');
const pTelephoneOther = document.querySelector('#p-telephone-other');
telephoneOther.addEventListener('input', function () {
    pTelephoneOther.innerText = this.value;
});

const adres = document.querySelector('#adres');
const pAdres = document.querySelector('#p-adres');
adres.addEventListener('input', function () {
    pAdres.innerText = this.value;
});

// Roksit and DNSSense Create Image Event
const company = document.querySelector('#firma');
const sigFigure = document.querySelector('#sig-figure');
company.addEventListener('change', function () {
    if (this.value === 'Roksit') {
        const newFigure = document.createElement('img');
        newFigure.classList.add('sig-image');
        newFigure.setAttribute('src', '/assets/RoksitLogoSlogan.png')
        sigFigure.append(newFigure);
    } else if (this.value === 'DNSSense') {
        const newFigure = document.createElement('img');
        newFigure.classList.add('sig-image');
        newFigure.setAttribute('src', '/assets/DNSSenseLogo.svg')
        sigFigure.append(newFigure);
    }
});

// Roksit and DNSSense Add Website Adress Event
const emptyRightSide = document.querySelector('.empty-rightside');
company.addEventListener('change', function () {
    if (this.value === 'Roksit') {
        const webSite = document.createElement('div');
        webSite.classList.add('sig-website');
        webSite.innerText = 'www.roksit.com';
        emptyRightSide.append(webSite);
    } else if (this.value === 'DNSSense') {
        const webSite = document.createElement('div');
        webSite.classList.add('sig-website');
        webSite.innerText = 'www.dnssense.com';
        emptyRightSide.append(webSite);
    }
});

// Download Event
const downloadButton = document.querySelector('.download');
downloadButton.addEventListener('click', function () {
    htmlToImage.toJpeg(document.querySelector('.signature'), { quality: 1 })
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = `${nameSurname.value}_signature.jpeg`;
            link.href = dataUrl;
            link.click();
        });
})

// Form Reset Event
const deleteButton = document.querySelector('#delete-button');
const mainForm = document.querySelector('.main-form form');
deleteButton.addEventListener('click', function () {
    mainForm.reset();
    pName.innerText = "";
    pTitle.innerText = "";
    pEmail.innerText = "";
    pTelephone.innerText = "";
    pTelephoneOther.innerText = "";
    pAdres.innerText = "";
});

// Banner Delete Event
const bannerDeleteButton = document.querySelector('#banner-delete-button');
bannerDeleteButton.addEventListener('click', function () {
    const myImg = document.querySelector('.myImg');
    myImg.remove();
});

// Logo Delete Event
const logoDeleteButton = document.querySelector('#logo-delete-button');
logoDeleteButton.addEventListener('click', function () {
    const sigImg = document.querySelector('.sig-image');
    sigImg.remove();
});

// Website Delete Event
const websiteDeleteButton = document.querySelector('#website-delete-button');
websiteDeleteButton.addEventListener('click', function () {
    const sigWebsite = document.querySelector('.sig-website');
    sigWebsite.remove();
});

// Banner Create Event
const addBannerButton = document.querySelector('.add-banner-button');
const bannerCell = document.querySelector('.banner-cell');
addBannerButton.addEventListener('click', function () {
    const newImg = document.createElement('img');
    newImg.classList.add('myImg');
    bannerCell.append(newImg);
});

// Load Image Event for Banner
window.addEventListener('load', function () {
    document.querySelector('input[type="file"]').addEventListener('change', function () {
        if (this.files && this.files[0]) {
            var img = document.querySelector('.myImg');
            img.onload = () => {
                URL.revokeObjectURL(img.src);
            }
            img.src = URL.createObjectURL(this.files[0]);
        }
    });
});
