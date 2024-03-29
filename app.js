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
    if (this.value.includes('Manhattan')) {
        const [first, second] = this.value.split(',');
        pAdres.innerHTML = `${first},<br>${second}`;
        return;
    }
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
    // newFigure.setAttribute('src', '/assets/RoksitLogoSlogan.png')
    newFigure.setAttribute('src', '/assets/dnssense-formerly.png')
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
    newFigure.setAttribute('src', '/assets/DNSSenseLogo.png')
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
    // webSite.innerText = 'www.roksit.com';
    webSite.innerText = 'www.dnssense.com';
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

// Download Event1
function downloadImage(base64, fileName) {
    var link = document.createElement('a');
    link.download = fileName;
    link.href = base64;
    link.click();
}

// Download Event2
const downloadButton = document.querySelector('.download');
const signatureArea = document.querySelector(".signature");
downloadButton.addEventListener('click', function () {
    signatureArea.classList.remove('form-control');
    const signatureWidth = 508;
    const signatureHeight = 345;
    // const signatureHeight = 325;
    // const signatureHeight = {first: 325, second: 195};
    // if (bannerCell !== '') {
    //     signatureHeight.first;
    // } else {
    //     signatureHeight.second;
    // }
    const options = {
        quality: 1,
        canvasWidth: signatureWidth * 1.1,
        canvasHeight: signatureHeight * 1.1,
        skipAutoScale: true,
        pixelRatio: 1
    }
    htmlToImage.toJpeg(signatureArea, options)
        .then(async function (dataUrl) {
            downloadImage(dataUrl, `${nameSurname.value}_signature.jpeg`);
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
    signatureArea.classList.add('form-control');
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


// Banner Delete Event (optinal)
// const bannerDeleteButton = document.querySelector('#banner-delete-button');
// bannerDeleteButton.addEventListener('click', function () {
//     const myImg = document.querySelector('.form-banner');
//     myImg.remove();
//     inputFile.value = '';
//     viewArea.classList.add('form-control');
//     signatureArea.classList.remove('form-control');
//     signatureArea.style.height = '195px';
//     inputFile.disabled = false;
//     inputFile.style.cursor = 'auto';
// });

// Banner Create Event (optional)
// const addBannerButton = document.querySelector('.add-banner-button');
// const bannerCell = document.querySelector('.banner-cell');
// addBannerButton.addEventListener('click', function () {
//     const newImg = document.createElement('img');
//     newImg.classList.add('form-banner');
//     bannerCell.append(newImg);
//     viewArea.classList.remove('form-control');
//     signatureArea.classList.add('form-control');
//     signatureArea.style.height = '325px';
// });

// Load Image Event for Banner (optional)
// const viewArea = document.querySelector('.view');
// document.querySelector('input[type="file"]').addEventListener('change', function () {
//     if (this.files && this.files[0]) {
//         var img = document.querySelector('.form-banner');
//         const FR = new FileReader();
//         FR.addEventListener("load", function (evt) {
//             img.src = evt.target.result;
//         });
//         FR.readAsDataURL(this.files[0]);
//     }
//     if (inputFile.value !== '') {
//         inputFile.disabled = true;
//         inputFile.style.cursor = 'not-allowed';
//     };
// });

// Input File Change Event
// const inputFile = document.querySelector('#input-file');
// inputFile.addEventListener('change', function () {
//     if (inputFile.value.length !== 0) {
//         console.log ('File Loaded!');
//         viewArea.classList.remove('form-control');
//         signatureArea.classList.add('form-control');
//         signatureArea.style.height = '325px';
//     }
// })

// Input File Click Event
// inputFile.addEventListener('click', function () {
//     if (inputFile.value.length === 0) {
//         viewArea.classList.add('form-control');
//         signatureArea.classList.remove('form-control');
//         signatureArea.style.height = '195px';
//     }
//     else {
//         viewArea.classList.remove('form-control');
//         signatureArea.classList.add('form-control');
//         signatureArea.style.height = '325px';
//     }
// })
