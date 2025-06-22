let todo = []
            let todo1 = []
            let todo2 = [];
            
            function render(){
                let todo2list = '';
                todo2.forEach((todoObject,i)=>{
                    let {task,date} = todoObject;
                    todo2list += `<div>${task}</div>
                            <div>${date}</div>
                           <button class="delete-btn" onclick="
                              todo2.splice(${i},1);
                              render();
                           ">
                              Delete
                            </button>
                        `
                })
                document.querySelector('.content').innerHTML = todo2list
            }

            function toDoList3(){
                let date = document.querySelector('.date1').value;
                let task = document.querySelector('.task').value;
                todo2.push({task,date});
                render();
                document.querySelector('.date1').value = '';
                document.querySelector('.task').value = '';
            }

let addButton = document.querySelector('.add-button');
addButton.addEventListener('click',toDoList3);