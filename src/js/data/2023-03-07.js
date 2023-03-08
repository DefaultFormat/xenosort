dataSetVersion = "2023-03-07"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  /*{
    name: "Filter by Character Role",
    key: "role",
    tooltip: "Check this to restrict to certain character roles.",
    checked: true,
    sub: [
      { name: "Don't check this or everyone will be removed", key: "none" },
    ]
  },*/
  {
    name: "Filter by Series",
    key: "series",
    tooltip: "Check this to filter by series.",
    checked: true,
    sub: [
      { name: "Xenoblade Chronicles", key: "XC" },
      { name: "Future Connected", key: "FC" },
      { name: "Xenoblade Chronicles X", key: "XCX" },
      { name: "Xenoblade Chronicles 2", key: "XC2" },
      { name: "Torna: The Golden Country", key: "TGC" },
      { name: "Xenoblade Chronicles 3", key: "XC3"},
      { name: "Xenogears", key: "XG" },
      { name: "Xenosaga", key: "XS" },
    ]
  },
  {
    name: "Filter Duplicates",
    key: "duplicate",
    tooltip: "Check this to remove duplicates."
  },
  {
    name: "Filter Rare Blades (XC2)",
    key: "rareblade",
    tooltip: "Check this to remove rare blades."
  },
  {
    name: "Filter Heroes (XC3)",
    key: "hero",
    tooltip: "Check this to remove heroes."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Cross M",
    img: "XCX-Cross M.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Cross F",
    img: "XCX-Cross F.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Elma",
    img: "XCX-Elma.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Lin",
    img: "XCX-Lin.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Gwin",
    img: "XCX-Gwin.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Irina",
    img: "XCX-Irina.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Doug",
    img: "XCX-Doug.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Lao",
    img: "XCX-Lao.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "L",
    img: "XCX-L.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Nagi",
    img: "XCX-Nagi.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Celica",
    img: "XCX-Celica.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Hope",
    img: "XCX-Hope.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Frye",
    img: "XCX-Frye.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Phog",
    img: "XCX-Phog.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Mia",
    img: "XCX-Mia.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Murderess",
    img: "XCX-Murderess.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Alexa",
    img: "XCX-Alexa.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "H.B.",
    img: "XCX-H.B..png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Bozé",
    img: "XCX-Bozé.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Yelv",
    img: "XCX-Yelv.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Vandham (XCX)",
    img: "XCX-Vandham.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Maurice",
    img: "XCX-Maurice.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Tatsu",
    img: "XCX-Tatsu.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Eleonora",
    img: "XCX-Eleonora.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Ga Jiarg",
    img: "XCX-Ga Jiarg.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Ga Buidhe",
    img: "XCX-Ga Buidhe.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Luxaar",
    img: "XCX-Luxaar.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Goetia",
    img: "XCX-Goetia.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Ryyz",
    img: "XCX-Ryyz.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Dagahn",
    img: "XCX-Dagahn.png",
    opts: {
      series: ["XCX"]
    }
  },
  {
    name: "Rex",
    img: "XC2-Rex.png",
    opts: {
      series: ["XC2"]
    }
  },
  {
    name: "Nia",
    img: "XC2-Nia.png",
    opts: {
      series: ["XC2"]
    }
  },
  {
    name: "Tora",
    img: "XC2-Tora.png",
    opts: {
      series: ["XC2"]
    }
  },
  {
    name: "Vandham (XC2)",
    img: "XC2-Vandham.png",
    opts: {
      series: ["XC2"]
    }
  },
  {
    name: "Mòrag",
    img: "XC2-Mòrag.png",
    opts: {
      series: ["XC2"]
    }
  },
  {
    name: "Zeke",
    img: "XC2-Zeke.png",
    opts: {
      series: ["XC2"]
    }
  },
  {
    name: "Pyra",
    img: "XC2-Pyra.png",
    opts: {
      series: ["XC2"]
    }
  },
  {
    name: "Mythra",
    img: "XC2-Mythra.png",
    opts: {
      series: ["XC2"]
    }
  },
  {
    name: "Pneuma",
    img: "XC2-Pneuma.png",
    opts: {
      series: ["XC2"]
    }
  },
  {
    name: "Roc",
    img: "XC2-Roc.png",
    opts: {
      series: ["XC2"]
    }
  },
  {
    name: "Blade Nia",
    img: "XC2-Blade Nia.png",
    opts: {
      series: ["XC2"],
      duplicate: true
    }
  },
  {
    name: "Dromarch",
    img: "XC2-Dromarch.png",
    opts: {
      series: ["XC2"]
    }
  },
  {
    name: "Poppi",
    img: "XC2-Poppi.png",
    opts: {
      series: ["XC2"]
    }
  },
  {
    name: "Poppi QT",
    img: "XC2-Poppi QT.png",
    opts: {
      series: ["XC2"],
      duplicate: true
    }
  },
  {
    name: "Poppi QTpi",
    img: "XC2-Poppi QTpi.png",
    opts: {
      series: ["XC2"],
      duplicate: true
    }
  },
  {
    name: "Brighid",
    img: "XC2-Brighid.png",
    opts: {
      series: ["XC2"]
    }
  },
  {
    name: "Aegaeon",
    img: "XC2-Aegaeon.png",
    opts: {
      series: ["XC2"]
    }
  },
  {
    name: "Pandoria",
    img: "XC2-Pandoria.png",
    opts: {
      series: ["XC2"]
    }
  },
  {
    name: "Adenine",
    img: "XC2-Adenine.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Agate",
    img: "XC2-Agate.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Azami",
    img: "XC2-Azami.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Boreas",
    img: "XC2-Boreas.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Dagas",
    img: "XC2-Dagas.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Dahlia",
    img: "XC2-Dahlia.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Electra",
    img: "XC2-Electra.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Finch",
    img: "XC2-Finch.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Floren",
    img: "XC2-Floren.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Godfrey",
    img: "XC2-Godfrey.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Gorg",
    img: "XC2-Gorg.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Herald",
    img: "XC2-Herald.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Kasandra",
    img: "XC2-Kasandra.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Kora",
    img: "XC2-Kora.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "KOS-MOS (XC2)",
    img: "XC2-KOS-MOS.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Newt",
    img: "XC2-Newt.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Nim",
    img: "XC2-Nim.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Perceval",
    img: "XC2-Perceval.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Perun",
    img: "XC2-Perun.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Praxis",
    img: "XC2-Praxis.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Sheba",
    img: "XC2-Sheba.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Theory",
    img: "XC2-Theory.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Ursula",
    img: "XC2-Ursula.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Vale",
    img: "XC2-Vale.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Vess",
    img: "XC2-Vess.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Wulfric",
    img: "XC2-Wulfric.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Zenobia",
    img: "XC2-Zenobia.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Poppibuster",
    img: "XC2-Poppibuster.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "T-elos (XC2)",
    img: "XC2-T-elos.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Shulk (XC2)",
    img: "XC2-Shulk.png",
    opts: {
      series: ["XC2"],
      duplicate: true,
      rareblade: true
    }
  },
  {
    name: "Fiora (XC2)",
    img: "XC2-Fiora.png",
    opts: {
      series: ["XC2"],
      duplicate: true,
      rareblade: true
    }
  },
  {
    name: "Akhos",
    img: "XC2-Akhos.png",
    opts: {
      series: ["XC2"]
    }
  },
  {
    name: "Cressidus",
    img: "XC2-Cressidus.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Mikhail",
    img: "XC2-Mikhail.png",
    opts: {
      series: ["XC2"]
    }
  },
  {
    name: "Obrona",
    img: "XC2-Obrona.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Patroka",
    img: "XC2-Patroka.png",
    opts: {
      series: ["XC2"]
    }
  },
  {
    name: "Perdido",
    img: "XC2-Perdido.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Sever",
    img: "XC2-Sever.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Jin (XC2)",
    img: "XC2-Jin.png",
    opts: {
      series: ["XC2"]
    }
  },
  {
    name: "Malos",
    img: "XC2-Malos.png",
    opts: {
      series: ["XC2"]
    }
  },
  {
    name: "Amalthus",
    img: "XC2-Amalthus.png",
    opts: {
      series: ["XC2"]
    }
  },
  {
    name: "Corvin",
    img: "XC2-Corvin.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Crossette",
    img: "XC2-Crossette.png",
    opts: {
      series: ["XC2"],
      rareblade: true
    }
  },
  {
    name: "Addam",
    img: "TGC-Addam.png",
    opts: {
      series: ["TGC"]
    }
  },
  {
    name: "Gort",
    img: "TGC-Gort.png",
    opts: {
      series: ["TGC"]
    }
  },
  {
    name: "Haze",
    img: "TGC-Haze.png",
    opts: {
      series: ["TGC"]
    }
  },
  {
    name: "Hugo",
    img: "TGC-Hugo.png",
    opts: {
      series: ["TGC"]
    }
  },
  {
    name: "Lora",
    img: "TGC-Lora.png",
    opts: {
      series: ["TGC"]
    }
  },
  {
    name: "Minoth",
    img: "TGC-Minoth.png",
    opts: {
      series: ["TGC"]
    }
  },
  {
    name: "Milton",
    img: "TGC-Milton.png",
    opts: {
      series: ["TGC"]
    }
  },
  {
    name: "Shulk",
    img: "XC-Shulk.png",
    opts: {
      series: ["XC"]
    }
  },
  {
    name: "Fiora",
    img: "XC-Fiora.png",
    opts: {
      series: ["XC"]
    }
  },
  {
    name: "Mecha Fiora",
    img: "XC-Mecha Fiora.png",
    opts: {
      series: ["XC"],
      duplicate: true
    }
  },
  {
    name: "Reyn",
    img: "XC-Reyn.png",
    opts: {
      series: ["XC"]
    }
  },
  {
    name: "Dunban",
    img: "XC-Dunban.png",
    opts: {
      series: ["XC"]
    }
  },
  {
    name: "Sharla",
    img: "XC-Sharla.png",
    opts: {
      series: ["XC"]
    }
  },
  {
    name: "Riki",
    img: "XC-Riki.png",
    opts: {
      series: ["XC"]
    }
  },
  {
    name: "Melia",
    img: "XC-Melia.png",
    opts: {
      series: ["XC"]
    }
  },
  {
    name: "Dickson",
    img: "XC-Dickson.png",
    opts: {
      series: ["XC"]
    }
  },
  {
    name: "Mumkhar",
    img: "XC-Mumkhar.png",
    opts: {
      series: ["XC"]
    }
  },
  {
    name: "Alvis",
    img: "XC-Alvis.png",
    opts: {
      series: ["XC"]
    }
  },
  {
    name: "Juju",
    img: "XC-Juju.png",
    opts: {
      series: ["XC"]
    }
  },
  {
    name: "Otharon",
    img: "XC-Otharon.png",
    opts: {
      series: ["XC"]
    }
  },
  {
    name: "Vanea",
    img: "XC-Vanea.png",
    opts: {
      series: ["XC"]
    }
  },
  {
    name: "Gadolt",
    img: "XC-Gadolt.png",
    opts: {
      series: ["XC"]
    }
  },
  {
    name: "Egil",
    img: "XC-Egil.png",
    opts: {
      series: ["XC"]
    }
  },
  {
    name: "Linada",
    img: "XC-Linada.png",
    opts: {
      series: ["XC"]
    }
  },
  {
    name: "Lorithia",
    img: "XC-Lorithia.png",
    opts: {
      series: ["XC"]
    }
  },
  {
    name: "Meyneth",
    img: "XC-Meyneth.png",
    opts: {
      series: ["XC"]
    }
  },
  {
    name: "Tyrea",
    img: "XC-Tyrea.png",
    opts: {
      series: ["XC"]
    }
  },
  {
    name: "Kallian",
    img: "XC-Kallian.png",
    opts: {
      series: ["XC"]
    }
  },
  {
    name: "Sorean",
    img: "XC-Sorean.png",
    opts: {
      series: ["XC"]
    }
  },
  {
    name: "Klaus (XC1)",
    img: "XC-Klaus.PNG",
    opts: {
      series: ["XC"],
      duplicate: true
    }
  },
  {
    name: "Klaus",
    img: "XC2-Klaus.PNG",
    opts: {
      series: ["XC2"]
    }
  },
  {
    name: "Zanza",
    img: "XC-Zanza.png",
    opts: {
      series: ["XC"]
    }
  },
  {
    name: "Teelan",
    img: "XC-Teelan.png",
    opts: {
      series: ["XC"]
    }
  },
  {
    name: "Vangarre",
    img: "XC-Vangarre.png",
    opts: {
      series: ["XC"]
    }
  },
  {
    name: "Miqol",
    img: "XC-Miqol.png",
    opts: {
      series: ["XC"]
    }
  },
  {
    name: "Xord",
    img: "XC-Xord.png",
    opts: {
      series: ["Xord"]
    }
  },
  {
    name: "Yumea",
    img: "XC-Yumea.png",
    opts: {
      series: ["XC"]
    }
  },
  {
    name: "Nene",
    img: "FC-Nene.png",
    opts: {
      series: ["FC"]
    }
  },
  {
    name: "Gael'gar",
    img: "FC-Gael'gar.png",
    opts: {
      series: ["FC"]
    }
  },
  {
    name: "Fei",
    img: "XG-Fei.png",
    opts: {
      series: ["XG"]
    }
  },
  {
    name: "Citan",
    img: "XG-Citan.png",
    opts: {
      series: ["XG"]
    }
  },
  {
    name: "Elly",
    img: "XG-Elly.png",
    opts: {
      series: ["XG"]
    }
  },
  {
    name: "Bart",
    img: "XG-Bart.png",
    opts: {
      series: ["XG"]
    }
  },
  {
    name: "Billy",
    img: "XG-Billy.png",
    opts: {
      series: ["XG"]
    }
  },
  {
    name: "Chu",
    img: "XG-Chu.png",
    opts: {
      series: ["XG"]
    }
  },
  {
    name: "Emeralda",
    img: "XG-Emeralda.png",
    opts: {
      series: ["XG"]
    }
  },
  {
    name: "Rico",
    img: "XG-Rico.png",
    opts: {
      series: ["XG"]
    }
  },
  {
    name: "ID",
    img: "XG-ID.png",
    opts: {
      series: ["XG"]
    }
  },
  {
    name: "Grahf",
    img: "XG-Grahf.png",
    opts: {
      series: ["XG"]
    }
  },
  {
    name: "Wiseman",
    img: "XG-Wiseman.png",
    opts: {
      series: ["XG"]
    }
  },
  {
    name: "Miang",
    img: "XG-Miang.png",
    opts: {
      series: ["XG"]
    }
  },
  {
    name: "Krelian",
    img: "XG-Krelian.png",
    opts: {
      series: ["XG"]
    }
  },
  {
    name: "Cain",
    img: "XG-Cain.png",
    opts: {
      series: ["XG"]
    }
  },
  {
    name: "Ramsus",
    img: "XG-Ramsus.png",
    opts: {
      series: ["XG"]
    }
  },

  {
    name: "Dominia",
    img: "XG-Dominia.png",
    opts: {
      series: ["XG"]
    }
  },
  {
    name: "Tolone",
    img: "XG-Tolone.png",
    opts: {
      series: ["XG"]
    }
  },
  {
    name: "Seraphita",
    img: "XG-Seraphita.png",
    opts: {
      series: ["XG"]
    }
  },
  {
    name: "Kelvena",
    img: "XG-Kelvena.png",
    opts: {
      series: ["XG"]
    }
  },
  {
    name: "Jessie",
    img: "XG-Jessie.png",
    opts: {
      series: ["XG"]
    }
  },
  {
    name: "Margie",
    img: "XG-Margie.png",
    opts: {
      series: ["XG"]
    }
  },
  {
    name: "Sigurd",
    img: "XG-Sigurd.png",
    opts: {
      series: ["XG"]
    }
  },
  {
    name: "Maria",
    img: "XG-Maria.png",
    opts: {
      series: ["XG"]
    }
  },
  {
    name: "Allen",
    img: "XS-Allen.png",
    opts: {
      series: ["XS"]
    }
  },
  {
    name: "chaos",
    img: "XS-Chaos.png",
    opts: {
      series: ["XS"]
    }
  },
  {
    name: "Jin (XS)",
    img: "XS-Jin.png",
    opts: {
      series: ["XS"]
    }
  },
  {
    name: "JR",
    img: "XS-JR.png",
    opts: {
      series: ["XS"]
    }
  },
  {
    name: "KOS-MOS",
    img: "XS-KOS-MOS.png",
    opts: {
      series: ["XS"]
    }
  },
  {
    name: "MOMO",
    img: "XS-MOMO.png",
    opts: {
      series: ["XS"]
    }
  },
  {
    name: "Shion",
    img: "XS-Shion.png",
    opts: {
      series: ["XS"]
    }
  },
  {
    name: "Ziggy",
    img: "XS-Ziggy.png",
    opts: {
      series: ["XS"]
    }
  },
  {
    name: "Canaan",
    img: "XS-Canaan.png",
    opts: {
      series: ["XS"]
    }
  },
  {
    name: "Cherenkov",
    img: "XS-Cherenkov.png",
    opts: {
      series: ["XS"]
    }
  },
  {
    name: "Febronia",
    img: "XS-Febronia.png",
    opts: {
      series: ["XS"]
    }
  },
  {
    name: "Matthews",
    img: "XS-Matthews.png",
    opts: {
      series: ["XS"]
    }
  },
  {
    name: "Miyuki",
    img: "XS-Miyuki.png",
    opts: {
      series: ["XS"]
    }
  },
  {
    name: "Nephilim",
    img: "XS-Nephilim.png",
    opts: {
      series: ["XS"]
    }
  },
  {
    name: "Nigredo",
    img: "XS-Nigredo.png",
    opts: {
      series: ["XS"]
    }
  },
  {
    name: "Albedo",
    img: "XS-Albedo.png",
    opts: {
      series: ["XS"]
    }
  },
  {
    name: "Dmitri",
    img: "XS-Dmitri.png",
    opts: {
      series: ["XS"]
    }
  },
  {
    name: "Kevin",
    img: "XS-Kevin.png",
    opts: {
      series: ["XS"]
    }
  },
  {
    name: "Margulis",
    img: "XS-Margulis.png",
    opts: {
      series: ["XS"]
    }
  },
  {
    name: "Pellegri",
    img: "XS-Pellegri.png",
    opts: {
      series: ["XS"]
    }
  },
  {
    name: "Sergius",
    img: "XS-Sergius.png",
    opts: {
      series: ["XS"]
    }
  },
  {
    name: "T-elos",
    img: "XS-T-elos.png",
    opts: {
      series: ["XS"]
    }
  },
  {
    name: "Wilhelm",
    img: "XS-Wilhelm.png",
    opts: {
      series: ["XS"]
    }
  },
  {
    name: "Virgil",
    img: "XS-Virgil.png",
    opts: {
      series: ["XS"]
    }
  },
  {
    name: "Voyager",
    img: "XS-Voyager.png",
    opts: {
      series: ["XS"]
    }
  },
    //XENOBLADE 3
  {
    name: "Noah",
    img: "XC3-Noah.png",
    opts: {
      series: ["XC3"]
    }
  },
  {
    name: "Mio",
    img: "XC3-Mio.png",
    opts: {
      series: ["XC3"]
    }
  },
  {
    name: "Eunie",
    img: "XC3-Eunie.png",
    opts: {
      series: ["XC3"]
    }
  },
  {
    name: "Taion",
    img: "XC3-Taion.png",
    opts: {
      series: ["XC3"]
    }
  },
  {
    name: "Lanz",
    img: "XC3-Lanz.png",
    opts: {
      series: ["XC3"]
    }
  },
  {
    name: "Sena",
    img: "XC3-Sena.png",
    opts: {
      series: ["XC3"]
    }
  },
    //HEROES
  {
    name: "Ethel",
    img: "XC3-Ethel.png",
    opts: {
      series: ["XC3"],
      hero: true
    }
  },
  {
    name: "Valdi",
    img: "XC3-Valdi.png",
    opts: {
      series: ["XC3"],
      hero: true
    }
  },
  {
    name: "Zeon",
    img: "XC3-Zeon.png",
    opts: {
      series: ["XC3"],
      hero: true
    }
  },
  {
    name: "Teach",
    img: "XC3-Teach.png",
    opts: {
      series: ["XC3"],
      hero: true
    }
  },
  {
    name: "Riku",
    img: "XC3-Riku.png",
    opts: {
      series: ["XC3"],
      hero: true
    }
  },
  {
    name: "Manana",
    img: "XC3-Manana.png",
    opts: {
      series: ["XC3"],
      hero: true
    }
  },
  {
    name: "Gray",
    img: "XC3-Gray.png",
    opts: {
      series: ["XC3"],
      hero: true
    }
  },
  {
    name: "Isurd",
    img: "XC3-Isurd.png",
    opts: {
      series: ["XC3"],
      hero: true
    }
  },
  {
    name: "Juniper",
    img: "XC3-Juniper.png",
    opts: {
      series: ["XC3"],
      hero: true
    }
  },
  {
    name: "Ashera",
    img: "XC3-Ashera.png",
    opts: {
      series: ["XC3"],
      hero: true
    }
  },
  {
    name: "Alexandria",
    img: "XC3-Alexandria.png",
    opts: {
      series: ["XC3"],
      hero: true
    }
  },
  {
    name: "Monica",
    img: "XC3-Monica.png",
    opts: {
      series: ["XC3"],
      hero: true
    }
  },
  {
    name: "Fiona",
    img: "XC3-Fiona.png",
    opts: {
      series: ["XC3"],
      hero: true
    }
  },
  {
    name: "Triton",
    img: "XC3-Triton.png",
    opts: {
      series: ["XC3"],
      hero: true
    }
  },
  {
    name: "Ghondor",
    img: "XC3-Ghondor.png",
    opts: {
      series: ["XC3"],
      hero: true
    }
  },
  {
    name: "Miyabi",
    img: "XC3-Miyabi.png",
    opts: {
      series: ["XC3"],
      hero: true
    }
  },
  {
    name: "Cammuravi",
    img: "XC3-Cammuravi.png",
    opts: {
      series: ["XC3"],
      hero: true
    }
  },
  {
    name: "Segiri",
    img: "XC3-Segiri.png",
    opts: {
      series: ["XC3"],
      hero: true
    }
  },
  {
    name: "Ino",
    img: "XC3-Ino.png",
    opts: {
      series: ["XC3"],
      hero: true
    }
  },
  {
    name: "Masha",
    img: "XC3-Masha.png",
    opts: {
      series: ["XC3"],
      hero: true
    }
  },
    //HEROES DONE
  {
    name: "Mwamba",
    img: "XC3-Mwamba.png",
    opts: {
      series: ["XC3"],
    }
  },
  {
    name: "Guernica",
    img: "XC3-Guernica.png",
    opts: {
      series: ["XC3"],
    }
  },
  {
    name: "N",
    img: "XC3-N.png",
    opts: {
      series: ["XC3"],
    }
  },
  {
    name: "M",
    img: "XC3-M.png",
    opts: {
      series: ["XC3"],
    }
  },
  {
    name: "D",
    img: "XC3-D.png",
    opts: {
      series: ["XC3"],
    }
  },
  {
    name: "X",
    img: "XC3-X.png",
    opts: {
      series: ["XC3"],
    }
  },
  {
    name: "Y",
    img: "XC3-Y.png",
    opts: {
      series: ["XC3"],
    }
  },
  {
    name: "Z",
    img: "XC3-Z.png",
    opts: {
      series: ["XC3"],
    }
  },
  {
    name: "Joran",
    img: "XC3-Joran.png",
    opts: {
      series: ["XC3"],
    }
  },
  {
    name: "Crys",
    img: "XC3-Crys.png",
    opts: {
      series: ["XC3"],
    }
  },
  {
    name: "Nimue",
    img: "XC3-Nimue.png",
    opts: {
      series: ["XC3"],
    }
  },
  {
    name: "Shania",
    img: "XC3-Shania.png",
    opts: {
      series: ["XC3"],
    }
  },
  {
    name: "Bolearis",
    img: "XC3-Bolearis.png",
    opts: {
      series: ["XC3"],
    }
  },
];
