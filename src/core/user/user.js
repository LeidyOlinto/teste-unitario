class User{
    constructor(name, password ){
        this.name = name ;
        this.password= password;

    }

    getName =()=> this.name;
    getPassword =() => this.password;

//*********************************************** */
//esta dando error.
    //setName(name) => this.name =  name;
    //setPassword(password) => this.password = password;
//*********************************************** */


    //testa a autenticação
    auth(name, password){
        if(name === this.name && password === this.password){
            console.log('Authenticad');
            return true;
        }else{
            console.log('Login Invalid');
            return false;
        }

    }

 }
 module.exports = User;