// DnD-Lite timeline data
// type:  social | travel | invest | combat | death
// desc:  HTML allowed; use <a href="../Platser/..."> for wiki links

var TIMELINE_SESSIONS = [
  {
    id:    "s01",
    label: "Session 1 — Flykten från fångelsehålan",
    slug:  "Sessions/Session-1"
  },
  {
    id:    "s02",
    label: "Session 2 — Från Klippan till Vargarnas Glänta",
    slug:  "Sessions/Session-2"
  },
  {
    id:    "s03",
    label: "Session 3 — Brobråk, stjärntecken och den glada dvärgen",
    slug:  "Sessions/Session-3"
  },
  {
    id:    "s04",
    label: "Session 4 — Guld, grillat och den blå vintern",
    slug:  "Sessions/Session-4"
  },
  {
    id:    "s05",
    label: "Session 5 — Vedmödör, brända skägg och vargguden Ulf",
    slug:  "Sessions/Session-5"
  },
  {
    id:    "s06",
    label: "Session 6 — Skelett, korv och Beowulfs fall",
    slug:  "Sessions/Session-6"
  },
  {
    id:    "s07",
    label: "Session 7 — Lerbad, rökridåer och prinsen av Solporten",
    slug:  "Sessions/Session-7"
  }
];

var TIMELINE_EVENTS = [
  // ── Session 1 ──
  {
    session: "s01", day: "S1", type: "combat", icon: "⚔️",
    title: "Ned i fångelsehålan",
    desc: 'Gruppen ger sig ned i en underjordisk håla för att rädda kidnappade bybor. Gobliner och fällor väntar.'
  },
  {
    session: "s01", day: "S1", type: "combat", icon: "⚔️",
    title: "Arnald besegrad",
    desc: '<a href="../NPC/Arnald">Arnald</a>, goblinbossen, besegras i sin tron-sal. Han hade stulit en amulett från en okänd herre — och flytt till hålan med sin stöld.'
  },
  {
    session: "s01", day: "S1", type: "invest", icon: "🔍",
    title: "Lejonets amulett hittas",
    desc: 'I kistan efter Arnald hittar gruppen en eldröd amulett med ett lejonhuvud. <a href="../Karaktärer/Aduro">Aduro</a> tar hand om den — dess fulla innebörd ännu okänd.'
  },

  // ── Session 2 ──
  {
    session: "s02", day: "S2", type: "invest", icon: "🔍",
    title: "Nat 20 på låset",
    desc: '<a href="../Karaktärer/Nari">Nari</a> dyrkar ett lås med ett perfekt tärningsslag. Skattlådan innehåller 12 guldmynt — som visar sig vara damm. Lika bra, typ.'
  },
  {
    session: "s02", day: "S2", type: "social", icon: "⭐",
    title: "Levelup",
    desc: 'Gruppen levlar upp. Nari lär sig böja sina pilar i luften. Aduro väcker sin blå flamma — en förmåga kopplad till hans drakonblod.'
  },
  {
    session: "s02", day: "S2", type: "combat", icon: "⚔️",
    title: "Vargar i ruinen",
    desc: 'Vid en övergiven ruin vaktar vargar ett hemligt område. Striden är hård men gruppen segrar.'
  },
  {
    session: "s02", day: "S2", type: "invest", icon: "🌀",
    title: "Den magiska brunnen",
    desc: '<a href="../Karaktärer/Nari">Nari</a> kastar ett mynt i brunnen för tur. <a href="../Karaktärer/Aduro">Aduros</a> fjäll reser sig — en tydlig magisk eftersmak stiger upp ur djupet. Vad finns nere?'
  },

  // ── Session 3 ──
  {
    session: "s03", day: "S3", type: "combat", icon: "⚔️",
    title: "Rollo vid bron",
    desc: 'Banditen <a href="../NPC/Rollo">Rollo</a> kräver tull vid flodbryggan. <a href="../Karaktärer/Bult">Bult</a> löser problemet på kortast möjliga väg — Rollo flyger av bron.'
  },
  {
    session: "s03", day: "S3", type: "social", icon: "👥",
    title: "Nori, den gladaste dvärgen",
    desc: 'Gruppen möter <a href="../NPC/Nori">Nori</a>, en dvärgsmid av rang med omåttlig glädje. Han verkar veta saker om den gamla skogen.'
  },
  {
    session: "s03", day: "S3", type: "invest", icon: "✨",
    title: "Tre stjärntecken på stenplattan",
    desc: '<a href="../Karaktärer/Aduro">Aduro</a> aktiverar en uråldrig stentavla med Nat 20. Tre stjärntecken tonar fram: <em>Skorpionen, Lejonet och Vargen</em>. En legend om tre gudbröder börjar ta form.'
  },

  // ── Session 4 ──
  {
    session: "s04", day: "S4", type: "social", icon: "💰",
    title: "30 guld i bounty",
    desc: '<a href="../NPC/Hildur">Hildur</a> i <a href="../Platser/Bladkurvan">Bladkurvan</a> betalar ut 30 guldmynt — Rollos bounty. Välförtjänat.'
  },
  {
    session: "s04", day: "S4", type: "travel", icon: "❄️",
    title: "Magisk vinter slår till",
    desc: 'Mitt i sommaren täcks <a href="../Platser/Bladkurvan">Bladkurvan</a> av snö. Vargguden <a href="../NPC/Ulf">Ulf</a> har tappat kontrollen — blåögda vargar attackerar och snön vägrar smälta.'
  },
  {
    session: "s04", day: "S4", type: "combat", icon: "⚔️",
    title: "Blåögda vargar",
    desc: 'Vargar med iskalla blåa ögon anfaller byborna. Gruppen försvarar byn och inser att problemet har en övernaturlig källa.'
  },

  // ── Session 5 ──
  {
    session: "s05", day: "S5", type: "travel", icon: "🪓",
    title: "Vedexpedition i urskogen",
    desc: 'Med yxa och såg från <a href="../NPC/Nori">Nori</a> hugger gruppen ned ett gigantiskt träd. Nori bränner skägget. <a href="../Karaktärer/Nari">Nari</a> leder stolt hästarna tillbaka.'
  },
  {
    session: "s05", day: "S5", type: "social", icon: "🐺",
    title: "Vargguden Ulf",
    desc: 'Gruppen möter <a href="../NPC/Ulf">Ulf</a> — den varggud vars kraft stulits av <a href="../NPC/Beowulf">Beowulf</a>. Ulf är svag och förtvivlad. En plan börjar ta form.'
  },

  // ── Session 6 ──
  {
    session: "s06", day: "S6", type: "combat", icon: "💀",
    title: "Skelett i banditlägret",
    desc: 'Gruppen stormar banditlägret utanför <a href="../Platser/Bladkurvan">Bladkurvan</a>. Skelett vaktar — men de är inget mot en eldboll och en skurk med goda reflexer.'
  },
  {
    session: "s06", day: "S6", type: "social", icon: "🔥",
    title: "Beowulf faller i isvaken",
    desc: '<a href="../Karaktärer/Aduro">Aduro</a> träffar <a href="../NPC/Beowulf">Beowulf</a> med en gigantisk eldboll vid isvaken. Beowulf springer ut på isen, faller igenom — och stiger upp som sig själv igen.'
  },
  {
    session: "s06", day: "S6", type: "social", icon: "✅",
    title: "Den magiska vintern hävs",
    desc: '<a href="../NPC/Ulf">Ulf</a> återfår sin gudomliga kraft. Vintern hävs. Byborna i <a href="../Platser/Bladkurvan">Bladkurvan</a> andas ut. <a href="../NPC/Beowulf">Beowulf</a> och sonen <a href="../NPC/Rollo">Rollo</a> bor kvar i banditlägret.'
  },
  {
    session: "s06", day: "S6", type: "social", icon: "⭐",
    title: "Levelup",
    desc: 'Gruppen levlar upp. <a href="../Karaktärer/Aduro">Aduro</a> lär sig teleportera korta sträckor. <a href="../Karaktärer/Nari">Nari</a> lär sig dansattacken — och demonstrerar den omedelbart mot <em>Aduro</em> (Nat 1, träff i hälen).'
  },

  // ── Session 7 ──
  {
    session: "s07", day: "S7", type: "travel", icon: "🏜️",
    title: "Mot Solporten via savannen",
    desc: 'Gruppen beger sig söderut mot den mytomspunna staden <a href="../Platser/Solporten">Solporten</a> — ett rike vid gränsen mellan djungel och öken.'
  },
  {
    session: "s07", day: "S7", type: "invest", icon: "🔍",
    title: "Mystiska föremål i savannen",
    desc: '<a href="../Karaktärer/Nari">Nari</a> hittar en guldpryl av okänt ursprung. <a href="../Karaktärer/Aduro">Aduro</a> hittar en spegelblank metallplatta. <a href="../Karaktärer/Aduro">Aduro</a> är skeptisk. Vad är det?'
  },
  {
    session: "s07", day: "S7", type: "travel", icon: "🏙️",
    title: "Ankomst till Solporten",
    desc: 'Gruppen når <a href="../Platser/Solporten">Solporten</a>. Vid porten möter de en vakt som berättar att Krokben är ute på uppdrag — och rekommenderar ett hotell för natten.'
  }
];
