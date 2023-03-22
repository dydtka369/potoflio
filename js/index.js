
$(function(){
    var h1Tag = document.querySelector('.auto_text'); // h1 태그 자체 의미
    var h1Letter = document.querySelector('.auto_text').innerHTML; // h1 태그 내용 의미

$('button').click(function(){
    $('.auto_text').show();
    animation(h1Tag, h1Letter);
})

function animation(tag, letter){
    tag.innerHTML = '';
    for(let i=0; i < letter.length; i++){
        setTimeout(function(){
            tag.innerHTML += letter[i]
        }, (i+1)*100)

    }
    
}

// $(window).scroll(function(){
//     let pos = $(this).scrollTop();
//     if(pos>20){
//         $('header').addClass('ab')
//         $('nav > h1').addClass('ab')
//         $('.gnb__item > li').addClass('ab')
//     }else if(pos<=0){
//         $('header').removeClass('ad')
//         $('.head_inner > h1').css('color','#ccc')
//         $('.gnb__item').css('color',' hsla(0,0%,100%,.7)')
//     }
// })


})
