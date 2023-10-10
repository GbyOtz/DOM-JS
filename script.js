import deleteIcon from "./componentes/deleteCom.js";
import checkComplete from "./componentes/checkCom.js";

(()=>{
    const btn= document.querySelector('[data-form-btn]')
    const createTask=(evento)=>{
        evento.preventDefault();//previene ue todos los elementos vengan de manera automatica
        const input= document.querySelector('[data-form-input]');
        console.log(input.value);
        const value=input.value
        const list=document.querySelector('[data-list]');//inicializa lista
        const task=document.createElement('li');//creando elementos para ul
        task.classList.add('card'); //asignar los estilos del css
        input.value='';//iniciar en vacio
        const taskContent= document.createElement('div');//crear elemento div para li
        const titleTask= document.createElement('span');//crear elemento span 
        titleTask.classList.add('task')
        titleTask.innerText=value;//igualar valores
                taskContent.appendChild(checkComplete());//meter el <i> dentro del div, el primero en ingresar
                taskContent.appendChild(titleTask);//con appendchild se añade el span dentro del div, el segundo en entrar al div
            
            const content=`
                <i class="fas fa-trash-alt trashIcon icon"></i>`;//crear icono de basura
            //task.innerHTML=content;
            task.appendChild(taskContent);//dentro del task(li) se almacena el taskcontent(div)
            task.appendChild(deleteIcon());
            list.appendChild(task);//dentro de list(ul) se almacena el task(li) 

    };

    btn.addEventListener('click',createTask);

    //console.log(btn)

}) ();









