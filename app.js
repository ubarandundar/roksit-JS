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

// Roksit and DNSSense Create Image Event (for Roksit)
const sigRoksitRadio = document.querySelector('#sig-roksit-radio');
const sigFigure = document.querySelector('#sig-figure');
sigRoksitRadio.addEventListener('change', function () {
    const sigImg = document.querySelector('.sig-image');
    if (sigImg) {
        sigImg.remove();
    } const newFigure = document.createElement('img');
    newFigure.classList.add('sig-image');
    newFigure.setAttribute('src', '/assets/RoksitLogoSlogan.png')
    sigFigure.append(newFigure);
});

// Roksit and DNSSense Create Image Event (for DNSSense)
const sigDNSSenseRadio = document.querySelector('#sig-dnssense-radio');
sigDNSSenseRadio.addEventListener('change', function () {
    const sigImg = document.querySelector('.sig-image');
    if (sigImg) {
        sigImg.remove();
    } const newFigure = document.createElement('img');
    newFigure.classList.add('sig-image');
    newFigure.setAttribute('src', '/assets/DNSSenseLogo.svg')
    sigFigure.append(newFigure);
});

// Roksit and DNSSense Add Website Adress Event (for Roksit)
const emptyRightSide = document.querySelector('.empty-rightside');
sigRoksitRadio.addEventListener('change', function () {
    const sigWebsite = document.querySelector('.sig-website');
    if (sigWebsite) {
        sigWebsite.remove();
    } const webSite = document.createElement('div');
    webSite.classList.add('sig-website');
    webSite.innerText = 'www.roksit.com';
    emptyRightSide.append(webSite);
});

// Roksit and DNSSense Add Website Adress Event (for DNSSense)
sigDNSSenseRadio.addEventListener('change', function () {
    const sigWebsite = document.querySelector('.sig-website');
    if (sigWebsite) {
        sigWebsite.remove();
    } const webSite = document.createElement('div');
    webSite.classList.add('sig-website');
    webSite.innerText = 'www.dnssense.com';
    emptyRightSide.append(webSite);
});

// Download Event
function downloadImage(base64, fileName) {
    var link = document.createElement('a');
    link.download = fileName;
    link.href = base64;
    link.click();
}

// Download Event
const downloadButton = document.querySelector('.download');
const signatureArea = document.querySelector(".signature");
downloadButton.addEventListener('click', function () {
    const signatureWidth = 420;
    const signatureHeight = 180;
    const options = {
        quality: 1,
        canvasWidth: signatureWidth,
        canvasHeight: signatureHeight,
        skipAutoScale: true,
        pixelRatio: 1
    }
    htmlToImage.toJpeg(signatureArea, options)
        .then(async function (dataUrl) {
            downloadImage(dataUrl, `${nameSurname.value}_signature.png`);
        });
});

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

// Localstorage SetItem Event
downloadButton.addEventListener('click', function () {
    window.localStorage.setItem('employee', nameSurname.value);
    window.localStorage.setItem('title', title.value);
    window.localStorage.setItem('email', email.value);
    window.localStorage.setItem('telephone', telephone.value);
    window.localStorage.setItem('telephoneOther', telephoneOther.value);
    window.localStorage.setItem('address', adres.value);
});

// Localstorage GetItem Event
document.addEventListener('DOMContentLoaded', function () {
    const employeeData = window.localStorage.getItem('employee');
    nameSurname.value = employeeData;
    const titleData = window.localStorage.getItem('title');
    title.value = titleData;
    const emailData = window.localStorage.getItem('email');
    email.value = emailData;
    const telephoneData = window.localStorage.getItem('telephone');
    telephone.value = telephoneData;
    const telephoneOtherData = window.localStorage.getItem('telephoneOther');
    telephoneOther.value = telephoneOtherData;
    const addressData = window.localStorage.getItem('address');
    adres.value = addressData;
    mainForm.querySelectorAll("input, select").forEach(e => {
        // trigger change evt for selects
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("change", false, true);
        e.dispatchEvent(evt);
        // trigger input evt for selects
        evt.initEvent("input", false, true);
        e.dispatchEvent(evt);
    })
});

