const ResConfig = [
    {"id":"1","name":"Egg","type":"1","refresh":"1","icon":"/images/item/item_02_n.png","maxnum":"200","inform":"A poultry egg can be used to make food.","pos":"40,40"},
    {"id":"2","name":"Meat","type":"1","refresh":"2","icon":"/images/item/item_03_n.png","maxnum":"200","inform":"A fresh piece of meat that can be used to make food.","pos":"40,20"},
    {"id":"3","name":"Fish","type":"1","refresh":"1","icon":"/images/item/item_05_n.png","maxnum":"200","inform":"A lively fish that can be used to make food.","pos":"15,70"},
    {"id":"4","name":"Soft skin","type":"2","refresh":"1","icon":"/images/item/item_06_n.png","maxnum":"200","inform":"A piece of soft plant leather that can be used to craft equipment.","pos":"75,50"},
    {"id":"5","name":"Crusty","type":"2","refresh":"1","icon":"/images/item/item_07_n.png","maxnum":"500","inform":"A piece of tough plant leather that can be used to craft equipment.","pos":"60,35"},
    {"id":"6","name":"Berry","type":"2","refresh":"1","icon":"/images/item/item_04_n.png","maxnum":"500","inform":"A juicy berry that serves as A small amount of recovery items","pos":"85,80"},
    {"id":"7","name":"Bamboo","type":"2","refresh":"2","icon":"/images/item/item_01_n.png","maxnum":"500","inform":"A cut segment of bamboo that can be used to make simple tools or weapons.","pos":"30,10"},
    {"id":"8","name":"Balsa wood","type":"2","refresh":"2","icon":"/images/item/item_08_n.png","maxnum":"500","inform":"A piece of lightweight balsa wood that can be used to make tools or weapons.","pos":"85,25"},
    {"id":"9","name":"Fir wood","type":"2","refresh":"1","icon":"/images/item/item_09_n.png","maxnum":"500","inform":"A piece of sturdy fir wood that can be used to make durable tools or weapons.","pos":"65,15"},
    {"id":"10","name":"Teak","type":"2","refresh":"1","icon":"/images/item/item_10_n.png","maxnum":"500","inform":"A piece of hard teak wood that can be used to make sturdy and durable tools or weapons.","pos":"70,75"},
    {"id":"11","name":"Hemlock","type":"2","refresh":"1","icon":"/images/item/item_11_n.png","maxnum":"500","inform":"A piece of hard hemlock wood that can be used to make sturdy tools or weapons.","pos":"55,60"},
    {"id":"12","name":"Mahogany","type":"2","refresh":"1","icon":"/images/item/item_12_n.png","maxnum":"300","inform":"A piece of hard mahogany wood that can be used to make exquisite yet sturdy tools or weapons.","pos":"20,20"},
    {"id":"13","name":"Pine","type":"2","refresh":"1","icon":"/images/item/item_13_n.png","maxnum":"300","inform":"A piece of lightweight and resilient pine wood that can be used to make simple tools or weapons.","pos":"80,20"},
    {"id":"14","name":"Coal","type":"3","refresh":"2","icon":"/images/item/item_14_n.png","maxnum":"200","inform":"A black lump of coal that can be used as fuel.","pos":"45,70"},
    {"id":"15","name":"Copper","type":"3","refresh":"2","icon":"/images/item/item_15_n.png","maxnum":"500","inform":"A piece of copper metal that can be used to make tools, weapons or electrical wires.","pos":"30,65"},
    {"id":"16","name":"Iron","type":"3","refresh":"1","icon":"/images/item/item_16_n.png","maxnum":"500","inform":"A piece of iron metal that can be used to craft tools and equipment.","pos":"35,45"},
    {"id":"17","name":"Silver","type":"3","refresh":"1","icon":"/images/item/item_17_n.png","maxnum":"500","inform":"A piece of silver ore that can be used to craft fine tools and advanced equipment.","pos":"90,50"},
    {"id":"18","name":"Sterling silver","type":"3","refresh":"1","icon":"/images/item/item_18_n.png","maxnum":"500","inform":"A crafting material that is purer than silver ore and is very rare.","pos":"50,15"},
    {"id":"19","name":"Graphite","type":"3","refresh":"1","icon":"/images/item/item_19_n.png","maxnum":"300","inform":"As one of the softest minerals, it can be used to make glass products.","pos":"80,45"},
    {"id":"20","name":"Platinum","type":"3","refresh":"1","icon":"/images/item/item_20_n.png","maxnum":"300","inform":"A shiny, malleable silver-white metal that can be used to craft advanced tools and rare equipment.","pos":"15,10"},
    {"id":"21","name":"Roast meat","type":"3","refresh":"0","icon":"/images/item/item_21_n.png","maxnum":"0","inform":"Cooked with raw meat, it will restore 10 HP points after eating it.","pos":"0,,0"},
];

export const ResType = [
    'None',
    'Animal',
    'Plant',
    'Mineral',
]


export function getResConfig() {
    let result = [];
    for (let i = 0; i < ResConfig.length; i++) {
        let item = ResConfig[i];
        let pos = item.pos.split(',');
        item.x = pos[0];
        item.y = pos[1];
        result.push(item);
    }
    console.log(result);
    return result;
}


export function key2id(originalString) {
    const keys = [
        'egg',//9 bits
        'meat',
        'fish',
        'soft_skin',
        'crusty',
        'berry',
        'bamboo',
        'balsa_wood',
        'fir_wood',
        'teak',
        'hemlock',
        'mahogany',
        'pine',
        'coal',
        'copper',
        'iron',
        'silver',
        'sterling_silver',
        'graphite',
        'platinum',
        'roast_meat'
    ];

    return keys.indexOf(originalString) + 1;

}

export function id2key(id) {
    const keys = [
        'egg',
        'meat',
        'fish',
        'soft_skin',
        'crusty',
        'berry',
        'bamboo',
        'balsa_wood',
        'fir_wood',
        'teak',
        'hemlock',
        'mahogany',
        'pine',
        'coal',
        'copper',
        'iron',
        'silver',
        'sterling_silver',
        'graphite',
        'platinum',
        'roast_meat'
    ];
    return keys[id - 1];
}

export function getResConfigByByName(name) {
    return ResConfig.filter(res => res.name === name)[0];
}

export function getResConfigById(id) {
    let res = ResConfig.filter(res => res.id === id.toString())[0];
    res.maxnum = parseInt(res.maxnum);
    return res;
}

export function getResConfigByType(type) {
    return ResConfig.filter(res => res.type === type.toString());
}

export function getResConfigByKey(key) {
    const id = key2id(key);
    const res = ResConfig.filter(res => res.id === id.toString())[0];
    if (res == null) {
        console.error("res is null", id, key);
    }
    return res;
}

export function getColorByType(type) {
    switch (type) {
        case "1":
            return 2;
        case "2":
            return 3;
        case "3":
            return 1;
    }
}