const ratingBtn = document.querySelectorAll('.rating--btn')
const submitBtn = document.querySelector('.submit--btn')
const scaleNo = document.querySelector('.scale--number')
const container = document.querySelectorAll('.container')
let ratingvalue=[];

ratingBtn.forEach(btn => {
     btn.addEventListener('click', () => {
          ratingvalue.push(btn.innerHTML)
     })
})

submitBtn.addEventListener('click', () => {
     container.forEach(item => {
          if (ratingvalue.length > 0) {
               if(item.classList.contains('hidden')) {
               item.classList.remove('hidden')
          } else {
               item.classList.add('hidden')
               }

               scaleNo.innerHTML = ratingvalue[ratingvalue.length - 1]
          }
     })


});