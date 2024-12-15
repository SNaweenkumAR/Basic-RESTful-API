const data={
    employee:require('../model/employee.json'),
    setEmployee :function(data){this.employee = data}

}
const getAllEmployee = (req,res) =>{
    res.json(data.employee);
 }

 const createEmployee =(req,res) => {
    const newEmployee ={
        id:data.employee?.length?data.employee[data.employee.length -1].id+1:1,
        'firstname':req.body.firstname,
        'lastname':req.body.lastname
    }
    if(!newEmployee.firstname || !newEmployee.lastname ){
        return res.status(400).json({'message':"first and last name is required"})
    }
   data.setEmployee([...data.employee,newEmployee]);
   res.status(201).json(data.employee);
   
 }

 const updateEmployee =(req,res) => {
  
        const employe = data.employee.find(emp => emp.id === parseInt(req.body.id));
        if(!employe){
                  return res.status(400).json({"message":`Employee ID ${req.body.id} not found`});
        }
        if(req.body.firstname) employe.firstname =req.body.firstname;
        if(req.body.lastname) employe.lastname =req.body.lastname;
        const filterArray = data.employee.filter(emp => emp.id !== parseInt(req.body.id));
        const unsortedArray = [...filterArray,employe];
        data.setEmployee(unsortedArray.sort((a,b) => a.id > b.id ? 1 : a.id< b.id ? -1 : 0))
        res.json(data.employee)
      
    }


 const deleteEmployee = (req,res) => {
    const employe = data.employee.find(emp => emp.id !== parseInt(req.body.id));
    if(!employe){
              return res.status(400).json({"message":`Employee ID ${req.body.id} not found`});
    }
    const filterArray = data.employee.filter(emp => emp.id === parseInt(req.body.id));
    data.setEmployee([...filterArray]);
    res.json(data.employee)
 }

 const getEmployee = (req,res) => {
    const employe = data.employee.find(emp => emp.id === parseInt(req.params.id));
    if(!employe){
              return res.status(400).json({"message":`Employee ID ${req.params.id} not found`});
    }
    res.json(employe);

 }

 module.exports={
    createEmployee,
    updateEmployee,
    getAllEmployee,
    deleteEmployee,
    getEmployee
 }