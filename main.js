const fs = require('fs');

function findconstant(jsonfile){ 
    const data = JSON.parse(fs.readFileSync(jsonfile , 'utf8')); 
    console.log(data);

    const n = data.keys.n;
    const k = data.keys.k;

    let points = [];
    for(let key in data){
        // console.log(key);
        if (key !== 'keys') {
            let x = parseInt(key); // x is the key itself
            let base = parseInt(data[key].base);
            let y = decodeBaseValue(data[key].value, base); //this will decode the value with the given base
            points.push([x, y]);
        }
    }
    const constantTerm = lagrangeInterpolation(points, k);
    return constantTerm;
}


function decodeBaseValue(value, base) {
    return parseInt(value, base);
}

function lagrangeInterpolation(points, k) {
    let constantTerm = 0;
    
    for (let i = 0; i < k; i++) {
        let [xi, yi] = points[i];
        let term = yi;
        for (let j = 0; j < k; j++) {
            if (i !== j) {
                let [xj, _] = points[j];
                term *= (0 - xj) / (xi - xj);
            }
        }
        console.log(term)
        constantTerm += term;
    }

    return Math.round(constantTerm); // rounding off
}

// const answer1 = findconstant('testcase.json');
const answer2 = findconstant('testcase2.json');
// console.log(answer1);
console.log(answer2);