const checkComplete=()=>{//crear la cajita del check
    const i=document.createElement('i');
    i.classList.add('far','fa-check-square','icon');
    i.addEventListener('click',completeTask);
    return i;
}


 const completeTask=(evento1)=>{//funcion de check o nocheck
    const element = evento1.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
}

export default checkComplete