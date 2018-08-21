



let tang
let deng
let pan

const func = (tang, deng, pan) => {
    tang && (console.log('tang'), console.log('tang'), console.log('tang')) 
         || deng && (console.log('deng'), console.log('deng')) 
         || pan && (console.log('pan'))
}

func('tang', undefined, 'pan')


console.log(1 && 3 || 4)