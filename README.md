Here are the End points for this Todo API:
  1. Register
     http://localhost:3000/auth/register
     method: post
     body: require
 3. Login
    http://localhost:3000/auth/login
    method: post
    body: require
 5. Add task
    http://localhost:3000/tasks/
    method: post
    body: require
 7. Get all task
    http://localhost:3000/tasks
    method: get
 8. Get task by Id
    http://localhost:3000/tasks/:id
 9. Update task
    http://localhost:3000/tasks/1
    method: put
 11. Delete task
     http://localhost:3000/tasks/:id
     method: delete
 13. Get filter task
     http://localhost:3000/tasks?isCompleted=true || http://localhost:3000/tasks?isCompleted=true
     method: get
 15. Get all users
     http://localhost:3000/users
     method: get
 17. Get refresh token
     http://localhost:3000/auth/refresh
     method: post
     authorization: refresh token require
