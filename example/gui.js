// const data=[
//     1,2,3,4,5,6
// ];

// function recursion(num){
//     if(num <= 1){
//         return num;
//     }else{
//         return num*recursion(num-1);
//     }
// }

// console.log(recursion(3));

const data = {
    a: [
        {
            '1': '1',
            '2': '2',
            '3': '3',
        }
    ],
    b: [
        {
            11: '11',
            12: '12',
            13: '13'
        }
    ]
}

const recursion = data => {
    for (let i in data) {
        if(typeof data[i] == 'string') {
            console.log(data[i])
        }else{
            recursion(data[i])
        }
    }
}

recursion(data);
