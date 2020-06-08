const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

//Assign the eventhandler to an event:
eventEmitter.on('myfirstmodule',(num1,num2)=>{
 
//Create an event handler:
    console.log(num1 + num2 );
});

//Fire the 'name' event:
eventEmitter.emit('myfirstmodule',1,2);

class person extends EventEmitter{
    constructor(name){
        super();
        this._name =name;
    }

get name(){
    return this._name;
    }
}

let pooja = new person('pooja');
let limbola = new person('limbola');
//Create an event handler:
limbola.on('name',()=>{
    console.log('my name is' + limbola.name);
});
pooja.on('name',()=>{
    console.log('my name is' + pooja.name);
});
//Fire the 'name' event:
pooja.emit('name');
limbola.emit('name');







