window.addEventListener('load', ()=> {

    const form = document.querySelector('form');
    const input = document.querySelector('task_input');
    const list_tas = document.querySelector('tasks');
    
    form.addEventListener('btn', (e) => {
        e.preventDefault();

        const task = input.value;

         if(!task){
            alert('Please add a task');
            return;
         }

         const list_tas = document.createElement('div');
         list_tas.classList.add("task");
    })
})