// Radio Buttons Selection (can made in JS if requested)
// const formCheckInput = document.querySelector('.form-check-input');
// const radioButtons = document.querySelectorAll('input[name="company"]');
// formCheckInput.addEventListener("click", () => {
//     let selectedCompany;
//     for (const radioButton of radioButtons) {
//         if (radioButton.checked) {
//             selectedCompany = radioButton.value;
//             break;
//         }
//     }
// });


// // Roksit and DNSSense Add Website Adress Event (related to dropdown menu)
// const emptyRightSide = document.querySelector('.empty-rightside');
// company.addEventListener('change', function () {
//     const sigWebsite = document.querySelector('.sig-website');
//     if (sigWebsite) {
//         sigWebsite.remove();
//     } if (this.value === 'Roksit') {
//         const webSite = document.createElement('div');
//         webSite.classList.add('sig-website');
//         webSite.innerText = 'www.roksit.com';
//         emptyRightSide.append(webSite);
//     } else if (this.value === 'DNSSense') {
//         const webSite = document.createElement('div');
//         webSite.classList.add('sig-website');
//         webSite.innerText = 'www.dnssense.com';
//         emptyRightSide.append(webSite);
//     }
// });


// // Roksit and DNSSense Create Image Event (related to dropdown menu)
// const company = document.querySelector('#firma');
// const sigFigure = document.querySelector('#sig-figure');
// company.addEventListener('change', function () {
//     const sigImg = document.querySelector('.sig-image');
//     if (sigImg) {
//         sigImg.remove();
//     } if (this.value === 'Roksit') {
//         const newFigure = document.createElement('img');
//         newFigure.classList.add('sig-image');
//         newFigure.setAttribute('src', '/assets/RoksitLogoSlogan.png')
//         sigFigure.append(newFigure);
//     } else if (this.value === 'DNSSense') {
//         const newFigure = document.createElement('img');
//         newFigure.classList.add('sig-image');
//         newFigure.setAttribute('src', '/assets/DNSSenseLogo.svg')
//         sigFigure.append(newFigure);
//     }
// });

// // Banner Delete Event (no need anymore)
// const bannerDeleteButton = document.querySelector('#banner-delete-button');
// bannerDeleteButton.addEventListener('click', function () {
//     const myImg = document.querySelector('.myImg');
//     myImg.remove();
// });


// // Logo Delete Event (no need anymore)
// const logoDeleteButton = document.querySelector('#logo-delete-button');
// logoDeleteButton.addEventListener('click', function () {
//     const sigImg = document.querySelector('.sig-image');
//     sigImg.remove();
// });


// // Website Delete Event (no need anymore)
// const websiteDeleteButton = document.querySelector('#website-delete-button');
// websiteDeleteButton.addEventListener('click', function () {
//     const sigWebsite = document.querySelector('.sig-website');
//     sigWebsite.remove();
// });


// // Banner Create Event (no need anymore)
// const addBannerButton = document.querySelector('.add-banner-button');
// const bannerCell = document.querySelector('.banner-cell');
// addBannerButton.addEventListener('click', function () {
//     const newImg = document.createElement('img');
//     newImg.classList.add('myImg');
//     bannerCell.append(newImg);
// });


// // Load Image Event for Banner (no need anymore)
// document.querySelector('input[type="file"]').addEventListener('change', function () {
//     if (this.files && this.files[0]) {
//         var img = document.querySelector('.myImg');
//         const FR = new FileReader();

//         FR.addEventListener("load", function (evt) {
//             img.src = evt.target.result;
//         });

//         FR.readAsDataURL(this.files[0]);
//     }
// });