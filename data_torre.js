// data_torre.js — La Torre della Follia
// One Shot ambientata nel mondo di Kaelvaran
// Sistema: dado percentuale a discrezione del DM — nessuna meccanica D&D standard

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
          notaDM: `Chi esamina Alexei da vicino — con conoscenze mediche, magiche, o semplicemente 
con attenzione — nota che qualcosa di più profondo lo sta consumando: le ferite, pur recenti, 
hanno già iniziato a produrre pus. Gli occhi sono giallastri. Qualche dente gli cade mentre parla. 
Ciocche di capelli restano tra le dita quando si passa la mano sul capo.

Non è una normale infezione — è una corruzione accelerata, come se il corpo stesse marcendo 
a velocità innaturale. Il DM decide quanto è evidente in base a quanto i giocatori indagano.`
        },
        {
          titolo: "La Strada verso la Cava",
          tipo: "viaggio",
          testo: `Il sentiero che porta alla cava si addentra nel bosco. 
È notte o tarda sera. La strada è silenziosa nel modo sbagliato — nessun verso di animali notturni.`,
          notaDM: `A metà strada i PG affrontano il cinghiale corrotto. In lontananza, durante o dopo 
lo scontro, chi guarda nel bosco può intravedere una figura umana immobile tra gli alberi che li osserva. 
Poi scompare. Il DM la mostra solo se qualcuno sta guardando nella direzione giusta.`
        },
        {
          titolo: "Il Cinghiale Corrotto — Scontro",
          tipo: "scontro",
          testo: `Più grande di un cinghiale normale. I lembi di carne si staccano dalle ossa 
mentre si muove. Dal cranio escono mucchi di vermi che cadono sul terreno. 
Nonostante le condizioni del corpo, è veloce e aggressivo.`,
          notaDM: `Il cinghiale è pericoloso ma abbattibile. Chi viene colpito dalla sua carica 
rischia di contrarre una forma lieve della stessa corruzione che consuma Alexei — 
il DM valuta in base alla gravità della ferita e all'approccio del giocatore.

Il cadavere del cinghiale, se esaminato, mostra lo stesso avanzato stadio di degenerazione 
interna di Alexei — ma concentrato, come se la bestia fosse corrotta da più tempo.`
        },
        {
          titolo: "La Cava — Dimitri",
          tipo: "scena",
          testo: `La frana ha parzialmente ostruito l'ingresso alla cava. 
Dimitri è ancora lì: il braccio sinistro è schiacciato da un grande masso, 
il corpo ha convulsioni intermittenti nonostante sia cosciente. 
Quello che resta della mano schiacciata è in stato avanzato di decomposizione.
La schiena di Dimitri è stata strappata a morsi — ferite profonde, già necrotizzate.`,
          notaDM: `Dimitri non può essere salvato. La corruzione è troppo avanzata. 
Può ancora parlare in modo frammentato: "È uscita dalla roccia... cantava... Dio, cantava mentre mi mangiava." 
Muore nel corso della scena — il DM sceglie il momento più drammaticamente efficace.

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
restano leggibili ai bordi.`,
          notaDM: `Lo spartito è incompleto e bruciato intenzionalmente dal Biondo (come spiegato nel diario). 
La notazione è inusuale — non è musica nel senso tradizionale, è più vicina a un sigillo arcano 
trascritto in forma melodica.

Collegamento con Dogti: il ritmo che Dogti batte sul pavimento con il moncherino 
corrisponde esattamente al tempo della melodia sui frammenti. 
Mettendo insieme i due elementi, i PG possono riconoscere la canzone — 
quella che conoscono nella vita reale come Thriller di Michael Jackson. 
In questo mondo è una canzone popolare Varlmenn: Ralia la cantava a Dogti.
Il DM svela il collegamento quando sente che i giocatori ci sono vicini.`
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
Il Biondo è il cadavere bloccato alla parete — trattenuto lì dopo aver bruciato lo spartito.

Informazioni chiave che i PG ricavano:
• Il nome del mago: Fraxximt il Rospo
• La torre cambia continuamente — non c'è una via diretta al mago
• Esiste il "cuore di Dogti" usato come tramite arcano
• Lo spartito bruciato indebolisce il controllo del Rospo sugli abomini
• La canzone va cantata — ed è legata a Dogti in modo profondo`
        },
        {
          titolo: "Cosa trovano — 3: Il Cadavere e la Parete Magica",
          tipo: "scena",
          testo: `Uno scheletro è bloccato alla parete da tralicci di pietra cresciuti attorno alle ossa — 
come se la roccia stessa lo avesse trattenuto. Accanto, sul pavimento, c'è il diario.

Il fondo della grotta non è roccia naturale. La superficie è innaturalmente liscia e uniforme — 
creata magicamente, non una formazione naturale. È sottile come carta pietrificata: 
un colpo deciso la frantuma, rivelando ciò che c'è dietro.`,
          notaDM: `La parete era stata creata per trattenere qualcuno dentro (il Biondo), 
non per resistere a chi viene da fuori. Non serve forza straordinaria né magie potenti.
Oltre la parete: l'ingresso alla Torre della Follia.`
        }
      ]
    },

    {
      id: "cap3",
      titolo: "Capitolo 3 — La Torre",
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
La struttura è un labirinto narrativo, non geometrico.`
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
Chi guarda l'occhio direttamente rischia di impazzire: il DM tira il dado percentuale 
a intervalli irregolari per chi fissa lo sguardo. Fallimento: effetto breve a scelta del DM 
(confusione, allucinazione, fuga irrefrenabile).

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
Il resto è un labirinto di specchi alti a perdita d'occhio, disposti in modo caotico.

Alla prima svolta, i riflessi iniziano a comportarsi in modo strano: 
gesticolano troppo, si muovono un secondo dopo, sorridono quando il personaggio non sorride. 
Poi iniziano a uscire dagli specchi.`,
          notaDM: `I riflessi combattono i PG come versioni distorte di loro stessi — stesse capacità base, 
ma con una peculiarità orrifica scelta dal DM per ogni personaggio. 
Se lo specchio da cui è uscito un riflesso viene distrutto, il riflesso si spezzetta e muore.

Per uscire: trovare uno specchio nel quale il proprio riflesso si comporta ancora normalmente 
ed entrarci. I riflessi sani si spostano — non è immediato trovarli.`
        }
      ]
    },

    {
      id: "cap4",
      titolo: "Capitolo 4 — La Sala delle Spade e i Bambini Bagnati",
      icona: "⚔️",
      riassunto: "Un corridoio di lame meccaniche e scheletri mossi come marionette. Tra la terza e la quarta stanza, i bambini appaiono finalmente — immobili, bagnati, in silenzio.",
      sezioni: [
        {
          titolo: "Stanza 3 — Il Corridoio delle Spade",
          tipo: "stanza",
          marcatore: "Chiave di volta: spada",
          testo: `Un corridoio enorme. Dal soffitto e dalle pareti pendono spade gigantesche montate su meccanismi — 
sbattono sul pavimento a intervalli irregolari, sollevando schegge di pietra e un rimbombo 
che risuona nell'intera stanza.

Ogni volta che una spada colpisce il suolo, cinque scheletri trattenuti da cavi di metallo 
scattano in avanti. I cavi muovono le loro giunture come se fossero mossi da fili invisibili — 
un movimento irregolare, a scatti, come vermi. Tra un colpo e l'altro ricadono inerti.`,
          notaDM: `Il ritmo delle spade è irregolare — il DM decide quando cadono per massimizzare la tensione. 
Gli scheletri sono attivi solo mentre le lame sono a terra: hanno un momento di azione, 
poi i cavi li ritraggono quando le lame si rialzano.

I PG possono cercare di sabotare i meccanismi — il DM valuta l'approccio e tira il dado percentuale. 
Sabotare le lame in posizione abbassata blocca il corridoio ma rende gli scheletri permanentemente attivi. 
Sabotarle in posizione sollevata blocca gli scheletri ma le lame restano una minaccia passiva.`
        },
        {
          titolo: "Transizione — I Bambini Bagnati",
          tipo: "scena",
          testo: `Tornando sulle scale tra la terza e la quarta stanza, i PG li trovano finalmente.

Cinque o sei bambini di età diverse, fermi sulla soglia. Sono completamente bagnati — 
i vestiti incollati alla pelle, i capelli appiccicati al viso, pozze d'acqua ai loro piedi. 
Non parlano. Non si muovono. Fissano il gruppo con occhi aperti e vuoti.

Non reagiscono se avvicinati. Non rispondono alle domande. Se qualcuno tende la mano, 
un bambino abbassa lentamente lo sguardo su di essa — e poi torna a fissare dritto davanti.

Sulla soglia della quarta stanza: una testa di coniglio incisa nella chiave di volta.`,
          notaDM: `I bambini non sono una minaccia e non possono essere interagiti in modo significativo. 
Sono un'immagine — una presenza. Non spiegare chi sono o cosa significano.

Se qualcuno usa magie di rilevamento: nessuna risposta. Non sono nulla che si possa classificare.
Quando i PG entrano nella quarta stanza, i bambini non li seguono — e non sono più lì al ritorno.`
        }
      ]
    },

    {
      id: "cap5",
      titolo: "Capitolo 5 — La Donna Coniglio",
      icona: "🐇",
      riassunto: "Una passerella su un'acqua impossibile, corpi di bambini sospesi nel nulla, e una creatura che divide il gruppo contro se stesso. L'uscita è nascosta sotto la superficie.",
      sezioni: [
        {
          titolo: "Stanza 4 — La Donna Coniglio",
          tipo: "stanza",
          marcatore: "Chiave di volta: testa di coniglio",
          testo: `Una passerella di pietra si affaccia su uno spazio aperto. Ai lati, decine di corpi 
di bambini galleggiano a pelo di superficie, immobili, gli occhi aperti verso l'alto. 
L'acqua è perfettamente trasparente, quasi invisibile: i corpi sembrano sospesi nel nulla.

In fondo alla passerella una scalinata di pietra sale verso il nulla — non c'è uscita visibile in cima. 
Seduta sui gradini c'è lei: la Donna Coniglio. Testa e orecchie di un coniglio bianco su un corpo umano. 
Aspetta. Sorride. Parla con voce dolce. Vuole che restino.`,
          notaDM: `La Donna Coniglio usa il fascino per dividere il gruppo. Il DM tira il dado percentuale 
per ogni PG che la guarda negli occhi — chi fallisce cade in una devozione ossessiva irrazionale: 
considera la Donna Coniglio come l'essere più importante nella stanza, obbedisce ai suoi ordini, 
si interpone fisicamente se il gruppo la minaccia, può attaccare i compagni se lei lo chiede 
(ma qualcosa in lui resiste — il DM può far sì che esiti o agisca con riluttanza visibile).

Il fascino si rompe se il personaggio viene ferito da un alleato, 
o se la Donna Coniglio è gravemente ferita.

La Donna Coniglio non entra nell'acqua — questo è il suo limite assoluto.

L'USCITA: nascosta sotto la scalinata di pietra, raggiungibile solo tuffandosi e nuotando in immersione. 
Chi si immerge la vede chiaramente — una porta di pietra sul fondo. 
I corpi dei bambini non reagiscono a chi nuota tra loro.`
        }
      ]
    },

    {
      id: "cap6",
      titolo: "Capitolo 6 — Il Globo e il Gonogol",
      icona: "🌐",
      riassunto: "Un tangram nel buio cosmico. Poi l'arena, la folla invisibile, e una viverna incatenata che vuole solo volare via.",
      sezioni: [
        {
          titolo: "Stanza 5 — Il Globo di Metallo",
          tipo: "stanza",
          marcatore: "Chiave di volta: globo con cerchio e linee geometriche",
          testo: `Una stanza senza pareti percepibili — il buio si estende in ogni direzione senza limiti visibili. 
Al centro, un'unica fonte di luce illumina per un raggio di circa 20 metri un piccolo globo 
di metallo sospeso nell'aria.

Attorno al globo, a pochi millimetri dalla superficie, fluttuano diverse piccole lamine di metallo 
con incisioni geometriche. Vanno ricomposte sul globo come un tangram tridimensionale.

La luce comincia lentamente ad affievolirsi nel momento in cui i PG entrano.`,
          notaDM: `Il DM gestisce il puzzle come una serie di momenti narrativi, tirando il dado percentuale 
per ogni fase significativa. Il ritmo con cui la luce cala è a discrezione — 
va usato per creare tensione, non per punire.

Se il globo viene completato: si compatta in una sfera liscia raccoglibile. 
È una riserva densa di energia magica — il DM decide come si traduce in gioco.

Dopo la raccolta: il pavimento cede e i PG cadono nell'arena.`
        },
        {
          titolo: "L'Arena — Il Gonogol",
          tipo: "scontro",
          testo: `Un colosseo scavato nella roccia viva, aperto in alto verso un buco nel soffitto — 
come il cratere di un vulcano spento. La folla è invisibile ma la si sente: 
migliaia di voci che urlano, esultano, scandiscono un nome.

Gonogol. Gonogol. Gonogol.

Le trombe suonano. Dal buio emerge la viverna: enorme, le ali chiuse e incatenate al corpo 
da catene spesse come un braccio d'uomo. Il collare di ferro che stringe il collo è ancorato 
al pavimento. Si agita, ruggisce, sbatte le ali inutilmente. La folla impazzisce.`,
          notaDM: `Il Gonogol NON è il vero nemico — è un prigioniero. Questa distinzione è centrale.

OBIETTIVO: liberare la cinghia del collare, non uccidere la viverna.
La cinghia è un meccanismo di cuoio rinforzato sul retro del collare. 
La viverna sputa acido denso e colloso che rimane sulla pelle e continua a bruciare. 
Graffia, morde, può balzare di decine di metri nonostante le catene.

Il DM tira il dado per chi cerca di avvicinarsi e per chi tenta di aprire la cinghia.
La viverna percepisce l'intenzione di chi vuole liberarla — smette di attaccarlo in quel momento.

QUANDO È LIBERA:
La catena cade. Il Gonogol apre le ali — enormi, bellissime — e si lancia verso il buco in cima. 
La folla ammutolisce. Silenzio totale. Poi scompare.
Al centro del pavimento: una botola aperta verso il livello finale.`
        }
      ]
    },

    {
      id: "cap7",
      titolo: "Capitolo 7 — Fraxximt il Rospo",
      icona: "💀",
      riassunto: "La stanza del trono. Lo scheletro del Rospo. Il cuore pulsante di Dogti. Una goccia di sangue può rimettere tutto in moto — o distruggerlo per sempre.",
      sezioni: [
        {
          titolo: "La Stanza del Trono",
          tipo: "scena",
          testo: `Una stanza ampia, senza ornamenti, fredda. Al centro: un trono fatto di ossa saldate 
tra loro da meccanismi di ottone arrugginito. Su di esso, riverso, lo scheletro di Fraxximt il Rospo.

Le vesti sono ancora intatte — elaborate, scure, cucite con fili metallici. 
Le mani ossute stringono al petto un'ampolla di vetro decorata con spine d'ottone lucido. 
All'interno dell'ampolla, visibile attraverso il vetro, giace un cuore. Pulsa.

Il cuore di Dogti.`,
          notaDM: `La stanza è silenziosa. Nessuna minaccia immediata visibile. 
Il DM lascia respirare la scena — questo è il momento in cui i giocatori decidono cosa fare.

Se i PG hanno il globo di metallo: appena entra nella stanza, 
le dita dello scheletro si contraggono leggermente. Se avvicinano il globo, 
lo scheletro si agita — come se lo riconoscesse e lo volesse. 
I PG capiscono che il globo ha valore qui.`
        },
        {
          titolo: "Recuperare il Cuore",
          tipo: "scena",
          testo: `L'ampolla è stretta tra le dita ossute del Rospo. Staccarla richiede forza 
o delicatezza — o entrambe. Le spine d'ottone sono aguzze.`,
          notaDM: `Il rischio centrale: se durante il recupero un PG si ferisce e una goccia di sangue 
cade sul corpo del Rospo, lo scheletro si risveglia.

Il DM tira il dado percentuale per ogni tentativo di recupero — chi usa delicatezza e pazienza 
ha più margine, chi strappa con forza rischia di scheggiarsi la mano sulle spine d'ottone.`
        },
        {
          titolo: "Il Rospo si Risveglia",
          tipo: "scontro",
          testo: `Fraxximt si alza dal trono. Le ossa scricchiolano. I meccanismi di ottone sul trono 
si sfilano e si riattaccano al suo corpo come esoscheletro. 
Non ha corde vocali — non può parlare, non può cantare, non può lanciare grandi incantesimi. 
Emette solo un sibilo rauco e continuo. Si muove verso il sangue.`,
          notaDM: `Il Rospo senza voce è pericoloso ma limitato — non controlla pienamente gli abomini.

SE I PG USANO LA CANZONE:
Cantano Thriller — quella vera, quella che conoscono. Serve almeno un cantante 
e uno che tenga il ritmo. Con il cuore di Dogti in mano, Dogti risponde — 
arriva dalla grotta o emerge dalla torre, attratto dalla melodia.

Con la canzone e il cuore i PG possono:
• Ordinare a Dogti di attaccare il Rospo direttamente
• Ordinare a Dogti di radunare gli abomini della torre e usarli contro il Rospo
• Usare Dogti come scudo o distrazione

SE IL ROSPO VEDE IL GLOBO:
Diventa ossessivo — smette temporaneamente di inseguire i PG e cerca di afferrare la sfera. 
Usabile come distrazione.

SE I PG RIDANNO IL CUORE A DOGTI:
Dogti lo ingoia. Si immobilizza un momento — poi si raddrizza. 
Qualcosa cambia nel suo sguardo vuoto. Attacca il Rospo di propria iniziativa, 
senza bisogno della canzone. È il suo modo di chiudere i conti.

COME MUORE IL ROSPO:
Fisicamente, tramite Dogti, o sgretolato se privato contemporaneamente del cuore e del globo. 
Il DM sceglie l'epilogo più soddisfacente in base a come si è svolta la scena.`
        },
        {
          titolo: "Epilogo — Il Ritorno al Villaggio",
          tipo: "scena",
          testo: `Con la morte del Rospo, la torre non crolla — resta lì, immobile, silenziosa. 
Ma le stanze non cambiano più. Le creature al suo interno si spengono una a una.

La strada verso il villaggio è lunga. 
Ma i fuochi della locanda si vedono da lontano — e dentro si sente già la musica.`,
          notaDM: `Il ritorno è una scena libera — il DM lascia che i giocatori raccontino. 
Cosa dicono ai nativi del villaggio? Cosa omettono? Chi credono loro?

Alexei è ancora vivo — peggio di prima, ma vivo. 
Se i PG hanno il cuore di Dogti, possono scegliere cosa farne. 
Se Dogti è ancora in piedi, è fuori dalla torre — libero per la prima volta da quando Ralia lo incatenò.

Non c'è una risposta giusta. La one shot finisce qui.`
        }
      ]
    }

  ],

  png: [
    {
      nome: "Alexei",
      ruolo: "Cavatore del villaggio — sopravvissuto",
      descrizione: "Ferite da graffio, polvere, delirante. Occhi gialli, denti che cadono, capelli a ciocche. Portatore involontario della corruzione di Dogti.",
      segreto: "Non sa di essere già condannato. La corruzione è irreversibile — il DM decide se esiste una via d'uscita in base alle scelte dei PG durante la sessione."
    },
    {
      nome: "Dimitri",
      ruolo: "Fratello di Alexei — morente alla cava",
      descrizione: "Braccio schiacciato dal masso. Schiena strappata a morsi. Convulsioni. Può ancora parlare frammenti di senso.",
      segreto: "Muore nel corso della scena. Ultima cosa che dice: 'Cantava. Mentre mi mangiava, cantava.' Il DM sceglie il momento più efficace."
    },
    {
      nome: "Dogti",
      ruolo: "Abominio — creazione di Ralia",
      descrizione: "Corpo umano in stadio avanzato di decomposizione, petto squarciato e vuoto. Si muove. Batte il moncherino dell'indice sinistro sul pavimento ritmicamente. Sembra aspettare che qualcuno gli dica qualcosa.",
      segreto: "Dogti non è sotto pieno controllo del Rospo. Il ritmo che batte è il tempo di Thriller — la canzone di Ralia. Se i PG gli ridanno il cuore, attacca il Rospo di propria iniziativa. Se liberato alla fine, è libero per la prima volta da quando Ralia lo incatenò."
    },
    {
      nome: "Il Biondo",
      ruolo: "Agente misterioso — cadavere nella grotta",
      descrizione: "Scheletro bloccato alla parete da tralicci di pietra. Lascia un diario. Stava inseguendo Fraxximt per conto di qualcuno (non specificato nel diario).",
      segreto: "Chi lo ha mandato? Perché? Non viene chiarito in questa one shot — gancio aperto per campagne future."
    },
    {
      nome: "Fraxximt il Rospo",
      ruolo: "Antagonista — mago pazzo, creatore della Torre",
      descrizione: "Scheletro riverso sul trono d'ossa. Vesti elaborate, meccanismi di ottone. Stringe al petto l'ampolla con il cuore di Dogti. Non crea incantesimi: li ruba e li corrompe.",
      segreto: "Senza corde vocali non può cantare né lanciare grandi incantesimi. Si rigenera bevendo sangue. Diventa ossessivo alla vista del globo. Muore se privato di cuore e globo contemporaneamente, o se Dogti lo attacca in autonomia."
    },
    {
      nome: "La Donna Coniglio",
      ruolo: "Creatura della Torre — guardiana della Stanza 4",
      descrizione: "Testa e orecchie di coniglio bianco su corpo umano. Siede sui gradini della scalinata. Parla con voce dolce. Sorride. Aspetta.",
      segreto: "Non entra nell'acqua — limite assoluto. Il fascino crea devozione ossessiva irrazionale. Si rompe se il PG viene ferito da un alleato o se la creatura è gravemente ferita. L'uscita è sott'acqua, sotto la scalinata."
    },
    {
      nome: "Il Gonogol",
      ruolo: "Creatura dell'Arena — viverna prigioniera",
      descrizione: "Una viverna enorme, incatenata al pavimento dell'arena. Ali bloccate, collare di ferro. Sputa acido denso e colloso. La folla invisibile scandisce il suo nome.",
      segreto: "Non è un nemico — è un prigioniero. Percepisce l'intenzione di chi vuole liberarla e smette di attaccarlo. Quando è libera, vola via e lascia aperta la botola verso il livello finale."
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
      descrizione: "Fogli manoscritti parzialmente bruciati trovati nel camino. La notazione è arcana. Il ritmo corrisponde a quello che Dogti batte sul pavimento — e alla canzone che i giocatori conoscono come Thriller di Michael Jackson, canzone popolare Varlmenn cantata da Ralia.",
      importanza: "Alta — chiave per evocare Dogti nella scena finale"
    },
    {
      nome: "Il Cuore di Dogti",
      descrizione: "Ampolla di vetro con spine d'ottone lucido. All'interno un cuore che pulsa ancora. Tramite arcano usato da Fraxximt per controllare gli abomini. Restituito a Dogti, lo libera dal controllo del Rospo.",
      importanza: "Alta — oggetto chiave della scena finale"
    },
    {
      nome: "Il Globo di Metallo",
      descrizione: "Sfera compatta raccoglibile dopo la risoluzione del tangram. Riserva densa di energia magica. Il Rospo la riconosce e ne diventa ossessivo alla sua vista — usabile come distrazione.",
      importanza: "Alta — risorsa e leva narrativa nella scena finale"
    }
  ],

  musica: [
    { capitolo: "cap1",  descrizione: "Locanda festosa", spotify: "" },
    { capitolo: "cap1b", descrizione: "Bosco / Cinghiale corrotto", spotify: "" },
    { capitolo: "cap2",  descrizione: "Grotta di Ralia e Dogti", spotify: "" },
    { capitolo: "cap3",  descrizione: "La Torre — ingresso", spotify: "" },
    { capitolo: "cap4",  descrizione: "Sala delle Spade / Bambini Bagnati", spotify: "" },
    { capitolo: "cap5",  descrizione: "La Donna Coniglio", spotify: "" },
    { capitolo: "cap6",  descrizione: "Il Globo / L'Arena del Gonogol", spotify: "" },
    { capitolo: "cap7",  descrizione: "Fraxximt il Rospo — resa dei conti", spotify: "" }
  ]
};
