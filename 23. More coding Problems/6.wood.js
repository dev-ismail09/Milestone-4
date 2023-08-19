/*
1. chair --> 3 cft
2. table --> 10 cft
3. bed --> 50 cft
*/

function totalWoodFunction(chairQuantity, tableQuantity, bedQuantity){
        const perChairWood = 3;
        const perTableWood = 10;
        const perBedWood = 50;

        const totalChairWood = perChairWood * chairQuantity;
        const totalTableWood = perTableWood * tableQuantity;
        const totalBedWood = perBedWood * bedQuantity;

        const totalWood = totalChairWood + totalTableWood + totalBedWood;
        return totalWood;
}

const elementsWood = totalWoodFunction(10, 5, 2);
console.log('total wood: ',elementsWood);

