import auth from './auth'
import bcript from 'bcryptjs'

const acc ={

    signUp:(email,password,userName)=>{
        const salt = bcript.genSaltSync(10);
        const hash = bcript.hashSync(password,salt);


    },
    logIn:(email,password)=>{


        auth.authenticateAfterLogin();
    }

}

export default acc;