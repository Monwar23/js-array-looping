// const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// const reversed=[]
// for(let i=0;i<colors.length;i++){
//     const color=colors[i]
//     reversed.unshift(color)
// }
// console.log(reversed)


const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const reversed=[]
let i=0
while(i<colors.length){
    
    const color=colors[i]
    i++
    reversed.unshift(color)
}
console.log(reversed)