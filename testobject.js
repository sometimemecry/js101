const dragonFactory = (skincolor, elemental ,type) => {
    return {
        Dragonskin: skincolor,
        Elementals: elemental,
        type: type,
        roar(){
            console.log('ROAR !!!');
        }
    }

}

const redDragon = dragonFactory('Red', 'Fire', 'Chinese');
for (let key in redDragon) {
    console.log(`${key}: ${redDragon[key]}`);
  }