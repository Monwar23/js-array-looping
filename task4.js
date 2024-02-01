const statement = 'I am a hard working person'

let state=statement.split(' ')
console.log(state)


let reversed=[];
for(let i=0;i<state.length;i++)
{
    const stat=state[i];
    reversed.unshift(stat)
    
}
const reverse =reversed.join(' ')
console.log(reverse)