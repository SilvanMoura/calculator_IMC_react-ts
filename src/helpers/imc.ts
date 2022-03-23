export type level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    yourImc?: number;
};

export let levels: level[] = [
    { title: 'Magreza', color: '#67A3AB', icon: 'down', imc: [0, 18.59] },
    { title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.99] },
    { title: 'Sobrepeso', color: '#E2B039', icon: 'down', imc: [25, 30] },
    { title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 99] },
];

export let calculateImc = (height:number, weight:number)=>{
    let imc = weight / (height * height);

    for (let i in levels){
        if(imc >= levels[i].imc[0] && imc <= levels[i].imc[0]){
            levels[i].yourImc = imc;
            return levels[i];
        };
    }

    return null;
};