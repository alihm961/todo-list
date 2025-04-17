JavaScript Logic

1- Get DOM Elements

I started by selecting element like input box, button, task list, and filters using:
document.getElementById() and document.querySelectorAll().

2- Add Task
 
 when the user type a task and click "Add", we take the input value using .value.trim() . and add it as an object to a task array:
 {text: 'buy milk', completed: false} . then call renderTask() to show the updated list.

3- Render Tasks

the renderTask() function -clears the list using taskList.innerHTML = ""
                          - loop through the task arrays
                          -create a new <li> element for each task
                          -Adds a span (task text) and a remove button
                          - uses .appenChild() to insert each task into the list.

4- Toggle Complete

when you click a task's text: -it runs toggleCompleted(index)
                              - this changes task.comleted = true/false
                              - then re-render the list to update the visual

5- Remove Task 

clicking the "Remove" button calls removeTask(index), which: - removes the task from the array using .splice()
                                                             - re-render lisr

6- Filter Tasks (bonus)

when clicking the "completed"/"pending" filter: - it sets the active filter and call renderTasks(filter)
                                                - inside renderTasks(), we I use .filter() on the tasks array
                                                - show only tasks where completed = true or false

