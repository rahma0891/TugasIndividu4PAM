const BANDARA = [
    {
      bandara_kode: 'B01',
      bandara_nama: 'Raden Intan', 
    },
    {
      bandara_kode: 'B02',
      bandara_nama: 'Soekarno Hatta',
    },
    {
      bandara_kode: 'B03',
      bandara_nama: 'Ahmad Yani',
    },
    {
      bandara_kode: 'B04',
      bandara_nama: 'Supadio',
    },
    {
      bandara_kode: 'B05',
      bandara_nama: 'Kuala Namu',
    },
    {
      bandara_kode: 'B06',
      bandara_nama: 'Sam Ratulangi',
    },
    {
      bandara_kode: 'B07',
      bandara_nama: 'Sultan Mahmud',
    },
    {
      bandara_kode: 'B08',
      bandara_nama: 'Adisutjipto',
    },
    {
      bandara_kode: 'B09',
      bandara_nama: 'Sultan Hasanuddin',
    },
    {
      bandara_kode: 'B10',
      bandara_nama: 'Juanda',
    },
    {
      bandara_kode: 'B11',
      bandara_nama: 'Ngurah Rai',
    },
];

const MASKAPAI = [
  {
    maskapai_id: "M01",
    maskapai_nama: "Garuda", 
    maskapai_logo : require('../images/garuda.png'),  
  },
  {
    maskapai_id: "M02",
    maskapai_nama: "Citilink",
    maskapai_logo: require('../images/citilink.png'),
  },
  {
    maskapai_id: "M03",
    maskapai_nama: "Lion Air",
    maskapai_logo: require('../images/lion.png'),
  },
  {
    maskapai_id: "M04",
    maskapai_nama: "Batik Air",
    maskapai_logo: require('../images/batik.png'),
  },
  {
    maskapai_id: "M05",
    maskapai_nama: "American Airlines",
    maskapai_logo: require('../images/americanair.png'),
  },
  {
    maskapai_id: "M06",
    maskapai_nama: "Wings Air",
    maskapai_logo: require('../images/wingair.png'),
  },
  {
    maskapai_id: "M07",
    maskapai_nama: "Pelita Air",
    maskapai_logo: require('../images/pelita.png'),
  },
  {
    maskapai_id: "M08",
    maskapai_nama: "Sriwijaya Air",
    maskapai_logo: require('../images/sriwijaya.png'),
  },
  {
    maskapai_id: "M09",
    maskapai_nama: "Asialink",
    maskapai_logo: require('../images/asialink.png'),
  },
  {
    maskapai_id: "M10",
    maskapai_nama: "Air Asia",
    maskapai_logo: require('../images/airasia.png'),
  },
  ];

const JADWAL = [
    {
      jadwal_id: "J01",
      bandara_kode_keberangkatan: "B01",
      bandara_kode_tujuan: "B02",
      maskapai_id: "M01",
      tanggal: "16-05-2022",
    },
    {
      jadwal_id: "J02",
      bandara_kode_keberangkatan: "B01",
      bandara_kode_tujuan: "B02",
      maskapai_id: "M06",
      tanggal: "16-05-2022",
    },
    {
      jadwal_id: "J03",
      bandara_kode_keberangkatan: "B01",
      bandara_kode_tujuan: "B02",
      maskapai_id: "M02",
      tanggal: "16-05-2022",
    },
    {
      jadwal_id: "J04",
      bandara_kode_keberangkatan: "B01",
      bandara_kode_tujuan: "B03",
      maskapai_id: "M04",
      tanggal: "20-05-2022",
    },
    {
      jadwal_id: "J05",
      bandara_kode_keberangkatan: "B01",
      bandara_kode_tujuan: "B03",
      maskapai_id: "M03",
      tanggal: "20-05-2022",
    },
    {
      jadwal_id: "J06",
      bandara_kode_keberangkatan: "B01",
      bandara_kode_tujuan: "B03",
      maskapai_id: "M06",
      tanggal: "20-05-2022",
    },
    {
      jadwal_id: "J07",
      bandara_kode_keberangkatan: "B01",
      bandara_kode_tujuan: "B03",
      maskapai_id: "M01",
      tanggal: "20-05-2022",
    },
    {
      jadwal_id: "J08",
      bandara_kode_keberangkatan: "B04",
      bandara_kode_tujuan: "B05",
      maskapai_id: "M07",
      tanggal: "23-05-2022",
    },
    {
      jadwal_id: "J09",
      bandara_kode_keberangkatan: "B04",
      bandara_kode_tujuan: "B05",
      maskapai_id: "M05",
      tanggal: "23-05-2022",
    },
    {
      jadwal_id: "J10",
      bandara_kode_keberangkatan: "B04",
      bandara_kode_tujuan: "B05",
      maskapai_id: "M08",
      tanggal: "23-05-2022",
    },
    {
      jadwal_id: "J11",
      bandara_kode_keberangkatan: "B04",
      bandara_kode_tujuan: "B05",
      maskapai_id: "M01",
      tanggal: "23-05-2022",
    },
    {
      jadwal_id: "J12",
      bandara_kode_keberangkatan: "B10",
      bandara_kode_tujuan: "B11",
      maskapai_id: "M01",
      tanggal: "28-05-2022",
    },{
      jadwal_id: "J13",
      bandara_kode_keberangkatan: "B10",
      bandara_kode_tujuan: "B11",
      maskapai_id: "M02",
      tanggal: "28-05-2022",
    },
    {
      jadwal_id: "J14",
      bandara_kode_keberangkatan: "B10",
      bandara_kode_tujuan: "B11",
      maskapai_id: "M08",
      tanggal: "28-05-2022",
    },
    {
      jadwal_id: "J15",
      bandara_kode_keberangkatan: "B10",
      bandara_kode_tujuan: "B1",
      maskapai_id: "M01",
      tanggal: "28-05-2022",
    },
    {
      jadwal_id: "J16",
      bandara_kode_keberangkatan: "B10",
      bandara_kode_tujuan: "B11",
      maskapai_id: "M02",
      tanggal: "28-05-2022",
    },
    {
      jadwal_id: "J17",
      bandara_kode_keberangkatan: "B06",
      bandara_kode_tujuan: "B07",
      maskapai_id: "M09",
      tanggal: "01-06-2022",
    },
  ];

export {BANDARA,MASKAPAI, JADWAL};
