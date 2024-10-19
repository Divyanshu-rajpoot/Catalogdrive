const fs = require('fs');

function findconstant(jsonfile){ 
    const data = JSON.parse(fs.readFileSync(jsonfile , 'utf8')); 
    console.log(data);

    const n = data.keys.n;
    const k = data.keys.k;

    let points = [];
    for(let key in data){
        console.log(key);
        if(key != 'keys'){
            let x = parseInt
            points.push(data[key]);
        }
    }
}

findconstant('testcase.json');