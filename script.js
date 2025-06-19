let todo = []
            let todo1 = []
            let todo2 = [];
            
            function render(){
                todo2list = '';
                for(let i =0;i<todo2.length;i++){
                    let {task,date} = todo2[i];
                    todo2list += `<div>${task}</div>
                            <div>${date}</div>
                           <button onclick="
                              todo2.splice(${i},1);
                              render();
                           ">
                              Delete
                            </button>
                        `
                }
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