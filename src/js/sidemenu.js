let burger = document.querySelector('.burger')
let close = document.querySelector('.close')
let sidemenu = document.querySelector('.sidemenu')
let main = document.querySelector('.main')

burger.addEventListener('click', function (e) {
  e.stopPropagation()
  main.classList.toggle('transparent')
  sidemenu.classList.toggle('sidemenu__visible')
})

close.addEventListener('click', function () {
  main.classList.toggle('transparent')
  sidemenu.classList.toggle('sidemenu__visible')
})

let buttonChat = document.querySelector('.btn__chat')
let buttonChatHeader = document.querySelector('header .btn__chat')
let feedback = document.querySelector('.feedback')
let closeFeedback = document.querySelector('.feedback__close')
let buttonCall = document.querySelector('.btn__call')
let buttonCallHeader = document.querySelector('header .btn__call')
let callback = document.querySelector('.callback')
let closeCallback = document.querySelector('.callback__close')
let body = document.querySelector('.body')
buttonChatHeader.addEventListener('click', function (e) {
  e.preventDefault()
  e.stopPropagation()
  main.classList.add('transparent')
  feedback.classList.toggle('conection__visible')
})

buttonCallHeader.addEventListener('click', function (e) {
  e.preventDefault()
  e.stopPropagation()
  main.classList.add('transparent')
  callback.classList.toggle('conection__visible')
})

main.addEventListener('click', function () {
  main.classList.remove('transparent')
  sidemenu.classList.remove('sidemenu__visible')
  feedback.classList.remove('conection__visible')
  callback.classList.remove('conection__visible')
})

if (window.innerWidth >= 1366) {
  buttonChat.addEventListener('click', function (e) {
    e.preventDefault()
    main.classList.add('transparent')
    body.classList.add('no-scroll')
    feedback.classList.toggle('conection__visible')
  })

  buttonCall.addEventListener('click', function (e) {
    e.preventDefault()
    main.classList.add('transparent')
    body.classList.add('no-scroll')
    callback.classList.toggle('conection__visible')
  })
  closeFeedback.addEventListener('click', function (e) {
    main.classList.remove('transparent')
    e.preventDefault()
    body.classList.remove('no-scroll')
    feedback.classList.toggle('conection__visible')
  })
  closeCallback.addEventListener('click', function (e) {
    main.classList.remove('transparent')
    e.preventDefault()
    body.classList.remove('no-scroll')
    callback.classList.toggle('conection__visible')
  })
}

if (window.innerWidth <= 1366) {
  buttonChat.addEventListener('click', function (e) {
    e.preventDefault()
    main.classList.add('transparent')
    feedback.classList.toggle('conection__visible')
    
  })

  buttonCall.addEventListener('click', function (e) {
    e.preventDefault()
    main.classList.add('transparent')
    callback.classList.toggle('conection__visible')
  })
  closeFeedback.addEventListener('click', function (e) {
    e.preventDefault()
    main.classList.remove('transparent')
    feedback.classList.toggle('conection__visible')
    sidemenu.classList.remove('sidemenu__visible')
  })
  closeCallback.addEventListener('click', function (e) {
    e.preventDefault()
    main.classList.remove('transparent')
    callback.classList.toggle('conection__visible')
    sidemenu.classList.remove('sidemenu__visible')
  })
}
