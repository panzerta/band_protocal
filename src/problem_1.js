const babyBoss = (input) => {
  try {
    if(1000000 < input.length || input.length < 0) {
      throw new Error('unaccept input') 
    }

    let isGoodBoy = true;
    if(input[0] === 'R' || input[input.length - 1] === 'S') {
      isGoodBoy = false;
    } else {
      let sum = 0;
      for (let i = 0; i < input.length; i++) {
        const currentCharacter = input.charAt(i)
        if (currentCharacter === 'S') {
          sum = sum + 1;
        } else {
          sum = sum - 1;
          if (sum < 0) {
            sum = 0;
          }
        }

        if (currentCharacter === 'R' && input.charAt(i + 1) !== 'R' && sum > 0) {
          isGoodBoy = false
          sum = 0;
        }
      }
    }

    if (isGoodBoy) console.log('Good boy')
    else console.log('Bad boy')
  }
  catch(e) {
    console.error(e)
  }
}

const inputs = ['SRSSRRR', 'RSSRR', 'SSSRRRRS', 'SRRSSR', 'SSRSRR'];
inputs.forEach((input) => {
  babyBoss(input)
})
