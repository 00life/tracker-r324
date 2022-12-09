import React from 'react'

function Test() {
    
    let url = 'https://jsonplaceholder.typicode.com/todos/1';
    let dict_data = {};

    // fetch(url, dict_data)
    //     .then((e)=>{return e.json()})
    //     .then((e)=>{console.log(e.id)})
    //     .catch((err)=>{console.log(err)})
        
    (async()=>{

        try{
            let resp1 = await fetch(url, dict_data);
            let resp2 = await resp1.json();
            console.log(resp2.id)

        }catch(err){console.log(err)}

    })()
    
    















    // (async()=>{

    //     let data_string = JSON.stringify('Hello world');
        
    //     let myblob = new Blob([data_string],{type:'text'});
    //     let data_form = new FormData().append("upfile",myblob);
        
    //     let dict_data ={method:'POST', body: data_form};

    //     try{
    //         let resp1 = await fetch('https://jsonplaceholder.typicode.com/todos/1', dict_data);
    //         // let resp2 = await resp1.json();
    //         console.log(resp1)

    //     }catch(err){console.log('ERR: '+err)}
    // })()











  return (
    <div>
        Test
    </div>
  )
}

export default Test