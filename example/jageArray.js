function conNumber(){
    for(let i=0; i<100; i++){
        let count = i%3&&i%5;
        // let countf = i%5;
        switch (count){
            case 0:
                console.log('fazz');
                break;
            // case i%5===0:
            //     console.log('bbbb');
            //     break;
            // case i%3===0 && i%5===0:
            //     console.log('fazzbbbb');
            //     break;
            default:
                console.log(i)
        }
    }
}
conNumber();