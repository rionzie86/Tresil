// data_torre.js — La Torre della Follia
// One Shot ambientata nel mondo di Kaelvaran

const torreDati = {
  titolo: "La Torre della Follia",
  sottotitolo: "Una one shot per 3–5 avventurieri",
  ambientazione: "Isola di Mushara (antico nome Solnaro di Tresil) — entroterra montuoso a nord",
  tono: "Horror cosmico, degenerazione, meraviglia distorta",
  antagonista: "Fraxximt il Rospo — mago pazzo, ladro di incantesimi, creatore di abomini",
  loreSegreta: `Fraxximt ha trovato la grotta di Ralia e Dogti durante gli scavi della sua torre. 
Si è appropriato della canzone dei due innamorati e del cuore di Dogti come tramite arcano 
per creare i suoi abomini personali. Il Biondo è riuscito a sottrargli lo spartito, ma non il cuore. 
Fraxximt ha difficoltà nel controllare Dogti. La torre cambia continuamente: non esiste una 
via diretta alle stanze del mago.`,

  capitoli: [

    {
      id: "cap1",
      titolo: "Capitolo 1 — Il Villaggio e la Bestia",
      icona: "🍺",
      riassunto: "I personaggi arrivano in un villaggio isolato e vengono coinvolti in una serata festosa. L'arrivo di Alexei, un cavatore ferito e delirante, rompe l'allegria e dà il via all'indagine.",
      sezioni: [
        {
          titolo: "La Locanda — Arrivo",
          tipo: "scena",
          testo: `L'atmosfera esterna è tetra: cielo basso, bosco fitto, aria che sa di terra umida. 
Ma appena i personaggi varcano la soglia della locanda, la realtà sembra cambiare: fuochi alti, musica, 
risa, bevute. I nativi sono festosi e genuinamente ospitali — coinvolgono i PG in giochi, balli, 
brindisi. Non c'è minaccia qui. Solo calore umano prima della tempesta.`
        },
        {
          titolo: "Alexei — Il Cavatore",
          tipo: "png",
          testo: `Arriva trafelato, sporco di polvere, con ferite da graffio sul braccio e sul collo. 
Delira: suo fratello Dimitri è rimasto intrappolato sotto una frana alla cava. 
Mentre cercava di liberarlo, una bestia lo ha attaccato. Preso dal panico, è fuggito. 
Durante il ritorno al villaggio ha sentito la bestia seguirlo — si nutriva degli animali del bosco.`,
          notaDM: `Un personaggio con competenza in Medicina o accesso a magia curativa/divinatoria può fare 
una prova (CD 12) per accorgersi che qualcosa di più profondo sta consumando Alexei: 
le ferite, pur recenti, hanno già iniziato a produrre pus. Gli occhi sono giallastri. 
Qualche dente gli cade mentre parla. Ciocche di capelli restano tra le dita quando si passa 
la mano sul capo. Non è una normale infezione — è una corruzione accelerata, 
come se il corpo stesse marcendo a velocità innaturale.`
        },
        {
          titolo: "La Strada verso la Cava",
          tipo: "viaggio",
          testo: `Il sentiero che porta alla cava si addentra nel bosco. 
È notte o tarda sera. La strada è silenziosa nel modo sbagliato — nessun verso di animali notturni.`,
          notaDM: `A metà strada i PG affrontano il cinghiale corrotto. In lontananza, 
durante o dopo il combattimento, chi supera una prova di Percezione (CD 14) intravede 
una figura umana immobile tra gli alberi che li osserva — poi scompare.`
        },
        {
          titolo: "Il Cinghiale Corrotto — Combattimento",
          tipo: "scontro",
          testo: `Più grande di un cinghiale normale. I lembi di carne si staccano dalle ossa 
mentre si muove. Dal cranio escono mucchi di vermi che cadono sul terreno. 
Nonostante le condizioni del corpo, è veloce e aggressivo.`,
          notaDM: `Statistiche: usare il blocco di un Cinghiale (MM) e aumentare i PF del 50%, 
aggiungere immunità ai danni da veleno. Chi subisce danni dalla carica deve superare 
un TS su Costituzione (CD 13) o contrarre una versione lieve della corruzione 
(svantaggio ai TS contro malattia per 24 ore). 
Il cadavere del cinghiale, se esaminato, mostra lo stesso avanzato stadio di degenerazione 
interna di Alexei — ma concentrato.`
        },
        {
          titolo: "La Cava — Dimitri",
          tipo: "scena",
          testo: `La frana ha parzialmente ostruito l'ingresso alla cava. 
Dimitri è ancora lì: il braccio sinistro è schiacciato da un grande masso, 
il corpo ha convulsioni intermittenti nonostante sia cosciente. 
Quello che resta della mano schiacciata è in stato avanzato di decomposizione.
La schiena di Dimitri è stata strappata a morsi — ferite profonde, già necrotizzate.`,
          notaDM: `Dimitri non può essere salvato in modo convenzionale. 
La corruzione è troppo avanzata. Può ancora parlare in modo frammentato: 
"È uscita dalla roccia... cantava... Dio, cantava mentre mi mangiava." 
Dimitri muore entro 1 ora dall'arrivo dei PG, a meno che non vengano usate magie 
molto potenti (che comunque fermano solo il processo, non lo invertono).
La frana ha aperto un accesso a una grotta preesistente — è da lì che è uscita la creatura.`
        }
      ]
    },

    {
      id: "cap2",
      titolo: "Capitolo 2 — La Grotta di Ralia e Dogti",
      icona: "🕯️",
      riassunto: "Oltre la frana si apre una grotta antica, abitata in passato. Tre elementi chiave raccontano una storia d'amore diventata abominio — e aprono la via verso la Torre.",
      sezioni: [
        {
          titolo: "La Grotta — Descrizione",
          tipo: "scena",
          testo: `Non è una caverna selvaggia. Qualcuno ha vissuto qui: stuoie logore per dormire, 
un camino scavato nella roccia con tracce di cenere recente, un cucinotto arrangiato, 
una credenza di legno marcio. L'aria è ferma e pesante, come se il tempo qui dentro 
si fosse addensato.`
        },
        {
          titolo: "Cosa trovano — 1: Lo Spartito nel Camino",
          tipo: "oggetto",
          testo: `Nel camino, tra le ceneri, ci sono frammenti di fogli manoscritti bruciati. 
Non tutti sono completamente distrutti — alcune note musicali, alcuni segni, 
restano leggibili ai bordi. I PG possono tentare di ricomporre lo spartito 
mettendo insieme i frammenti superstiti.`,
          notaDM: `Lo spartito è incompleto e bruciato intenzionalmente (dal Biondo, come spiegato nel diario). 
Una prova di Storia (CD 15) o Arcano (CD 14) rivela che la notazione è inusuale — 
non è musica nel senso tradizionale, è più vicina a un sigillo arcano trascritto in forma melodica. 
Chi ha competenza in strumenti musicali riconosce che alcune sequenze sembrano progettate 
per essere cantate in coppia. Non è possibile ricostruire lo spartito completo dai soli frammenti.`
        },
        {
          titolo: "Cosa trovano — 2: Il Diario del Biondo",
          tipo: "documento",
          testo: `Sul pavimento, accanto al cadavere bloccato alla parete, c'è un diario. 
La copertina è di cuoio scuro, le pagine ingiallite. L'ultima è macchiata di sangue.`,
          documentoCompleto: `[DIARIO DEL BIONDO — da leggere ai giocatori]

Dopo 3 mesi di incessanti ed estenuanti ricerche sono finalmente riuscito a rintracciare 
Fraxximt il Rospo nelle profondità di una montagna a nord dell'isola Mushara 
(nome antico che i Solnari davano a Tresil).

Dopo che il mago pazzo è scappato dalle grinfie degli inquisitori Brahmani, 
è stato molto difficile ritrovare le sue tracce.

Giusto in tempo. Fraxximt sta creando una serie di abomini per riempire la sua infinita 
torre della follia. Non capisco come abbia raggiunto il potere di creare un luogo come questo. 
Cambia continuamente e non c'è una via per arrivare direttamente nelle stanze del mago pazzo.

Ora comprendo che il Rospo non crea incantesimi: li ruba e li corrompe. 
Ho trovato una camera nascosta, antecedente la torre. Dentro di essa due corpi (Ralia e Dogti), 
uno decomposto da tempo (Ralia) l'altro orrendamente deturpato dal marciume, 
con il petto squarciato e vuoto. Mi è venuto un colpo quando l'uomo marcio ha iniziato a muoversi. 
Alla fine era innocuo — con l'orecchio teso sembrava aspettare che qualcuno dicesse qualcosa, 
e con il moncherino dell'indice sinistro continuava a battere ritmicamente sul pavimento della grotta.

Dai vari scritti sparsi per la camera ho scoperto la macabra storia di Ralia e del suo amato Dogti. 
Ella era una aspirante sacerdotessa di Virxiante la Rigeneratrice 
(una dei tanti fatati adorati dai villici nel sud di Lugdunum nel continente Varlmenn). 
Quando il suo amato perì in guerra ella scappò con la sua salma e lo riportò indietro dalla morte, 
dando vita ad un abominio. Dogti scappò e iniziò a infettare tutti gli insediamenti vicini. 
Fu così che Ralia lo incatenò con la loro canzone — e ballando lo costrinse a tornare 
nella grotta dove si trovano ancora oggi.

Ho capito! Il Rospo deve aver trovato questa grotta durante gli scavi per la sua torre 
e, appropriatosi della canzone dei due innamorati e del cuore di Dogti come tramite arcano, 
ha creato i suoi abomini personali.

Sono riuscito a sottrargli lo spartito della canzone — ma non il cuore. 
Ho bruciato gli appunti di Ralia e lo spartito del Rospo. Sembra che per lui sia necessario 
avere entrambi nelle vicinanze per creare e controllare gli abomini, 
e in ogni caso sembra avere difficoltà nel controllare Dogti. 
Ho dato fuoco allo spartito appena arrivato nella stanza. 
Il Rospo mi rincorre. Non posso fuggire dalla sua torre. 
Dogti sembra spaventato, rannicch...`,
          notaDM: `Il diario si interrompe a metà parola. I giocatori non sapranno mai come finisce. 
Il Biondo è il cadavere bloccato alla parete — trattenuto lì da Dogti (o dalla torre stessa) 
dopo aver bruciato lo spartito. Non è chiaro se sia morto subito o sia rimasto intrappolato vivo.
Informazioni chiave che i PG ricavano dal diario:
• Il nome del mago: Fraxximt il Rospo
• La torre cambia continuamente — non c'è una via diretta al mago
• Esiste qualcosa chiamato "cuore di Dogti" usato come tramite arcano
• Lo spartito bruciato dovrebbe indebolire il controllo del Rospo sugli abomini`
        },
        {
          titolo: "Cosa trovano — 3: Il Cadavere e la Parete Magica",
          tipo: "scena",
          testo: `Uno scheletro è bloccato alla parete da tralicci di pietra cresciuti attorno alle ossa — 
come se la roccia stessa lo avesse trattenuto. Accanto, sul pavimento, c'è il diario.

Il fondo della grotta non è roccia naturale. Chi si avvicina nota che la superficie 
è innaturalmente liscia e uniforme. Una prova di Arcano (CD 12) conferma: 
è stata creata magicamente, non è una formazione naturale. 
È anche sottile — un colpo deciso, o una magia di trasmutazione anche modesta, 
la frantuma rivelando ciò che c'è dietro.`,
          notaDM: `Rompere la parete non richiede forza straordinaria né magie potenti — 
è sottile e fragile, come carta pietrificata. Era stata creata per trattenere qualcuno dentro 
(il Biondo), non per resistere a chi viene da fuori. 
Oltre la parete: l'ingresso alla Torre della Follia.`
        }
      ]
    },

    {
      id: "cap3",
      titolo: "Capitolo 3 — La Torre della Follia",
      icona: "🗼",
      riassunto: "Oltre la parete magica si apre una struttura impossibile. Scale che non portano da nessuna parte — o forse ovunque. Le prime due stanze mettono alla prova la mente dei personaggi.",
      sezioni: [
        {
          titolo: "L'Atrio della Torre",
          tipo: "scena",
          testo: `Un'unica stanza circolare di 70 metri di raggio. 
Al centro si aprono scale che salgono e scendono — entrambe si perdono fuori dalla vista. 
Verso l'alto: una luce lattiginosa, come il cielo prima di un temporale, 
con una sensazione di giudizio imminente che stringe il petto. 
Verso il basso: buio totale, come guardare in un abisso infinito — 
ma con la certezza che qualcosa laggiù stia guardando te.

Ogni mezzo giro della torre, su entrambi i lati delle scale, c'è una porta ad arco di pietra.`,
          notaDM: `La torre segue una logica propria: che i PG salgano o scendano, 
si ritrovano davanti allo stesso arco di pietra — l'ingresso alla prima stanza. 
Non si può saltare le stanze. Non si può raggiungere il mago senza attraversarle in sequenza. 
La struttura della torre è un labirinto narrativo, non geometrico.`
        },
        {
          titolo: "Stanza 1 — Il Ponte e l'Occhio",
          tipo: "stanza",
          marcatore: "Chiave di volta: grande occhio stilizzato",
          testo: `Oltre l'arco: buio assoluto e il bordo di un crepaccio. 
Davanti ai personaggi si estende un ponte di corde e legno marcio. 
Non si vede l'altra sponda.

Quando il primo piede tocca il legno del ponte oscillante, qualcosa cambia nel cielo davanti: 
un immenso occhio si apre nel vuoto. Fissa i personaggi sul ponte.`,
          notaDM: `Solo chi è sul ponte vede l'occhio — chi è rimasto sull'arco non lo percepisce. 
Chi guarda l'occhio direttamente deve tirare un dado percentuale ogni 1d4 round (CD 30): 
se fallisce, subisce un effetto di follia breve (tabella a discrezione del DM — 
confusione, allucinazione, fuga irrefrenabile, 1d4 round). 
Il ponte regge, ma scricchiola pericolosamente: una prova di Acrobazia (CD 10) 
per ogni PG che lo attraversa di corsa o in combattimento. 
Sul lato opposto: nulla di rilevante — una piccola piattaforma di pietra che conduce 
a un'altra porta, già aperta, che riporta alle scale. L'occhio si chiude una volta 
che tutti hanno attraversato (o sono tornati indietro).

Al ritorno sulle scale i PG sentono risate di bambini — sopra e sotto di loro. 
Una palla di stracci rotola e rimbalza giù dalle scale passando tra i loro piedi. 
Non ci sono bambini visibili.`
        },
        {
          titolo: "Stanza 2 — Il Labirinto di Specchi",
          tipo: "stanza",
          marcatore: "Chiave di volta: rettangolo con lati asimmetrici",
          testo: `L'arco dà accesso a un ambiente vasto. Il pavimento è la zona più secca di una palude — 
terra screpolata, chiazze di acqua nera stagnante, giunchi secchi. 
Il resto è un labirinto di specchi alti a perdita d'occhio, 
disposti in modo apparentemente caotico.

Alla prima svolta, i riflessi iniziano a comportarsi in modo strano: 
gesticolano troppo, si muovono un secondo dopo, sorridono quando il personaggio non sorride. 
Poi iniziano a uscire dagli specchi.`,
          notaDM: `I riflessi distorli combattono i PG come versioni alterate di loro stessi: 
stesse statistiche base, ma con una peculiarità orrifica (a discrezione del DM — 
più lenti ma più forti, o con un attacco che mima un fallimento passato del personaggio, ecc). 
Se lo specchio da cui è uscito un riflesso viene distrutto, il riflesso si spezzetta e muore. 
Gli specchi hanno CA 5 e 5 PF ciascuno.

Per uscire dal labirinto: i PG devono trovare uno specchio nel quale il loro riflesso 
si comporta ancora normalmente — e entrarci. Questo li trasporta dall'altra parte del labirinto, 
all'uscita. Non è immediato trovarlo: i riflessi "sani" sono pochi e si spostano.`
        }
      ]
    },

    {
      id: "cap4",
      titolo: "Capitolo 4 — [In costruzione]",
      icona: "⚠️",
      riassunto: "Altre stanze della Torre della Follia. Da sviluppare.",
      sezioni: [
        {
          titolo: "Prossime stanze",
          tipo: "placeholder",
          testo: "Questo capitolo verrà costruito nella prossima sessione di sviluppo.",
          notaDM: "Struttura prevista: altre 2–3 stanze con prove di diverso tipo, poi la resa dei conti con Fraxximt il Rospo e il reward finale."
        }
      ]
    }

  ],

  png: [
    {
      nome: "Alexei",
      ruolo: "Cavatore del villaggio — sopravvissuto",
      descrizione: "Ferite da graffio, polvere, delirante. Occhi gialli, denti che cadono, capelli a ciocche. Portatore involontario della corruzione di Dogti.",
      segreto: "Non sa di essere già condannato. La corruzione è irreversibile senza magia divina di alto livello."
    },
    {
      nome: "Dimitri",
      ruolo: "Fratello di Alexei — morente alla cava",
      descrizione: "Braccio schiacciato dal masso. Schiena strappata a morsi. Convulsioni. Può ancora parlare frammenti di senso.",
      segreto: "Muore entro un'ora dall'arrivo dei PG. Ultima cosa che dice: 'Cantava. Mentre mi mangiava, cantava.'"
    },
    {
      nome: "Dogti",
      ruolo: "Abominio — creazione di Ralia",
      descrizione: "Corpo umano in stadio avanzato di decomposizione, petto squarciato e vuoto. Si muove. Batte il moncherino dell'indice sinistro sul pavimento ritmicamente. Sembra aspettare che qualcuno gli dica qualcosa.",
      segreto: "Dogti non è completamente sotto il controllo di Fraxximt — il Biondo lo aveva notato. Il cuore di Dogti è il tramite arcano usato dal Rospo. Se i PG trovassero un modo per comunicare con lui, potrebbe diventare un alleato inatteso."
    },
    {
      nome: "Il Biondo",
      ruolo: "Agente misterioso — cadavere nella grotta",
      descrizione: "Scheletro bloccato alla parete da tralicci di pietra. Lascia un diario. Stava inseguendo Fraxximt per conto di qualcuno (non specificato nel diario).",
      segreto: "Chi lo ha mandato? Perché? Non viene chiarito in questa one shot — può essere un gancio per campagne future."
    },
    {
      nome: "Fraxximt il Rospo",
      ruolo: "Antagonista — mago pazzo, creatore della Torre",
      descrizione: "Non compare fisicamente nelle prime stanze. La sua presenza si sente nella struttura stessa della torre. Non crea incantesimi: li ruba e li corrompe.",
      segreto: "Debolezza principale: senza lo spartito completo e il cuore di Dogti nelle vicinanze, il suo controllo sugli abomini è instabile. I PG hanno già bruciato lo spartito (il Biondo lo ha fatto per loro). Resta il cuore."
    }
  ],

  oggetti: [
    {
      nome: "Diario del Biondo",
      descrizione: "Diario in cuoio scuro, pagine ingiallite. Si interrompe a metà frase. Contiene informazioni su Fraxximt, la torre, Ralia e Dogti.",
      importanza: "Alta — lore fondamentale"
    },
    {
      nome: "Frammenti dello Spartito",
      descrizione: "Fogli manoscritti parzialmente bruciati trovati nel camino. Non ricostruibili completamente. La notazione è arcana, progettata per essere cantata in coppia.",
      importanza: "Media — lore, non utilizzabile direttamente"
    },
    {
      nome: "Il Cuore di Dogti",
      descrizione: "Non ancora trovato dai PG. È in possesso di Fraxximt. Tramite arcano usato per creare e controllare gli abomini.",
      importanza: "Alta — obiettivo chiave per indebolire il Rospo"
    }
  ],

  musica: [
    {
      capitolo: "cap1",
      descrizione: "Locanda festosa",
      spotify: ""
    },
    {
      capitolo: "cap1b",
      descrizione: "Bosco / Cinghiale corrotto",
      spotify: ""
    },
    {
      capitolo: "cap2",
      descrizione: "Grotta di Ralia e Dogti",
      spotify: ""
    },
    {
      capitolo: "cap3",
      descrizione: "La Torre",
      spotify: ""
    }
  ]
};
