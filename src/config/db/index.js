const mongoose = require ('mongoose'); 

async function connect (){ 

    try {
        await mongoose.connect('mongodb://127.0.0.1/lamborghini_collection');
        console.log('connetc successfuly');
    } catch (error) {
        console.log('connetc fail');
    }

}

module.exports={connect};