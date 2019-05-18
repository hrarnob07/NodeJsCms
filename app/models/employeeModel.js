
var sql = require('./db.js');

var employee = function(employee){
    this.name = employee.name;
    this.age = employee.age;
    this.salary = employee.salary;
};

employee.getAllEmployee = function getAllEmployee(result) {
    sql.query("Select * from employee", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('tasks : ', res);  

             result(null, res);
            }
        });   
};

employee.create_employee = function create_employee(employee,result) {
    sql.query("INSERT INTO employee set ?", employee, function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('tasks : ', res);  

              result(null, {
                "sttus":"OK",
                "message":"employee created."
            });
            }
        });   
};

employee.get_a_employee = function (Id, result) {
    sql.query("Select * from employee where enployee_id = ? ", Id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
      
        }
    }); 
    
};



employee.delete_a_employee = function (Id, result) {
    sql.query("delete  from employee where enployee_id = ? ", Id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, {
                "sttus":"OK",
                "message":"employee delete"
            });
      
        }
    }); 
    
};
employee.update_a_employee = function (Id,employee, result) {
    sql.query("UPDATE employee set name=?,age=?,salary=? where enployee_id = ? ",[ employee.name,employee.age,employee.salary,Id], function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, {
                "sttus":"OK",
                "message":"employee delete"
            });
      
        }
    }); 
    
};


module.exports= employee;