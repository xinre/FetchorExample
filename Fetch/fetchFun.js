import 'whatwg-fetch';
import { message  } from 'antd';

export default class Fetch{
    static fetch({apiName,sumparams}){
        switch(sumparams.mothod){
            case 'get':
                return this.get({apiName,sumparams});
                break;
            case 'post':
                return this.post({apiName,sumparams});
                break;
            default:
            message.err('接口预定义错误,请检查请求方式');
            
        }
    }
    static get({apiName,sumparams}){
        let urlParams = this.disposeFun('get',sumparams.params?sumparams.params:null)

       return fetch(`${apiName}${urlParams}`,{
            mothod:'GET',
        }).then((response) => {
            return response.json()
        }).then((responseData) => {
            return responseData
        }).catch((err) => {
            // throw err;
            console.log(err);
        })
    }
    static post({apiName,sumparams}){
        let urlParams = this.disposeFun('post',sumparams.params?sumparams.params:null)
        fetch(apiName,{
            mothod:'POST',
            mode: "cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body:urlParams,
        }).then((response) => {
            return response.json()
        }).then((responseData) => {
            return responseData
        }).catch((err) => {
            // throw err;
            console.log(err);
        })
    }
    // static post({apiName,sumparams}){
    //     fetch(apiName,{
    //         mothod:'POST',
    //         headers:{
    //             'Content-Type': 'application/json'
    //         },
    //         body:JSON.stringify(sumparams.params)
    //     }).then((response) => {
    //         return response.json()
    //     }).then((responseData) => {
    //         return responseData
    //     }).catch((err) => {
    //         // throw err;
    //         return err
    //     })
    // }
    static disposeFun(...rest){
        let resultValue = [];
        if(rest[1]){
            if(rest[0]==='get'){
                for(let item in rest[1]){
                    resultValue.push(`${item}=${rest[1][item]}`);
                }
                return '?'+resultValue.join("&");
            }else{
                for(let item in rest[1]){
                    resultValue.push(`${item}=${rest[1][item]}`);
                }
                return resultValue.join("&");
            }
        }else{
            return '';
        }
    }
}