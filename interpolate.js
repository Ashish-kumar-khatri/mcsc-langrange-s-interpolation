let result = 0;

export default function getLangrangeInterpolation(xx,n,x,y){
    for(let i = 0 ; i < n ; i++){
            let term = 1;
            for(let j = 0 ; j < n ; j++){
                if(j !== i){
                    term *= (xx - x[j])/(x[i] - x[j]);
                    // console.log(`(${xx}-${x[j]}) / (${x[i]} - ${x[j]}) `)
                }
            }
            result = result + term * y[i];
            // console.log('result = ',result)
            // console.log(`end of ${i+1}th term calculation`,term * y[i])
    }
    return parseFloat(result).toFixed(4);
}