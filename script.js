const carList = [
    {
        name: '500 Electric',
        brand: 'FIAT',
        img: 'carimages/500.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'e-tron 50',
        brand: 'Audi',
        img: 'carimages/audietron.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'i3',
        brand: 'BMW',
        img: 'carimages/bmwi3.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },  
    {
        name: 'i8',
        brand: 'BMW',
        img: 'carimages/bmwi8.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    }, 
    {
        name: 'ix 3',
        brand: 'BMW',
        img: 'carimages/bmwix3.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'e208',
        brand: 'Peugeot',
        img: 'carimages/e208.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'Mustang',
        brand: 'Ford',
        img: 'carimages/fordmustang.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    }, 
    {
        name: 'Transit',
        brand: 'Ford',
        img: 'carimages/fordtransit.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'e-Golf',
        brand: 'Volkswagen',
        img: 'carimages/golf.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'Clarity',
        brand: 'Honda',
        img: 'carimages/hondaclarity.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'ID.4',
        brand: 'Volkswagen',
        img: 'carimages/id4.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'i-MiEV',
        brand: 'Mitsubishi',
        img: 'carimages/imiev.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'I-Pace',
        brand: 'Jaguar',
        img: 'carimages/jaguaripace.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'K27',
        brand: 'Kandi',
        img: 'carimages/kandik27.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'Soul EV',
        brand: 'Kia',
        img: 'carimages/kiasoulev.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'Kona Electric',
        brand: 'Hyundai',
        img: 'carimages/kona.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'Leaf',
        brand: 'Nissan',
        img: 'carimages/leaf.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'Lightning GT',
        brand: 'Lightning',
        img: 'carimages/lightinggt.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'EV',
        brand: 'Luka',
        img: 'carimages/likaev.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'Everito',
        brand: 'Mahindra',
        img: 'carimages/mahindraeverito.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'EQC',
        brand: 'Mercedes-Benz',
        img: 'carimages/mercedeseqc.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'EQS',
        brand: 'Mercedes-Benz',
        img: 'carimages/mercedeseqs.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'Microlino',
        brand: 'Micro Mobility System',
        img: 'carimages/microlino.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'ES 8',
        brand: 'NIO',
        img: 'carimages/nioes8.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'E28',
        brand: 'Rayttle',
        img: 'carimages/rayttlee28.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'Twizy',
        brand: 'Renault',
        img: 'carimages/renaulttwizy.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'Smart Electric Drive',
        brand: 'Smart',
        img: 'carimages/smart.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'Sion',
        brand: 'Sono Motors',
        img: 'carimages/sonomotorssion.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'Nexon',
        brand: 'Tata',
        img: 'carimages/tatanexon.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'Model 3',
        brand: 'Tesla',
        img: 'carimages/teslamodel3.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'Model 100d',
        brand: 'Tesla',
        img: 'carimages/teslamodels100d.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'Model X',
        brand: 'Tesla',
        img: 'carimages/teslamodelx.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'Model Y',
        brand: 'Tesla',
        img: 'carimages/teslamodely.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'Fetish',
        brand: 'Venturi',
        img: 'carimages/venturifetish.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'P7',
        brand: 'Xpeng',
        img: 'carimages/xpengp7.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
    {
        name: 'Zoe',
        brand: 'Renault',
        img: 'carimages/zoe.jpg',
        textShort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
        textLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, eaque dolorum cumque officia maiores iure officiis itaque beatae voluptatem consequuntur.',
    },
];

// Brands filter
let filterContainer = document.getElementById('filter-template');
let filterToHtml = '';
let brandArray = [];

function showFilterList(array) {
    for (let i = 0; i < array.length; i++) {
        if (brandArray.includes(array[i].brand) === false){
            brandArray.push(array[i].brand);
        };
    };
    for (let j = 0; j < brandArray.length; j++) {
        filterToHtml += `
                <select>
                    <option value="${brandArray[j]}">${brandArray[j]}</option>
                </select> 
            `;
    };
    filterContainer.innerHTML = `
                <select>
                    <option value="All">All</option>
                </select> 
            ` + filterToHtml;
};
showFilterList(carList);

let selector = document.getElementById('filter-template');
let filteredCards = [];

selector.addEventListener('click', function(event){
    filteredCards = [];
    for (let j = 0; j<carList.length; j++) {
        if(carList[j].brand === event.target.value) {
            filteredCards.push(carList[j])
        } else if ('All' === event.target.value) {
            filteredCards = carList;
        }
    }
    showCardList(filteredCards);
    resetFilteredContainer();
})

// resetter

function resetFilteredContainer() {
    cardToHtml= '';
}

//  Cards
let cardContainer = document.getElementById('models-card-template');
let cardToHtml = '';

function showCardList(array) {
    for (let i=0; i<array.length; i++) {
        cardToHtml += `
            <div class="models-container models-font models-boxshadow" style="max-width: fit-content;">
                <div class="card models-cardwidth">
                    <img class="card-img-top"
                        src= ${array[i].img}
                        alt="An electric car">
                    <div class="card-body models-cardcolor models-textcentered models-cardwidth" stle>
                        <h5 class="card-title models-biggerfont">${array[i].name}</h5>
                        <h5 class="card-title models-biggerfont">${array[i].brand}</h5>
                        <p class="card-text">${array[i].textShort}</p>
                        <div class="models-cardwidth models-cardcolorinverted">
                            <p class="models-biggerfont models-btn models-cardcolorinverted" data-toggle="modal" data-target="#exampleModalCenter${i}">Discover</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="exampleModalCenter${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content modal-card">
                <div class="card-body models-cardcolorinverted models-textcentered">
                    <h5 class="card-title modal-title">${array[i].name}</h5>
                    <h5 class="card-title modal-title">${array[i].brand}</h5>
                </div>
                <div class="modal-body models-cardcolor">
                    <img class="card-img-top modal-img"
                        src= ${array[i].img}
                        alt="An electric car">
                        <p class="card-text">${array[i].textLong}</p>  
                </div>
                <div class="modal-footer models-cardcolorinverted">
                    <p class="models-biggerfont models-btn models-cardcolorinverted" data-dismiss="modal">Close</p>
                </div>
                </div>
            </div>
            </div>
        `;
        cardContainer.innerHTML = cardToHtml;
    };
};

showCardList(carList);