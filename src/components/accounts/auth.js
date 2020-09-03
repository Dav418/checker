import Cookies from 'js-cookie'

const auth ={

    isAuthenticated:()=>{return Cookies.get("access_token")},

    authenticateNotFirstTime:()=>{
        if(Cookies.get("access_token")){
            return true
        }else if(Cookies.get("refresh_token")){
            const in30Minutes = 1/48;
            Cookies.set("access_token",true, {expires: in30Minutes} )
            return true;
        }
        return false;
    },

    authenticateAfterLogin:()=>{
        const in30Minutes = 1/48;
        Cookies.set("access_token",true, {expires: in30Minutes} )
        Cookies.set('refresh_token', true, { expires: 7 })
    },

    killAllCookies:()=>{
        Cookies.remove("access_token")
        Cookies.remove("refresh_token")
    }

}

export default auth
