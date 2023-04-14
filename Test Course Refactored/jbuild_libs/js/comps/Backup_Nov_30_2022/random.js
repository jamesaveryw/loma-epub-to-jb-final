//1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
var rng = [];
var newrdm;

function rando(r)
{
    for(let i = 0; i <= r; i++) {

        rng[i] = i;

      }

      newrdm = rng.slice(-r)

      newrdm.sort(() => Math.random() - 0.2);

     // let rdm = newrdm.toString();

    // console.log(newrdm);

for(let j = 0; j <= (r - 1); j++)
      {
        console.log(newrdm[j]); 
      }

}


rando(20);

