$(function(){
    
    // DOM 이라고 부름 doucument object model
    let menu = $('.gnb ul li');
    
    //선택자. 동작함수(익명함수)
    menu.click(function(e){
        e.preventDefault();
        menu.css('border', '10px solid yellow')
    });



})