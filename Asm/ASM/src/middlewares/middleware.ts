import {Request,Response,NextFunction} from 'express';
export const middlerwares =(req:Request,res:Response,next:NextFunction)=>{
    if(!localStorage.getItem('user')){
        return window.location.href = '/'
    }
    req
    res
    next();
}