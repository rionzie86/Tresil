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

    // ── CAP 0 ──────────────────────────────────────────────────────
    {
      id: "cap0",
      titolo: "Prologo",
      icona: "🌑",
      riassunto: "Introduzione all'ambientazione e ai personaggi. Kaelvaran, l'isola di Mushara, il tono della serata.",
      sezioni: [
        {
          titolo: "Presentazione",
          tipo: "scena",
          testo: `La serata inizia qui. Presentate i vostri personaggi, il contesto, le ragioni che li hanno portati fin qui. L'isola di Mushara è un entroterra montuoso a nord di Tresil — boschi fitti, villaggi isolati, una montagna che i locali evitano senza spiegarne il motivo.`,
          notaDM: `Usate questo momento per stabilire il tono: non è una sessione epica classica. È horror lento, degenerazione, meraviglia distorta. I giocatori devono sentire che qualcosa non va — ma non ancora cosa.`
        }
      ],
      musica: { titolo: "Recollection of Wars Long Lost", artista: "Colm McGuinness", descrizione: "Prologo" }
    },

    // ── CAP 1 ──────────────────────────────────────────────────────
    {
      id: "cap1",
      titolo: "Capitolo 1 — Il Villaggio",
      icona: "🏘️",
      riassunto: "Arrivo nel villaggio. L'atmosfera esterna è tetra, ma la locanda è calda e festosa. Un momento di respiro prima della tempesta.",
      sezioni: [
        {
          titolo: "In aperta campagna — La nebbia",
          tipo: "scena",
          testo: `Il sentiero scompare nella nebbia a pochi passi davanti a voi. Gli alberi ai lati sono sagome scure e immobili — il bosco non fa rumore. Nessun uccello, nessun vento, nessun fruscio. Solo l'ovatta umida della nebbia che smorza ogni cosa.

Poi lo sentite.

Una nota. Alta, sottile, quasi al limite di ciò che l'orecchio riesce a cogliere. Non sapete dire da dove venga — sembra arrivare da ogni direzione insieme, o forse da nessuna. C'è qualcosa di sbagliato in quel suono. Non nella nota in sé, ma nel fatto che esista — in questo silenzio, in questa nebbia, in questo posto dove niente dovrebbe fare rumore.

Man mano che avanzate, la nota si fa più nitida. È un violino. Una sola nota tenuta, ostinata, come un respiro che non viene mai esalato. Non si avvicina. Siete voi che vi avvicinate a lei.`
        },
        {
          titolo: "La Locanda — Arrivo",
          tipo: "scena",
          testo: `L'atmosfera esterna è tetra: cielo basso, bosco fitto, aria che sa di terra umida. 
Ma appena i personaggi varcano la soglia della locanda, la realtà sembra cambiare: fuochi alti, musica, 
risa, bevute. I nativi sono festosi e genuinamente ospitali — coinvolgono i PG in giochi, balli, 
brindisi. Non c'è minaccia qui. Solo calore umano prima della tempesta.`
        }
      ],
      musica: { titolo: "Terra Amata", artista: "Riccardo Mazza", descrizione: "Avvio ambientazione" }
    },

    // ── CAP 2 ──────────────────────────────────────────────────────
    {
      id: "cap2",
      titolo: "Capitolo 2 — La Locanda del Fauno Zoppo",
      icona: "🍺",
      riassunto: "La serata alla locanda nel pieno del festeggiamento. Cibo, birra, musica folk.",
      sezioni: [
        {
          titolo: "La Serata alla Locanda",
          tipo: "scena",
          testo: `La Locanda del Fauno Zoppo è il cuore del villaggio. Stasera è piena — gli abitanti festeggiano qualcosa che i PG non capiscono subito. Non importa: vengono trascinati dentro. Bevute, giochi di dadi, canzoni che non conoscono ma al cui ritmo si ritrovano a battere il piede.`,
          notaDM: `Usate questa scena per costruire legami tra i PG e i personaggi del villaggio. Chiunque muoia o soffra dopo ha più peso se i giocatori lo conoscono.`
        },
        {
          titolo: "Personaggi del Villaggio",
          tipo: "png",
          testo: `• Sura Vann — Locandiera. Donna robusta sulla cinquantina, voce che sovrasta il rumore della sala. Gestisce tutto con un'efficienza silenziosa e uno sguardo che non si lascia ingannare facilmente.

• Peto — Cameriere. Ragazzo giovane, sempre di corsa, sempre sudato. Ricorda ogni ordine senza scriverlo ma dimentica i nomi delle persone.

• Brask — Cuoco. Uomo enorme, quasi non parla. La sua cucina è off-limits per chiunque. Il cibo che produce è sorprendentemente delicato.

• Lena Drui — Guardia caccia. Donna asciutta, capelli corti, sempre con l'arco a tracolla. Poche parole, nessuno scherzo. Conosce ogni sentiero del bosco — ma dalla cava si tiene alla larga da mesi.

• Orm — Vecchio che ripara i tetti. Ottant'anni portati male, mente acutissima. Sale sui tetti con una sicurezza che mette ansia. Sa tutto quello che succede in paese perché dall'alto vede tutto.

• Tael e Mira Consu — Marito e moglie musicisti. Lui suona il violino, lei canta. Si litigano il ritmo da vent'anni e non si sono mai messi d'accordo. La musica che fanno insieme è bellissima.

• Aldric Poen — Borgomastro. Uomo di mezza età, compito, sempre ben vestito per essere un villaggio. Tiene molto all'ordine e poco alle domande scomode.

• Ysel — Assistente borgomastro. Giovane donna, efficiente, prende nota di tutto. È lei che sa davvero come funziona il villaggio. Il borgomastro lo sa e fa finta di niente.`
        }
      ],
      musica: { titolo: "Fisher's Hornpipe", artista: "Traditional / Folk", descrizione: "La locanda del fauno zoppo" }
    },

    // ── CAP 2a ─────────────────────────────────────────────────────
    {
      id: "cap2a",
      titolo: "Capitolo 2a — Arrivo di Alexei",
      icona: "🤕",
      riassunto: "La festa viene interrotta dall'arrivo di Alexei, un cavatore ferito e delirante. Qualcosa di brutto è successo alla cava.",
      sezioni: [
        {
          titolo: "Alexei — Il Cavatore",
          tipo: "png",
          testo: `Arriva trafelato, sporco di polvere, con ferite da graffio sul braccio e sul collo. 
Delira: suo fratello Dimitri è rimasto intrappolato sotto una frana alla cava. 
Mentre cercava di liberarlo, una bestia lo ha attaccato. Preso dal panico, è fuggito. 
Durante il ritorno al villaggio ha sentito la bestia seguirlo — si nutriva degli animali del bosco.`,
          notaDM: `Chi esamina Alexei da vicino nota che qualcosa di più profondo lo sta consumando: le ferite, pur recenti, hanno già iniziato a produrre pus. Gli occhi sono giallastri. Qualche dente gli cade mentre parla. Ciocche di capelli restano tra le dita quando si passa la mano sul capo.

Non è una normale infezione — è una corruzione accelerata, come se il corpo stesse marcendo a velocità innaturale. Il DM decide quanto è evidente in base a quanto i giocatori indagano.`
        }
      ],
      musica: { titolo: "Goats n' Goblins", artista: "Various Artists", descrizione: "Arrivo di Alexei" }
    },

    // ── CAP 3 ──────────────────────────────────────────────────────
    {
      id: "cap3",
      titolo: "Capitolo 3 — Viaggio verso la Cava",
      icona: "🌲",
      riassunto: "Il sentiero nel bosco. Silenzio innaturale. La strada giusta verso qualcosa di sbagliato.",
      sezioni: [
        {
          titolo: "La Strada verso la Cava",
          tipo: "viaggio",
          testo: `Il sentiero che porta alla cava si addentra nel bosco. 
È notte o tarda sera. La strada è silenziosa nel modo sbagliato — nessun verso di animali notturni.`,
          notaDM: `A metà strada i PG affrontano il cinghiale corrotto. In lontananza, durante o dopo lo scontro, chi guarda nel bosco può intravedere una figura umana immobile tra gli alberi che li osserva. Poi scompare. Il DM la mostra solo se qualcuno sta guardando nella direzione giusta.

La figura è Dogti. Nella nebbia, per un istante, una sagoma. Umanoide — forse. La testa pende di lato in un modo che fa male a guardare. Prima che qualcuno possa parlare, si muove: un movimento brusco, meccanico, come se il corpo obbedisse a un ordine sbagliato. Poi scompare nella nebbia.`
        }
      ],
      musica: { titolo: "Voices in the Vaults", artista: "Position Music", descrizione: "Viaggio verso la cava" }
    },

    // ── CAP 3a ─────────────────────────────────────────────────────
    {
      id: "cap3a",
      titolo: "Capitolo 3a — Il Cinghiale Corrotto",
      icona: "🐗",
      riassunto: "Scontro con la bestia che ha attaccato Alexei. Corrotta, veloce, in decomposizione mentre combatte.",
      sezioni: [
        {
          titolo: "Il Cinghiale Corrotto — Scontro",
          tipo: "scontro",
          testo: `Più grande di un cinghiale normale. I lembi di carne si staccano dalle ossa 
mentre si muove. Dal cranio escono mucchi di vermi che cadono sul terreno. 
Nonostante le condizioni del corpo, è veloce e aggressivo.`,
          notaDM: `Il cinghiale è pericoloso ma abbattibile. Chi viene colpito dalla sua carica rischia di contrarre una forma lieve della stessa corruzione che consuma Alexei — il DM valuta in base alla gravità della ferita.

Il cadavere del cinghiale, se esaminato, mostra lo stesso avanzato stadio di degenerazione interna di Alexei — ma concentrato, come se la bestia fosse corrotta da più tempo.`
        }
      ],
      musica: { titolo: "Prelude and Action", artista: "Immediate Music", descrizione: "Incontro con il cinghiale" }
    },

    // ── CAP 3b ─────────────────────────────────────────────────────
    {
      id: "cap3b",
      titolo: "Capitolo 3b — La Cava, Dimitri",
      icona: "⛏️",
      riassunto: "La frana, il fratello intrappolato. Una morte che non si può evitare. E sotto la roccia, qualcosa che non doveva esserci.",
      sezioni: [
        {
          titolo: "La Cava — Dimitri",
          tipo: "scena",
          testo: `La frana ha parzialmente ostruito l'ingresso alla cava. 
Dimitri è ancora lì: il braccio sinistro è schiacciato da un grande masso, 
il corpo ha convulsioni intermittenti nonostante sia cosciente. 
Quello che resta della mano schiacciata è in stato avanzato di decomposizione.
La schiena di Dimitri è stata strappata a morsi — ferite profonde, già necrotizzate.`,
          notaDM: `Dimitri non può essere salvato. La corruzione è troppo avanzata. Può ancora parlare in modo frammentato: "È uscita dalla roccia... cantava... Dio, cantava mentre mi mangiava." Muore nel corso della scena — il DM sceglie il momento più drammaticamente efficace.

La frana ha aperto un accesso a una grotta preesistente — è da lì che è uscita la creatura.`
        }
      ],
      musica: { titolo: "Entity Brain", artista: "Cryo Chamber", descrizione: "Incontro con Dogti" }
    },

    // ── CAP 4 ──────────────────────────────────────────────────────
    {
      id: "cap4",
      titolo: "Capitolo 4 — La Grotta di Ralia e Dogti",
      icona: "🕯️",
      riassunto: "Oltre le macerie si apre una stanza antica, abitata a lungo. Una storia d'amore diventata abominio — e una via verso la Torre.",
      sezioni: [
        {
          titolo: "Oltre le Macerie",
          tipo: "scena",
          testo: `Le macerie cedono sotto i piedi con un rumore sordo. Oltre, il buio è totale — l'aria è ferma, vecchia, come se nessuno l'avesse respirata da molto tempo. Quando gli occhi si abituano, nell'angolo in basso a destra, si intravede l'orlo di un tappeto. Logoro, di un colore che non si riesce più a definire. Qualcuno viveva qui.`
        },
        {
          titolo: "L'Interno della Stanza",
          tipo: "scena",
          testo: `La stanza è piccola e bassa. Si vede subito che qualcuno l'ha abitata a lungo — non per scelta, ma per necessità. Due stuoie consumate sul pavimento, disposte a qualche metro di distanza. Un avvallamento nella parete di destra è stato adattato a camino: le pareti annerite dal fumo, sul fondo un cumulo di cenere e frammenti di carta bruciata, vecchi di decenni. Non c'è più nulla di leggibile.

Al centro della stanza, accasciato contro una stalagmite, c'è un corpo. Non è recente — la pelle è secca, tirata sull'osso. La stalagmite gli è entrata nel fianco e fuoriesce dall'altro lato. La posizione suggerisce che non sia caduto: si è seduto lì. Accanto, sul pavimento, c'è il diario.`
        },
        {
          titolo: "Il Diario del Biondo",
          tipo: "documento",
          testo: `La copertina è di cuoio scuro, le pagine ingiallite. L'ultima è macchiata di sangue.`,
          documentoCompleto: `DIARIO DI CAMPO — IL BIONDO
Ad uso esclusivo del Consiglio Ristretto di Tresil


[Prima annotazione, data illeggibile]

Sono tre mesi che seguo le tracce di Fraxximt. Tre mesi di false piste, testimonianze contraddittorie e notti passate a convincere doganieri e locandieri che le mie domande erano lecite. Il Consiglio mi ha dato carta bianca e poco altro. Non è un uomo facile da trovare, o meglio, lo è stato. Il problema è che quando lo trovi, lui non è mai solo.

L'artefatto che ha trafugato dalla Guardia delle Sette Memorie è ancora nelle sue mani. Non so cosa pianifichi di farne. So che non è stupido, e questo mi preoccupa più di qualsiasi altra cosa.


[Seconda annotazione, Fossolento]

Ho iniziato dall'inizio: Fossolento, il villaggio dove è nato. Un posto che sa di sale e pesce essiccato, dove i bambini giocano vicino ai moli e i vecchi siedono fuori dalle porte a guardare il mare. Non il posto da cui ti aspetti esca un mago che ruba artefatti al Consiglio.

Ho parlato con chi lo ricordava. Era uno studioso, dicevano. Brillante, un poco strano, ma non cattivo. Aveva una moglie e un marito, tutti e tre inseparabili. Poi se n'è andato per studiare, come fanno quelli che hanno cervello e non vogliono sprecarsi a riparare reti da pesca. Nessuno lo ha visto tornare.

Mi chiedo se lo abbiano cercato.


[Terza annotazione, Greyhollow, Brennvar Varlhavn]

L'ho quasi preso.

Quasi.

Greyhollow è una città che puzza di carbone e ambizione, il tipo di posto dove un mago in fuga può sparire tra mille facce anonime. Invece lui si è fatto notare. Qualcuno che si fa notare o è disperato o è arrogante. Fraxximt, ho capito, è entrambe le cose.

Ho seguito la pista fino a un archivio privato nel quartiere basso. Era lì che cercava qualcosa, un incantesimo, secondo le voci. Quando ho sfondato la porta era ancora dentro. La colluttazione è stata breve. Lui ha attivato una maledizione che non avevo visto arrivare, e il fuoco ha fatto il resto.

Non su di me. Su di lui.

Mi sono fermato sulla soglia a guardarlo mentre si teneva il viso tra le mani. Le ustioni erano serie. Il tipo di ustioni che non guariscono mai del tutto. Quando ha abbassato le mani e mi ha guardato, ho capito perché da quel giorno tutti avrebbero smesso di chiamarlo Fraxximt.

È scappato prima che potessi bloccarlo. Ha portato con sé quello che cercava: un incantesimo antico, oscuro, con più rischi che benefici. Qualcosa che evoca un'ombra dal mondo dei Dimenticati, nell'Oltrevelo. Non riesco ancora a capire perché lo voglia. Le ombre dei Dimenticati non obbediscono a nessuno. Non ricordano nemmeno se stesse.

Da Greyhollow in poi, lo chiamo il Rospo.


[Quarta annotazione, Impero Solnari, luogo non specificato]

Non avrei dovuto seguirlo qui. Le guerre civili hanno reso ogni confine una trappola e ogni volto uno straniero potenzialmente ostile. Ho attraversato tre posti di blocco con documenti che reggono all'esame solo se l'esaminatore non è troppo sveglio.

Il Rospo si muove come se le guerre non lo riguardassero. Forse non lo riguardano davvero, un uomo con il viso bruciato e nessuna bandiera è invisibile in un posto dove tutti guardano il nemico dall'altra parte.

L'ha preso in un tempio abbandonato a due giorni dalla costa. Un amuleto Solnari, antico, pre-Frattura, secondo le mie stime. Plasma la pietra. La modella come argilla, a quanto ne so. Non ho capito subito il perché. Lo sto ancora capendo.

L'ho perso di nuovo prima di riuscire a bloccarlo. Stavo seguendo quella che pensavo fosse una pista solida che lo riportava nel Varlhavn quando è arrivata la missiva del Consiglio.

Il Rospo era stato avvistato a Rombia.

Ho impiegato un momento a ricordare dov'era Rombia. Isola di Mushara. A nord di Tresil.

Sono ripartito quella stessa notte.


[Quinta annotazione, Rombia]

Il villaggio puzza ancora. Non di morte, di qualcosa prima della morte. Quell'odore umido e ferroso che si attacca alle pareti e non se ne va più.

L'epidemia ha colpito quattro mesi fa. Chi è rimasto parla poco e tiene gli occhi bassi, come se guardare in faccia le persone fosse diventato pericoloso. Forse lo è.

Ho ricostruito la sequenza con pazienza, un testimone alla volta.

Cinque giorni prima che iniziasse tutto, una ragazza e il suo compagno erano passati dal villaggio. Non si erano fermati, avevano solo comprato qualcosa al mercato, della carne, delle verdure, del pane, e poi erano ripartiti verso nord. La ragazza sembrava stanca ma sana. Il compagno camminava storto, in un modo che non tornava, come se qualcosa nel suo corpo non funzionasse nel verso giusto. Nessuno ci aveva dato peso.

Poi era arrivata l'epidemia. Persone e animali in preda a qualcosa che somigliava alla rabbia, occhi iniettati di sangue, morsi, urla. Una cosa che si trasmetteva al contatto. Non tutti erano caduti, ma abbastanza.

Due mesi dopo l'epidemia era arrivato il Rospo. Lo hanno descritto senza saperlo: viso segnato, occhi attenti, non beveva. Faceva domande sulla ragazza e sul suo compagno. Molte domande. Ma faceva anche domande strane, domande sui sogni degli abitanti durante i giorni dell'epidemia, cosa avevano visto, se si ricordavano qualcosa al risveglio, se i sogni erano cambiati. Nessuno aveva capito perché. Poi aveva pagato il conto ed era partito verso nord, nella stessa direzione della ragazza.

Io sono arrivato altri due mesi dopo. Ho ascoltato, ho preso note, ho ringraziato e sono ripartito.

Il Rospo non stava inseguendo la ragazza in tempo reale. Stava seguendo una traccia di magia che l'epidemia aveva lasciato nell'aria. Cercava qualcosa da rubare, come sempre. Ha trovato qualcosa di peggio.


[Sesta annotazione, ai piedi del monte, notte]

Le tracce dell'amuleto Solnari sono ovunque qui. La pietra è stata lavorata, non in modo grezzo, ma con una precisione che fa quasi paura. Qualcuno ha aperto un passaggio dove non doveva esserci nessun passaggio.

Ho forzato l'ingresso. Dentro ho trovato una stanza. Piccola, bassa, abitata a lungo. Due stuoie. Un camino ricavato nella roccia. L'odore di chi ha vissuto qui per mesi senza mai uscire.

E due cadaveri.

Una ragazza, Ralia, ho trovato il nome su alcuni scritti sparsi. E un ragazzo con il petto squarciato. Il cuore non c'era. La cavità toracica era pulita, quasi chirurgica. Non è stato un animale.

Ho capito cosa cercava il Rospo. Non la ragazza. Quello che la ragazza portava con sé.

Sono entrato nella torre.


[Settima annotazione, scritta a tratti, l'inchiostro macchia il foglio in punti irregolari]

devo essere rapido. la mano non risponde bene.

la torre è una follia. non c'è altro modo per dirlo. cambia, le stanze si spostano, le scale non portano dove dovrebbero. il Rospo ha aperto un varco con l'incantesimo delle ombre e la torre ne è piena. incubi, ombre dei Dimenticati che non ricordano chi erano ma ricordano come fare del male. li tiene lontani solo la luce dell'occhio, ho tenuto gli occhi aperti finché potevo.

ci sono anche spettri nelle scale. nel piano più basso. non si avvicinano se non ti fermi.

sono arrivato al piano nascosto. oltre il trono del Rospo.

non voglio scrivere quello che ho trovato lì. ma devo. qualcuno deve saperlo.

Eritha. la moglie del Rospo. era lì. quello che il Rospo ha fatto a lei, non so se chiamarlo ancora con un nome umano. l'ha trasformata. una macchina. produce bambini che non sono bambini. e l'altro, il marito, credo, trasformato in un guardiano. gli occhi vuoti. nessuna volontà rimasta dentro.

ho trovato l'artefatto. un'ampolla. spine di ottone attorno al vetro. dentro un cuore. pulsava. più mi avvicinavo all'uscita più batteva forte, come se sentisse qualcosa.

quando sono tornato nella grotta lui mi aspettava.

il ragazzo col petto aperto. si muoveva. non come prima, con intenzione. mi ha strappato l'ampolla. stava per infilarsela nel petto quando uno sperone di roccia è uscito dalla parete.

mi ha attraversato la pancia.

ha attraversato anche lui.

poi la musica. qualcuno fischiettava, labbra screpolate, una nota che non finiva mai. il ragazzo col petto aperto si è bloccato di colpo. completamente fermo. come pietrificato dal suono.

il Rospo è entrato nella stanza. ha strappato l'ampolla dalle mani del ragazzo. ha chiuso tutto, l'ingresso esterno, l'ingresso alla torre. pietra su pietra.

mi ha lasciato qui.


[Ultima annotazione, scrittura quasi illeggibile]

il ragazzo col petto aperto ansima accanto a me. ogni tanto mi guarda. non so cosa veda.

poi ha parlato.

si chiama Dogti. o si chiamava. non sono sicuro che lui sappia la differenza.

mi ha detto di Rahlia. che era morto in una guerra che non ricordava più e che era rimasto nell'oscurità finché non aveva sentito il suo canto. che il canto lo aveva riportato, non in vita, ma a qualcosa che le somigliava. che erano scappati insieme perché chiunque si avvicinasse a lui finiva come lui, e lei non voleva che succedesse a nessuno.

si erano nascosti qui. per un tempo che lui non sa misurare.

poi il Rospo li aveva trovati. aveva ucciso Rahlia. gli aveva strappato il cuore dal petto, letteralmente, con le mani, e lo aveva usato come tramite per quello che stava costruendo.

da allora Dogti è qui. senza cuore. senza Rahlia. senza una ragione per muoversi che non sia quella nota fischiettata che a volte arriva da sopra e lo fa smettere di pensare.

mi dispiace, gli ho detto. non so se capisce.

la mano non si muove più bene.

l'artefatto è nella torre. il Rospo ce l'ha. non sono riuscito a portarlo via.

Mi dispiace, Iria amore mio.

— Il Biondo`,
          notaDM: `Il Biondo è il cadavere accasciato sulla stalagmite.

Informazioni chiave che i PG ricavano dal diario:
• Il nome del mago: Fraxximt il Rospo
• La torre cambia continuamente — non c'è una via diretta al mago
• Esiste il "cuore di Dogti" usato come tramite arcano
• La canzone va cantata — ed è legata a Dogti in modo profondo`
        },
        {
          titolo: "La Parete di Fondo",
          tipo: "scena",
          testo: `La parete di fondo non è roccia naturale. La superficie è innaturalmente liscia e uniforme — creata magicamente, non una formazione naturale.`,
          notaDM: `Se la parete d'ingresso era uguale a questa, lo spessore massimo è di 25 cm — un colpo deciso è sufficiente a frantumarla. Non serve forza straordinaria né magie particolari: la parete era pensata per trattenere qualcuno dentro, non per resistere a chi viene da fuori. Oltre la parete: l'ingresso alla Torre della Follia.`
        }
      ],
      musica: { titolo: "White Stone", artista: "Atrium Carceri", descrizione: "La grotta di Ralia e Dogti" }
    },

    // ── CAP 5 ──────────────────────────────────────────────────────
    {
      id: "cap5",
      titolo: "Capitolo 5 — L'Ingresso nella Torre",
      icona: "🗼",
      riassunto: "Oltre la parete magica si apre una struttura impossibile. Scale che non portano da nessuna parte — o forse ovunque.",
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
          notaDM: `La torre segue una logica propria: che i PG salgano o scendano, si ritrovano davanti allo stesso arco di pietra — l'ingresso alla prima stanza. Non si può saltare le stanze. Non si può raggiungere il mago senza attraversarle in sequenza. La struttura è un labirinto narrativo, non geometrico.`
        }
      ],
      musica: { titolo: "Searching for Answer", artista: "Kammarheit", descrizione: "La grotta di Ralia e Dogti" }
    },

    // ── CAP 6 ──────────────────────────────────────────────────────
    {
      id: "cap6",
      titolo: "Capitolo 6 — La Passerella",
      icona: "👁️",
      riassunto: "Un ponte di pietra nel buio assoluto. Le ombre aggrediscono chi si ferma. Un occhio di metallo e vetro che non perdona l'immobilità.",
      sezioni: [
        {
          titolo: "Stanza 1 — Il Ponte e l'Occhio",
          tipo: "stanza",
          marcatore: "Chiave di volta: grande occhio stilizzato",
          testo: `Oltre l'arco: buio assoluto. Una singola lampada sospesa a mezz'aria illumina debolmente la terrazza su cui vi ritrovate. A cinque metri dall'ingresso inizia un ponte in mattoni e pietra — ben costruito, lineare, scompare nel buio davanti a voi. Guardando i bordi della terrazza e del ponte noterete che pietra e mattoni sono graffiati e sbeccati ovunque, come se mille lame avessero provato per anni a tagliarne gli spigoli.

Chi si avvicina al bordo della terrazza e guarda nel vuoto può intravedere, lontano in fondo al crepaccio, un piccolo bagliore.`,
          notaDM: `LE OMBRE
Appena un personaggio mette il piede fuori dal cono di luce della lampada, le ombre si attivano. Si muovono veloci, silenziose, e cercano di trascinare chiunque sia al buio. La luce dell'occhio le distrugge — ma la lampada da sola non basta. Se il personaggio torna nella luce della lampada le ombre si ritirano.

L'OCCHIO
Appena un personaggio mette il piede sul ponte, un suono metallico scricchiola nell'alto del buio. Piano piano, un gigantesco occhio di metallo e vetro inizia ad aprirsi e a irradiare il ponte di luce. Finché il personaggio cammina senza fermarsi, l'occhio resta aperto — e le ombre restano lontane.

Se il personaggio si ferma, l'occhio inizia lentamente a chiudersi. Se si chiude completamente le ombre emergono dal buio da ogni lato e fanno a pezzi chiunque si trovi sul ponte.

Non c'è modo di combattere l'occhio. Non c'è modo di fermarsi. L'unica via è attraversare.

Al ritorno sulle scale i PG sentono risate di bambini — sopra e sotto di loro. Una palla di stracci rotola e rimbalza giù dalle scale passando tra i loro piedi. Non ci sono bambini visibili.`
        }
      ],
      musica: { titolo: "A Room Between the Rooms", artista: "Lustmord", descrizione: "Ingresso nella torre" }
    },

    // ── CAP 7 ──────────────────────────────────────────────────────
    {
      id: "cap7",
      titolo: "Capitolo 7 — Il Labirinto di Specchi",
      icona: "🪞",
      riassunto: "Una palude interna. Specchi a perdita d'occhio. I riflessi escono dagli specchi.",
      sezioni: [
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
          notaDM: `I riflessi combattono i PG come versioni distorte di loro stessi — stesse capacità base, ma con una peculiarità orrifica scelta dal DM per ogni personaggio. Se lo specchio da cui è uscito un riflesso viene distrutto, il riflesso si spezzetta e muore.

Per uscire: trovare uno specchio nel quale il proprio riflesso si comporta ancora normalmente ed entrarci. I riflessi sani si spostano — non è immediato trovarli.`
        }
      ],
      musica: { titolo: "Great Old One", artista: "Cryo Chamber Collaboration", descrizione: "La passerella — Il ponte" }
    },

    // ── CAP 8 ──────────────────────────────────────────────────────
    {
      id: "cap8",
      titolo: "Capitolo 8 — Il Corridoio delle Spade",
      icona: "⚔️",
      riassunto: "Un corridoio di lame meccaniche e scheletri mossi come marionette.",
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
          notaDM: `Il ritmo delle spade è irregolare — il DM decide quando cadono per massimizzare la tensione. Gli scheletri sono attivi solo mentre le lame sono a terra.

I PG possono cercare di sabotare i meccanismi — il DM valuta l'approccio e tira il dado percentuale. Sabotare le lame in posizione abbassata blocca il corridoio ma rende gli scheletri permanentemente attivi. Sabotarle in posizione sollevata blocca gli scheletri ma le lame restano una minaccia passiva.`
        }
      ],
      musica: null
    },

    // ── CAP 9 ──────────────────────────────────────────────────────
    {
      id: "cap9",
      titolo: "Capitolo 9 — I Bambini Bagnati",
      icona: "💧",
      riassunto: "Tra la terza e la quarta stanza. Cinque o sei bambini, fermi, bagnati, in silenzio. Non sono una minaccia. Sono un'immagine.",
      sezioni: [
        {
          titolo: "I Bambini Bagnati",
          tipo: "scena",
          testo: `Tornando sulle scale tra la terza e la quarta stanza, i PG li trovano finalmente.

Cinque o sei bambini di età diverse, fermi sulla soglia. Sono completamente bagnati — 
i vestiti incollati alla pelle, i capelli appiccicati al viso, pozze d'acqua ai loro piedi. 
Non parlano. Non si muovono. Fissano il gruppo con occhi aperti e vuoti.

Non reagiscono se avvicinati. Non rispondono alle domande. Se qualcuno tende la mano, 
un bambino abbassa lentamente lo sguardo su di essa — e poi torna a fissare dritto davanti.

Sulla soglia della quarta stanza: una testa di coniglio incisa nella chiave di volta.`,
          notaDM: `I bambini non sono una minaccia e non possono essere interagiti in modo significativo. Sono un'immagine — una presenza. Non spiegare chi sono o cosa significano.

Se qualcuno usa magie di rilevamento: nessuna risposta. Non sono nulla che si possa classificare. Quando i PG entrano nella quarta stanza, i bambini non li seguono — e non sono più lì al ritorno.`
        }
      ],
      musica: null
    },

    // ── CAP 10 ─────────────────────────────────────────────────────
    {
      id: "cap10",
      titolo: "Capitolo 10 — La Donna Coniglio",
      icona: "🐇",
      riassunto: "Una passerella su un'acqua impossibile, corpi di bambini sospesi nel nulla, e una creatura che divide il gruppo contro se stesso.",
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
          notaDM: `La Donna Coniglio usa il fascino per dividere il gruppo. Il DM tira il dado percentuale per ogni PG che la guarda negli occhi — chi fallisce cade in una devozione ossessiva irrazionale.

Il fascino si rompe se il personaggio viene ferito da un alleato, o se la Donna Coniglio è gravemente ferita.

La Donna Coniglio non entra nell'acqua — questo è il suo limite assoluto.

L'USCITA: nascosta sotto la scalinata di pietra, raggiungibile solo tuffandosi e nuotando in immersione. Chi si immerge la vede chiaramente — una porta di pietra sul fondo. I corpi dei bambini non reagiscono a chi nuota tra loro.`
        }
      ],
      musica: null
    },

    // ── CAP 11 ─────────────────────────────────────────────────────
    {
      id: "cap11",
      titolo: "Capitolo 11 — Il Globo di Metallo",
      icona: "🌐",
      riassunto: "Un tangram nel buio cosmico. La luce cala mentre i PG lavorano. Il globo completato è una riserva di energia magica.",
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
          notaDM: `Il DM gestisce il puzzle come una serie di momenti narrativi, tirando il dado percentuale per ogni fase significativa. Il ritmo con cui la luce cala è a discrezione — va usato per creare tensione, non per punire.

Se il globo viene completato: si compatta in una sfera liscia raccoglibile. È una riserva densa di energia magica.

Dopo la raccolta: il pavimento cede e i PG cadono nell'arena.`,
          tangram: true
        }
      ],
      musica: null
    },

    // ── CAP 12 ─────────────────────────────────────────────────────
    {
      id: "cap12",
      titolo: "Capitolo 12 — L'Arena, il Gonogol",
      icona: "🐉",
      riassunto: "Il colosseo nella roccia. La folla invisibile. Una viverna incatenata che non è un nemico — è un prigioniero.",
      sezioni: [
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

OBIETTIVO: liberare la cinghia del collare, non uccidere la viverna. La cinghia è un meccanismo di cuoio rinforzato sul retro del collare. La viverna sputa acido denso e colloso che rimane sulla pelle e continua a bruciare.

Il DM tira il dado per chi cerca di avvicinarsi e per chi tenta di aprire la cinghia. La viverna percepisce l'intenzione di chi vuole liberarla — smette di attaccarlo in quel momento.

QUANDO È LIBERA: La catena cade. Il Gonogol apre le ali — enormi, bellissime — e si lancia verso il buco in cima. La folla ammutolisce. Silenzio totale. Poi scompare. Al centro del pavimento: una botola aperta verso il livello finale.`
        }
      ],
      musica: null
    },

    // ── CAP 13 ─────────────────────────────────────────────────────
    {
      id: "cap13",
      titolo: "Capitolo 13 — La Stanza del Trono",
      icona: "💀",
      riassunto: "Lo scheletro del Rospo sul trono d'ossa. Il cuore pulsante di Dogti. Una goccia di sangue può rimettere tutto in moto.",
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
          notaDM: `La stanza è silenziosa. Nessuna minaccia immediata visibile. Il DM lascia respirare la scena — questo è il momento in cui i giocatori decidono cosa fare.

Se i PG hanno il globo di metallo: appena entra nella stanza, le dita dello scheletro si contraggono leggermente. Se avvicinano il globo, lo scheletro si agita — come se lo riconoscesse e lo volesse. I PG capiscono che il globo ha valore qui.`
        },
        {
          titolo: "Recuperare il Cuore",
          tipo: "scena",
          testo: `L'ampolla è stretta tra le dita ossute del Rospo. Staccarla richiede forza 
o delicatezza — o entrambe. Le spine d'ottone sono aguzze.`,
          notaDM: `Il rischio centrale: se durante il recupero un PG si ferisce e una goccia di sangue cade sul corpo del Rospo, lo scheletro si risveglia.

Il DM tira il dado percentuale per ogni tentativo di recupero — chi usa delicatezza e pazienza ha più margine, chi strappa con forza rischia di scheggiarsi la mano sulle spine d'ottone.`
        }
      ],
      musica: null
    },

    // ── CAP 14 ─────────────────────────────────────────────────────
    {
      id: "cap14",
      titolo: "Capitolo 14 — Il Rospo si Risveglia",
      icona: "🦴",
      riassunto: "Fraxximt si alza dal trono. Senza voce, senza incantesimi potenti. Ma si muove verso il sangue.",
      sezioni: [
        {
          titolo: "Il Rospo si Risveglia",
          tipo: "scontro",
          testo: `Fraxximt si alza dal trono. Le ossa scricchiolano. I meccanismi di ottone sul trono 
si sfilano e si riattaccano al suo corpo come esoscheletro. 
Non ha corde vocali — non può parlare, non può cantare, non può lanciare grandi incantesimi. 
Emette solo un sibilo rauco e continuo. Si muove verso il sangue.`,
          notaDM: `Il Rospo senza voce è pericoloso ma limitato — non controlla pienamente gli abomini.

SE I PG USANO LA CANZONE:
Cantano Thriller — quella vera, quella che conoscono. Serve almeno un cantante e uno che tenga il ritmo. Con il cuore di Dogti in mano, Dogti risponde — arriva dalla grotta o emerge dalla torre, attratto dalla melodia.

Con la canzone e il cuore i PG possono:
• Ordinare a Dogti di attaccare il Rospo direttamente
• Ordinare a Dogti di radunare gli abomini della torre e usarli contro il Rospo
• Usare Dogti come scudo o distrazione

SE IL ROSPO VEDE IL GLOBO:
Diventa ossessivo — smette temporaneamente di inseguire i PG e cerca di afferrare la sfera. Usabile come distrazione.

SE I PG RIDANNO IL CUORE A DOGTI:
Dogti lo ingoia. Si immobilizza un momento — poi si raddrizza. Qualcosa cambia nel suo sguardo vuoto. Attacca il Rospo di propria iniziativa, senza bisogno della canzone. È il suo modo di chiudere i conti.

COME MUORE IL ROSPO:
Fisicamente, tramite Dogti, o sgretolato se privato contemporaneamente del cuore e del globo. Il DM sceglie l'epilogo più soddisfacente in base a come si è svolta la scena.`
        },
        {
          titolo: "Epilogo — Il Ritorno al Villaggio",
          tipo: "scena",
          testo: `Con la morte del Rospo, la torre non crolla — resta lì, immobile, silenziosa. 
Ma le stanze non cambiano più. Le creature al suo interno si spengono una a una.

La strada verso il villaggio è lunga. 
Ma i fuochi della locanda si vedono da lontano — e dentro si sente già la musica.`,
          notaDM: `Il ritorno è una scena libera — il DM lascia che i giocatori raccontino. Cosa dicono ai nativi del villaggio? Cosa omettono? Chi credono loro?

Alexei è ancora vivo — peggio di prima, ma vivo. Se i PG hanno il cuore di Dogti, possono scegliere cosa farne. Se Dogti è ancora in piedi, è fuori dalla torre — libero per la prima volta da quando Ralia lo incatenò.

Non c'è una risposta giusta. La one shot finisce qui.`
        }
      ],
      musica: null
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


};
