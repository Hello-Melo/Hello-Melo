function checkAddProduct(){

    let productId = document.getElementById("productId");
    let name = document.getElementById("name");
    let unitPrice = document.getElementById("unitPrice");
    let unitInStock = document.getElementById("unitInStock");

    //상품 아이디 체크
    if(!checkAddProduct(\^P[0-9]{4,11}$/, productId, 
        "[상품코드]\nP와 숫자를 조합하여 5~12자까지 입력하세요. \n 첫글자는 반드시 P로 시작하세요."))
        return false;

    //상품명체크
    if(name.value.length < 4 || name.value.length > 12){
        alert("[상품명]\n 최소 4자에서 최대 12자까지 입력하세요 ");
        name.Select();
        name.focus();
        return false;
        }


    //상품 가격 체크
        if(unitPrice.value.length == 0 || isNaN(unitPrice.value)){
            alert("[가격] \n 숫자만 입력하세요.");
            unitPrice.Select();
            unitPrice.focus();
            return false;
        }

        if(unitPrice.value < 0){
            alert("[가격]\n 음수는 입력할 수 없습니다.");
            unitPrice.Select();
            unitPrice.focus();
            return false;
        } else if(!check(/^\d+(?:[.]?[\d]?[\d])?$/, unitPrice, 
        "[가격]\n 소숫점 둘째 자리까지만 입력하세요."))
        return false;
        

        if (isNaN(unitInStock.value)){
            alert("[재고 수]\n 숫자만 입력하세요");
            unitInStock.Select();
            unitInStock.focus();
            return false;
        }

        function check(regExp, e, msg){
            if (regExp.test(e.value)){
                return true;
            }
            alert(msg);
            e.Select();
            e.focus();
            return false;
        }
        
        document.newProduct.submit();


    }