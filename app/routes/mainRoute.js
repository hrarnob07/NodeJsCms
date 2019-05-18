 
module.exports = function(app) {
  var todoList = require('../controllers/appController');
  var employee = require('../controllers/employeeController');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);
   
   app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

   app.route('/employee')
       .get(employee.list_all_employee) 
       .post(employee.create_employee) ;

   app.route('/employee/:employeeId')
       .get(employee.read_a_employee) 
       .delete(employee.delete_employee) 
       .put(employee.update_a_employee);

    };

  
  