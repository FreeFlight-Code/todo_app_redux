import axios from 'axios';

export default class api {

    static readAll (){
        return fetch('https://practiceapi.devmountain.com/api/tasks/');
        
    }

    static create(obj) {
        return new Promise((resolve,reject)=>{
            //make web call //return axios.post('https://practiceapi.devmountain.com/api/tasks/create', obj);
            // .then((id)=>{
            //     resolve()
            // })
            //assumes recived id from call as number
            console.log('this will be the id of item added... obj = ', obj)
            resolve(7)
        })
    }

    static update(obj) {
        return new Promise((resolve)=>{
            // do some work
            console.log('receive an object to update... ', obj)
            resolve(true);
        })
    }

    static delete(id) {
        return new Promise((resolve)=>{
            console.log('api deleted item')
            resolve(true);
        })
    }
}