window.addEventListener('loas', ()=> {

    const form = document.querySelector('form');
    const input = document.querySelector('task_input');
    const list_tas = document.querySelector('tasks');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

         if(!task){
            alert('Please add a task');
         }
    })
})