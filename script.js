

window.addEventListener('load', ()=> {

    const form = document.querySelector("#form");
    const input = document.querySelector("#task_input");
    const list_tas = document.querySelector("#list");
    
    form.addEventListener('btn', (e) => {
        e.preventDefault();

        const task = input.value;

         if(!task){
            alert('Please add a task');
            return;
         }

         const list_tas = document.createElement('div');
         list_tas.classList.add("task");

         const task_con = document.createElement('div');
         task_con.classList.add("task");
         task_con.innerText = task;

         list_tas.appendChild(task_con);
         list_tas.appendChild(list_tas);


    });
}); 