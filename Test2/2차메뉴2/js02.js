$(function(){
  

    //자바스크립트 객체 : {};
    //자바스크립트 배열 : [];
    $('.gnb ul li').hover(function(){
        // $(this).find('.submenu').stop().slideToggle();
      $(this).css({
        background : 'yellow' ,
        border : '1px solid red'
      }).mouseout(function(){
          $(this).css({
            background : '#fff',
              border : '1px solid blue'
          })
      })
    });




});