function addItem(){
    let list = document.querySelector('#do_list');
    let todo = document.querySelector('#item1');
    let list2 = document.createElement('li');
    let btn1 = document.createElement('button');
    
    if(todo.value.trim()==''){
        alert("내용을 입력하세요");
        todo.focus();
        return; 
    }
    
    btn1.className = 'close'; 
    btn1.innerHTML = '&times';
    btn1.onclick = function(e){   
        list.removeChild(e.target.parentNode);
    }

    list2.className = 'list-group-item';
    list2.innerText = todo.value; 
    list2.appendChild(btn1);
    list.append(list2);

    todo.value = '';
    todo.focus();
}