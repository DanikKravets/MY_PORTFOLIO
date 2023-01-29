let nav = document.querySelector('#nav')
let navBtn = document.querySelector('#nav-btn')
let navBtnImg = document.querySelector('#nav-btn-img')


navBtn.onclick = () => {
    if (nav.classList.toggle('open')){
        navBtnImg.src = "../static/files/img/navigation/x.png"
    } else {
        navBtnImg.src = "../static/files/img/navigation/navbtn.png"
    }
}
