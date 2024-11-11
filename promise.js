let as = new Promise((resolve , reject )=>{
    let a = true;
    let i = false;

    if(i){
        resolve('Done');
        
        

    }
    else {
        reject('Not done')
    }
})

as
.then((data)=>{

    console.log(data);
    
    console.log('Hello world');
    
})
.catch((data)=>{
    console.log(data);
    
    console.log('Not Hello World');
})
.finally(()=>{
    console.log('This is Finally value');
    
})