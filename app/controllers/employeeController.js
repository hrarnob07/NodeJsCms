
var employee = require('../models/employeeModel.js');

exports.list_all_employee = function(req, res) {
    employee.getAllEmployee(function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
  
};

exports.create_employee=function(req, res){
    var new_employee = new employee(req.body);
    
    if(!new_employee.name||!new_employee.age||!new_employee.salary ){
        res.status(400).send({ error:true, message: 'Please provide emplyee proper info.' });
    }
     
    else{

        employee.create_employee(new_employee, function(err, task) {

        if (err)
            {res.send(err);}
        res.json(task);});
     }
};

exports.read_a_employee=function(req, res){
    employee.get_a_employee(req.params.employeeId,function(err, task){
        if (err)
           {res.send(err);}
        res.json(task);
    });
};

exports.delete_employee=function(req, res){
    employee.delete_a_employee(req.params.employeeId,function(err, task){
        if (err)
           {res.send(err);}
        res.json(task);
    });
};

exports.update_a_employee=function(req, res){
    employee.update_a_employee(req.params.employeeId, new employee(req.body), function(err, task){
        if (err)
           {res.send(err);}
        res.json(task);
    });
};