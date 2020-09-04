
//This code creates a the parent class that will be the blueprint for Engineer, Intern and MAnager Classes

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    
    getId() {
        return this.id;
    }

    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}

//Exports object and allows it to me modulized. 
module.exports = Employee;
