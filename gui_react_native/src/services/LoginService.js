import React from 'react';
import ServiceCommon from './ServiceCommon';
import apiCaller from '../utils/ApiCaller';

export default class LoginService extends ServiceCommon{
    
    static login = (userName, password, remember = false) =>{
        apiCaller('auth/login',"POST",JSON.stringify({
            user_name : userName,
            passowrd: password
        })).then((responseJson)=>{
            console.log(responseJson);
        });
    }
}