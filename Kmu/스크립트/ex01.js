// $(document).ready(function(){  //이게 정석이나

    $(function(){  // 이렇게 쓴다. 이렇게 써도 인식함.
        // 이걸로 문서항목에 있는 제이쿼리를 불러오는 것

    $('.btn').click(function(){             
        // btn 클레스가 있는 것들을 클릭했을시 이 코드 실행
        alert("되냐?");
        });
        
       $('#btn2') .click(function(){
        $('p').css('color', 'blue');
       });





});



