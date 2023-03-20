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
console.log(redDragon);
redDragon.roar();

for(let dragon in redDragon){
    console.log(`${dragon}: ${redDragon[dragon].name}`)
}