// data_torre.js — La Torre della Follia
// One Shot ambientata nel mondo di Kaelvaran

const torreDati = {
  titolo: "La Torre della Follia",
  sottotitolo: "Una one shot per 3–5 avventurieri",
  ambientazione: "Isola di Mushara (antico nome Solnaro di Tresil) — entroterra montuoso a nord. Il villaggio di partenza è Rombia.",
  tono: "Horror cosmico, degenerazione, meraviglia distorta",
  antagonista: "Fraxximt il Rospo — mago pazzo, ladro di incantesimi, creatore di abomini",
  loreSegreta: `Fraxximt ha trovato la grotta di Rahlia e Dogti durante gli scavi della sua torre. 
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
      titolo: "Capitolo 1 — Il Villaggio di Rombia",
      icona: "🏘️",
      riassunto: "Arrivo a Rombia. L'atmosfera esterna è tetra, ma la locanda è calda e festosa. Un momento di respiro prima della tempesta.",
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
brindisi. Non c'è minaccia qui. Solo calore umano prima della tempesta.`,
          notaDM: `Rombia è lo stesso villaggio descritto nella quinta annotazione del diario del Biondo (cap.5): quello colpito dall'epidemia pochi giorni dopo il passaggio di Rahlia e Dogti. I PG non lo sanno ancora. Le storie raccontate durante la festa della prima sera (vedi materiale a parte) possono includere proprio quella leggenda — raccontata come voce, superstizione o ricordo di famiglia — così che quando i PG leggeranno il diario al cap.5 il collegamento esploda con più forza.`
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
Mentre cercava di liberarlo, qualcosa lo ha aggredito — non sa dire se fosse un uomo o una bestia, 
si muoveva sbagliato, a scatti, e batteva le dita a un ritmo che non riusciva a togliersi dalla testa. 
Preso dal panico, è fuggito. Durante il ritorno al villaggio ha sentito la cosa seguirlo nel buio, 
per un tratto — poi più nulla.`,
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
      riassunto: "Un animale del bosco, corrotto dalla stessa presenza che infesta la zona. Non è ciò che ha aggredito Alexei — solo un altro segno che qualcosa, là fuori, sta contaminando ogni cosa vivente.",
      sezioni: [
        {
          titolo: "Il Cinghiale Corrotto — Scontro",
          tipo: "scontro",
          testo: `Più grande di un cinghiale normale. I lembi di carne si staccano dalle ossa 
mentre si muove. Dal cranio escono mucchi di vermi che cadono sul terreno. 
Nonostante le condizioni del corpo, è veloce e aggressivo.`,
          notaDM: `Il cinghiale è pericoloso ma abbattibile. Chi viene colpito dalla sua carica rischia di contrarre una forma lieve della stessa corruzione che consuma Alexei — il DM valuta in base alla gravità della ferita.

Il cadavere del cinghiale, se esaminato, mostra lo stesso avanzato stadio di degenerazione interna di Alexei — ma concentrato, come se la bestia fosse corrotta da più tempo.

IMPORTANTE: questo cinghiale non è la creatura che ha aggredito Alexei alla cava — quella era Dogti (vedi cap.3, la sagoma umanoide intravista nel bosco, e cap.4). Il cinghiale è solo un'altra vittima della stessa corruzione diffusa nella zona: un modo per far percepire ai PG che il fenomeno non è isolato a una singola bestia, prima ancora di scoprire cosa lo stia davvero causando.`
        }
      ],
      musica: { titolo: "Entity Brain", artista: "Cryo Chamber", descrizione: "Incontro con il cinghiale" }
    },

    // ── CAP 4 ──────────────────────────────────────────────────────
    {
      id: "cap4",
      titolo: "Capitolo 4 — La Cava, Dimitri",
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
          notaDM: `Dimitri non può essere salvato. La corruzione è troppo avanzata. Può ancora parlare in modo frammentato: "È uscita dalla roccia... batteva le dita, un ritmo, sempre lo stesso... Dio, lo batteva mentre mi mangiava." Muore nel corso della scena — il DM sceglie il momento più drammaticamente efficace.

La frana ha aperto un accesso a una grotta preesistente — è da lì che è uscita la creatura.`
        }
      ],
      musica: { titolo: "Camelot in Flames", artista: "Daniel Pemberton", descrizione: "La cava — Dimitri" }
    },

    // ── CAP 5 ──────────────────────────────────────────────────────
    {
      id: "cap5",
      titolo: "Capitolo 5 — La Grotta di Rahlia e Dogti",
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
          testo: `La stanza è piccola e bassa. Si vede subito che qualcuno l'ha abitata — non per scelta, ma per necessità. Due stuoie consumate sul pavimento, disposte a qualche metro di distanza. Sparse intorno: bende ingiallite arrotolate male, piccole boccette di vetro con dentro residui di medicinali casalinghi, fasci di erbe essiccate appese a chiodi nella roccia, simboli sacri di guarigione incisi a mano su pezzi di legno e pietra. Un avvallamento nella parete di destra è stato adattato a camino: le pareti annerite dal fumo, sul fondo un cumulo di cenere e frammenti di carta bruciata, vecchi di decenni. Non c'è più nulla di leggibile.

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

Ho parlato con chi lo ricordava. Era uno studioso, dicevano. Brillante, un poco strano, ma non cattivo. Aveva una moglie e un marito, tutti e tre inseparabili — Dorvek, un occhio verde e uno scuro, mento squadrato, e una giovane contadina del villaggio. Poi se n'è andato per studiare, come fanno quelli che hanno cervello e non vogliono sprecarsi a riparare reti da pesca. Nessuno lo ha visto tornare.

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

Una ragazza, Rahlia, ho trovato il nome su alcuni scritti sparsi. E un ragazzo con il petto squarciato. Il cuore non c'era. La cavità toracica era pulita, quasi chirurgica. Non è stato un animale.

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

prima che smettesse di parlare, Dogti ha iniziato a fischiettare. piano, con le labbra screpolate. ho riconosciuto la melodia — è una canzone popolare Varlmenn, la conosco. ho trascritto le note qui sotto mentre potevo ancora muovere la mano.

[note musicali trascritte — la melodia di Thriller, in notazione arcana]

sotto le note ha tracciato con un dito nel sangue sul pavimento queste parole: l'amata la cantava per richiamare l'amato.

la mano non si muove più bene.

l'artefatto è nella torre. il Rospo ce l'ha. non sono riuscito a portarlo via.

Mi dispiace, Iria amore mio.

— Il Biondo`,
          notaDM: `Il Biondo è il cadavere accasciato sulla stalagmite.

Informazioni chiave che i PG ricavano dal diario:
• Il nome del mago: Fraxximt il Rospo
• La torre cambia continuamente — non c'è una via diretta al mago
• Esiste il "cuore di Dogti" usato come tramite arcano
• La canzone va cantata — ed è legata a Dogti in modo profondo. Le note sono trascritte nel diario con l'appunto "l'amata la cantava per richiamare l'amato"
• Dorvek: un occhio verde e uno scuro, mento squadrato — indizio per riconoscere la faccia vincente nel Gonogol`
        },
        {
          titolo: "La Parete di Fondo",
          tipo: "scena",
          testo: `La parete di fondo non è roccia naturale. La superficie è innaturalmente liscia e uniforme — creata magicamente, non una formazione naturale.`,
          notaDM: `Se la parete d'ingresso era uguale a questa, lo spessore massimo è di 25 cm — un colpo deciso è sufficiente a frantumarla. Non serve forza straordinaria né magie particolari: la parete era pensata per trattenere qualcuno dentro, non per resistere a chi viene da fuori. Oltre la parete: l'ingresso alla Torre della Follia.`
        }
      ],
      musica: { titolo: "White Stone", artista: "Atrium Carceri", descrizione: "La grotta di Rahlia e Dogti" }
    },

    // ── CAP 6 ──────────────────────────────────────────────────────
    {
      id: "cap6",
      titolo: "Capitolo 6 — L'Ingresso nella Torre",
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
      musica: { titolo: "Searching for Answer", artista: "Kammarheit", descrizione: "L'ingresso nella torre" }
    },

    // ── CAP 7 ──────────────────────────────────────────────────────
    {
      id: "cap7",
      titolo: "Capitolo 7 — La Passerella",
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
      musica: [
        { titolo: "A Room Between the Rooms", artista: "Lustmord", descrizione: "La passerella" },
        { titolo: "Under the Sun", artista: "Pawel Blaszczak", descrizione: "La passerella" }
      ]
    },

    // ── LE SCALE (inframmezzo cap7 → cap8) ─────────────────────────
    {
      id: "scale",
      titolo: "Le Scale",
      icona: "👣",
      riassunto: "Tra il ponte e il labirinto. I bambini si manifestano per la prima volta.",
      sezioni: [
        {
          titolo: "Le Scale — Tra la prima e la seconda stanza",
          tipo: "scena",
          testo: `Tornando sulle scale, qualcosa cambia.

Prima i suoni: risate acute, brevi, che arrivano da sopra e da sotto contemporaneamente. Poi urla — di bambini, non di dolore, ma di un gioco che non riuscite a capire. I suoni si interrompono all'improvviso, come se qualcuno avesse chiuso una porta.

Poi le vedete.

Sagome. Piccole, della forma di bambini, che compaiono e scompaiono tra una pietra e l'altra delle scale — non si muovono, non camminano, appaiono e spariscono come un'immagine che trema e si rompe su sé stessa. Ogni volta che ricompaiono sono in una posizione diversa, più vicine. Le forme non sono del tutto giuste: alcune hanno le proporzioni sbagliate, arti troppo lunghi o teste troppo grandi; altre hanno qualcosa di rigido nel busto o nelle spalle, come se sotto la pelle ci fosse qualcosa che non dovrebbe esserci.

Una di loro, per un istante, appare a un passo da uno dei personaggi — e una palla di stracci rotola via dai suoi piedi e rimbalza giù per le scale.

Poi spariscono tutte.`,
          notaDM: `Le sagome non sono una minaccia. Non reagiscono se attaccate — semplicemente non sono lì quando la lama le raggiunge. Non spiegare chi sono o cosa significano.

La palla di stracci rimane. È un oggetto reale — può essere raccolta. Non ha proprietà magiche rilevabili.`
        }
      ],
      musica: { titolo: "Eye for Detail", artista: "Jay Varton", descrizione: "Le scale" }
    },

    // ── CAP 8 ──────────────────────────────────────────────────────
    {
      id: "cap8",
      titolo: "Capitolo 8 — Il Labirinto di Specchi",
      icona: "🪞",
      riassunto: "Una palude interna. Specchi a perdita d'occhio. I riflessi escono dagli specchi.",
      immagine: { src: "labirinto_specchi.webp", didascalia: "Schema di riferimento — struttura circolare del labirinto" },
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
      musica: [
        { titolo: "Great Old One", artista: "Cryo Chamber Collaboration", descrizione: "Il labirinto di specchi" },
        { titolo: "Ashes And Ghost", artista: "Akira Yamaoka", descrizione: "Il labirinto di specchi" }
      ]
    },

    // ── LE SCALE 2 (inframmezzo, non numerato) ──────────────────────
    {
      id: "scale2",
      titolo: "Le Scale 2",
      icona: "👶",
      riassunto: "I bambini deformi tornano — ma stavolta sono più presenti. Come li trattate cambia tutto.",
      sezioni: [
        {
          titolo: "Le Scale 2 — Tra la seconda e la terza stanza",
          tipo: "scena",
          testo: `Sulle scale tra la seconda e la terza stanza, i bambini ci sono di nuovo.

Stavolta non tremolano, non scompaiono. Sono fermi, in piedi, e hanno più corpo — si vedono i dettagli: i vestiti bagnati e incollati alla pelle, i capelli appiccicati al viso, le deformità che prima erano solo intuibili. Arti troppo lunghi, giunture sbagliate, qualcosa di rigido sotto la pelle del busto. Uno di loro stringe ancora la palla di stracci.

Vi fissano in silenzio. Aspettano.`,
          notaDM: `Questa è una scena a bivio — il comportamento dei PG determina quello che succede.

SE I PG SI AVVICINANO CON AFFETTO — parlano con voce calma, si inginocchiano, tendono la mano con gentilezza, sorridono — i bambini rispondono lentamente. Prima uno, poi gli altri, si girano e iniziano a camminare su per le scale. Si fermano ogni pochi gradini ad aspettare, come per assicurarsi che il gruppo li stia seguendo. Li portano a un passaggio segreto nella parete — una sezione di pietra che cede al tocco — che conduce direttamente alla stanza della Donna Coniglio, saltando la stanza regolare.

SE I PG IGNORANO I BAMBINI O LI TRATTANO MALE — li spingono, li aggrediscono, li attraversano senza guardarli, parlano di loro come se non ci fossero — i bambini attaccano. Non urlano, non minacciano. Si muovono tutti insieme, in silenzio, con quella stessa andatura a scatti. Sono pericolosi in gruppo.

La palla di stracci non ha un ruolo meccanico — ma offrirla al bambino che la stringe è un gesto d'affetto valido.`
        }
      ],
      musica: [
        { titolo: "Childhood 1", artista: "Atrium Carceri", descrizione: "Le scale 2" },
        { titolo: "Commandeered", artista: "Jason Graves", descrizione: "Le scale 2 — se i PG si comportano male" }
      ]
    },

    // ── CAP 9 ──────────────────────────────────────────────────────
    {
      id: "cap9",
      titolo: "Capitolo 9 — La Donna Coniglio",
      icona: "🐇",
      riassunto: "Una stanza umida, due specchi d'acqua, e una creatura che un tempo era una donna. Tutto dipende da come siete arrivati fin qui.",
      sezioni: [
        {
          titolo: "Stanza 3 — La Donna Coniglio",
          tipo: "stanza",
          marcatore: "Chiave di volta: testa di coniglio",
          testo: `La stanza è cupa e umida. L'aria sa di pietra bagnata e qualcosa di più organico che è meglio non identificare. Quindici metri di larghezza, venticinque di lunghezza. Da qualche parte, un leggero sciaguattio.

L'unica luce proviene dal fondo della stanza — piccoli fasci intermittenti, freddi, che pulsano a intervalli irregolari.

Il pavimento centrale, cinque metri di larghezza, è in blocchi di pietra levigata e umida. Ai lati, due specchi d'acqua scura percorrono tutta la lunghezza della stanza — cinque metri per venticinque ciascuno. L'acqua è ferma. Non si vede il fondo.

Gli ultimi cinque metri sono occupati da una scalinata in pietra. Adagiata sopra c'è lei.

È alta almeno tre metri. La testa è quella di un coniglio bianco — orecchie lunghe, occhi laterali, naso che si muove impercettibilmente. Il corpo è umano, o lo era. Il ventre è gonfio e slabbrato, la pelle tesa fino quasi a spezzarsi. Dalla scalinata salgono tubi che si agganciano alla sua carne in più punti — fianchi, ventre, braccia. Dentro i tubi pulsa qualcosa: una luce che si muove dalla base fino a dentro di lei, con lo stesso ritmo intermittente dell'occhio di metallo e vetro che avete attraversato sul ponte.`,
          notaDM: `LA STANZA
Nei due specchi d'acqua ai lati nuotano più di trenta bambini deformi — gli stessi che avete incontrato sulle scale, e altri. Sono sott'acqua, immobili, gli occhi aperti verso l'alto. Visibili solo se ci si avvicina al bordo e si guarda giù.

I TUBI
Trasportano la stessa luce dell'occhio di metallo e vetro — chi lo ha riconosciuto capisce che la donna coniglio è alimentata dallo stesso sistema che alimenta la torre. Se i tubi vengono recisi la donna coniglio si indebolisce gravemente, ma il meccanismo del globo non viene disattivato.

── SE I PG SONO STATI PORTATI DAI BAMBINI ──

La Donna Coniglio sente il gruppo avvicinarsi e si irrigidisce — per un momento crede che sia Fraxximt, tornato per imporle un altro parto. Quando capisce che non è lui, si rilassa lentamente. Parla con voce bassa e affaticata, come chi ha smesso da tempo di urlare.

MONOLOGO — leggere ai giocatori:

"Non urlo più da molto tempo.

Fraxximt era un uomo buono. Forse lo è ancora, da qualche parte dentro quella cosa che cammina con il suo nome. Eravamo una famiglia — lui, io, Dorvek e i nostri due figli.

Quando è partito per studiare lo aspettavamo. Quando è stato arruolato nelle Guardie delle Sette Memorie lo aspettavamo ancora. Era orgoglioso, e noi eravamo orgogliosi per lui.

Poi è tornato a casa in congedo. I bambini erano morti mentre era via — una pestilenza, veloce e sorda come lo sono sempre le pestilenze. Non ha pianto. Non subito. Ha solo smesso di dormire.

Da quel giorno qualcosa si è spezzato dentro di lui in un modo che non si poteva aggiustare. Non accettava che fossero morti. Non nel senso in cui si dice che qualcuno non accetta un lutto — intendo che per lui era un errore della realtà, qualcosa che andava corretto. Ha iniziato a sparire per giorni. Poi per settimane. Quando tornava aveva con sé oggetti che non avrebbe dovuto avere — reliquie, artefatti, cose trafugate da posti che non nominava. Cercava il modo di riportarli indietro.

Lo cercavano. Era pericoloso vederlo. Ma ogni tanto tornava lo stesso, di nascosto, come se non riuscisse a smettere del tutto di essere quello che era stato.

L'ultima volta ci ha pregati di seguirlo. Diceva di aver trovato la soluzione. Che i nostri figli potevano tornare. Io e Dorvek lo abbiamo seguito.

Ci ha portati qui.

Dorvek è diventato il Gonogol — lo avete incontrato, forse, o lo incontrerete. Non c'è più niente di lui dentro quella cosa. Fraxximt gli ha tolto la volontà come si toglie un dente. Se lo vedete — se vedete un occhio verde chiaro e uno scuro, in mezzo a quella cosa che non dovrebbe esistere — quello era mio marito. Il mento squadrato, il naso un po' storto. Era lui. È ancora lui, da qualche parte.

A me ha fatto questo. Un ventre che non smette mai di partorire — corpi che lui cercava di rendere abitabili per gli spiriti dei morti che evocava. Voleva riportare i nostri figli. Ma non riusciva a richiamare anime — solo ombre, solo incubi. Quando un corpo non rispondeva come voleva, lo portava nell'acqua.

Ho visto annegare decine di bambini in quella stanza. Li sento ancora.

Sono qui da decenni. Non so più quanti. Il tempo qui dentro non scorre come dovrebbe.

Vi chiedo solo una cosa. Ponete fine a questo sogno corrotto.

Nel globo di metallo c'è il cuore della torre — un meccanismo a pezzi che va tenuto in posizione con le mani. Il primo pezzo non va mai lasciato: ogni tre minuti il meccanismo si resetta, e quando lo fa la luce scompare e le ombre sono libere. Tenete il pezzo centrale in posizione mentre posizionate gli altri. Non mollate mai il centro.

Se ci riuscite, gli toglierete gran parte del suo potere.

È tutto quello che voglio ancora."

── SE I PG SONO ARRIVATI NORMALMENTE (o hanno maltrattato i bambini) ──

La Donna Coniglio non parla. Con un movimento lento si strappa i tubi dalla carne — la luce nei tubi si spegne ad uno ad uno. I bambini sott'acqua iniziano a muoversi.

Attaccano cercando di trascinare i PG nell'acqua e affogarli. La Donna Coniglio può staccarsi dalla scalinata e combattere direttamente — è lenta ma enorme e quasi insensibile al dolore.

Il suo unico limite assoluto: non entra nell'acqua.`
        }
      ],
      musica: [
        { titolo: "Twilight", artista: "Midnight Syndicate", descrizione: "La donna coniglio" },
        { titolo: "The Blasted Heath", artista: "Stuart Chatwood", descrizione: "La donna coniglio" }
      ]
    },

    // ── CAP 10 ─────────────────────────────────────────────────────
    {
      id: "cap10",
      titolo: "Capitolo 10 — L'Arena, il Gonogol",
      icona: "🐉",
      riassunto: "Il colosseo nella roccia. La folla invisibile. Una massa di carne che cambia forma — e che un tempo era Dorvek.",
      sezioni: [
        {
          titolo: "L'Arena — Il Gonogol",
          tipo: "scontro",
          testo: `Un colosseo scavato nella roccia viva, aperto in alto verso un buco nel soffitto — 
come il cratere di un vulcano spento. La folla è invisibile ma la si sente: 
migliaia di voci che urlano, esultano, scandiscono un nome.

Gonogol. Gonogol. Gonogol.

Le trombe suonano. Dal buio del fondo arena emerge qualcosa che non ha una forma definita — una massa di carne che pulsa, si gonfia, si ritrae. Non cammina: si trascina, si arrotola su se stessa, avanza come se ogni passo richiedesse di reinventare cosa significhi avere delle gambe.

La folla impazzisce.`,
          notaDM: `IL GONOGOL È DORVEK. Il marito della Donna Coniglio, trasformato da Fraxximt nella sua guardia personale senza volontà. Questa rivelazione può emergere durante o dopo lo scontro — i PG che hanno ascoltato il monologo della Donna Coniglio o letto il diario del Biondo hanno già l'indizio fisico per riconoscerlo.

Il Gonogol è quasi invulnerabile nella sua massa informe — i danni si rigenerano quasi istantaneamente, indipendentemente dalla forma assunta in quel momento. L'unica via per fermarlo davvero è colpire il volto di Dorvek quando appare nella massa di carne durante le trasformazioni.

INDIZIO FISICO DI DORVEK: un occhio verde chiaro, uno marrone scuro quasi nero. Mento squadrato, naso leggermente storto. Anche distorto, mantiene questo contrasto negli occhi.`
        },
        {
          titolo: "Le Sei Forme",
          tipo: "scontro",
          testo: `Il Gonogol non ha una forma stabile. Durante lo scontro muta continuamente, passando da una configurazione all'altra senza preavviso.`,
          notaDM: `Il DM sceglie liberamente l'ordine e il ritmo delle trasformazioni, usandole per scandire le fasi dello scontro.

1. IL QUADRUPEDE DI OSSA ESPOSTE — una creatura simile a un grosso canide, ma le ossa sono fuori, la carne dentro. Si muove a scatti rapidi e imprevedibili.

2. IL TESSITORE — si allunga in qualcosa di simile a un ragno enorme fatto di tendini intrecciati, ognuno dei quali termina in una piccola mano umana che afferra.

3. IL BOCCONE — una massa quasi sferica dominata da una bocca enorme che occupa metà del corpo. Si muove rotolando.

4. LO SCORTICATO ALATO — sviluppa membrane simili ad ali fatte di pelle umana cucita male, vola basso e goffo, lascia cadere gocce di qualcosa che brucia al contatto.

5. IL CORO — il corpo si divide temporaneamente in tre masse più piccole che si muovono in coordinazione, ognuna con una bocca che ripete frammenti delle stesse parole.

6. IL BAMBINO CRESCIUTO — la forma più disturbante: per pochi secondi il Gonogol assume una sagoma quasi umana, delle dimensioni di un bambino di dieci anni ma con le proporzioni di un adulto, e cammina eretto prima di ricollassare nella massa informe.`
        },
        {
          titolo: "Le Quindici Facce",
          tipo: "scontro",
          testo: `Durante ogni transizione tra una forma e l'altra, per un istante la massa di carne si apre e mostra volti — decine di espressioni che emergono e scompaiono nella superficie pulsante, come ricordi che affiorano e affondano di nuovo.`,
          notaDM: `Una di queste quindici facce è quella di Dorvek (#12) — è l'unico bersaglio che infligge danno reale al Gonogol. Appare solo per pochi secondi, in modo imprevedibile, mai durante una forma stabile — solo nelle transizioni.

1. Un bambino che piange senza lacrime
2. Una donna anziana che sorride troppo
3. Fraxximt, giovane, prima delle cicatrici
4. Un bambino che ride
5. La Donna Coniglio, umana, contadina, spaventata
6. Un volto senza tratti, solo la forma di un volto
7. Un bambino che dorme
8. Un vecchio pescatore di Fossolento
9. Fraxximt, con il volto bruciato, urlante
10. Un bambino che chiama un nome che nessuno riconosce
11. Una donna che canta
12. DORVEK — un occhio verde chiaro, uno marrone scuro, mento squadrato, naso leggermente storto. BERSAGLIO VALIDO.
13. Un bambino con gli occhi cuciti
14. Un volto identico a quello di uno dei personaggi (il DM lo personalizza sul momento)
15. Il volto della Donna Coniglio nella sua forma attuale — il coniglio

QUANDO VIENE COLPITA LA FACCIA GIUSTA: il Gonogol si contrae in un urlo che suona quasi umano, e per un breve momento tutte le sue forme rallentano. Dopo un numero di colpi alla faccia giusta a discrezione del DM, il Gonogol collassa.`
        },
        {
          titolo: "Il Collasso",
          tipo: "scena",
          testo: `La massa di carne si ritrae su se stessa, si svuota, perde volume rapidamente — come qualcosa che finalmente smette di essere costretto a una forma che non gli appartiene.

Per un istante, prima che tutto si dissolva, emerge una forma quasi umana. Fragile, nuda, irriconoscibile se non per gli occhi: uno verde chiaro, uno marrone scuro.

Poi anche quello svanisce. La folla invisibile ammutolisce. Silenzio totale.

Al centro del pavimento dell'arena: una botola aperta verso il livello successivo.`
        }
      ],
      musica: [
        { titolo: "Closing in", artista: "Michel F. April", descrizione: "L'arena — Il Gonogol" },
        { titolo: "Barma Beigla Te Carma", artista: "Garry Schyman", descrizione: "L'arena — Il Gonogol" }
      ]
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

Dopo la raccolta: il pavimento trema e una scala si apre nella parete verso il livello successivo.`,
          tangram: true
        }
      ],
      musica: { titolo: "Impulse", artista: "Hans Zimmer", descrizione: "Il globo di metallo" }
    },

    // ── CAP 12 ─────────────────────────────────────────────────────
    {
      id: "cap12",
      titolo: "Capitolo 12 — La Stanza del Trono",
      icona: "💀",
      riassunto: "Il Rospo dorme sul trono. Il cuore di Dogti pulsa nell'ampolla. E le pareti respirano.",
      sezioni: [
        {
          titolo: "La Stanza del Trono",
          tipo: "scena",
          testo: `Una stanza ampia, senza ornamenti, fredda. Al centro: un trono fatto di ossa saldate tra loro da meccanismi di ottone arrugginito. Su di esso, riverso, Fraxximt il Rospo — vivo, addormentato, il respiro impercettibile.

Le vesti sono elaborate e scure, cucite con fili metallici che brillano debolmente. Le mani stringono al petto un'ampolla di vetro decorata con spine d'ottone lucido. All'interno dell'ampolla, visibile attraverso il vetro, giace un cuore. Pulsa.

Le pareti sono coperte di bozzi irregolari — protuberanze che sporgono dalla pietra come tumori. Guardandole meglio si vedono ingranaggi che affiorano dalla superficie, frammenti di cheratina indurita, ciuffi di carne compressa. Qualcosa vive dentro quelle pareti. Per ora dorme anche lui.`,
          notaDM: `La stanza è silenziosa. Nessuna minaccia immediata. Il DM lascia respirare la scena.

I bozzi sulle pareti sono gli ibridi ragno/macchina in stato quiescente — si attiveranno non appena il Rospo verrà colpito per la prima volta al cap13. Inserirli qui come dettaglio visivo prepara i PG senza spiegarli.

Se i PG hanno il globo: appena entra nella stanza, le dita del Rospo si contraggono leggermente. Se avvicinano il globo al corpo, il Rospo si agita — lo riconosce. I PG capiscono che il globo ha valore qui.`
        },
        {
          titolo: "Recuperare il Cuore",
          tipo: "scena",
          testo: `L'ampolla è stretta tra le dita del Rospo. Staccarla richiede forza o delicatezza — o entrambe. Le spine d'ottone sono aguzze.`,
          notaDM: `Il rischio centrale: se durante il recupero un PG si ferisce e una goccia di sangue cade sul corpo del Rospo, lo scheletro si risveglia anticipatamente — si passa direttamente al cap13.

Il DM tira il dado percentuale per ogni tentativo. Chi usa delicatezza e pazienza ha più margine. Chi strappa con forza rischia di scheggiarsi la mano sulle spine.`
        }
      ],
      musica: { titolo: "Children of the Omnissiah", artista: "Guillaume David", descrizione: "La stanza del trono" }
    },

    // ── CAP 13 ─────────────────────────────────────────────────────
    {
      id: "cap13",
      titolo: "Capitolo 13 — Il Rospo si Risveglia",
      icona: "🦴",
      riassunto: "Fraxximt si alza dal trono. Potente, veloce, spezzato. E ha bisogno di riavere ciò che è suo.",
      sezioni: [
        {
          titolo: "Il Risveglio",
          tipo: "scena",
          testo: `Non c'è un segnale di avvertimento.

Un'esplosione che non si vede — si sente solo nell'addome, come se improvvisamente la gravità fosse raddoppiata. Le ginocchia cedono. L'aria pesa. Tutto pesa.

Fraxximt il Rospo si alza dal trono.

Le vesti si raddrizzano da sole. Gli occhi — ciò che resta degli occhi sotto la maschera di carne bruciata che è la sua faccia — si aprono e fissano il gruppo con un'attenzione assoluta. Poi la voce, roca e spezzata come legno bagnato che brucia: "Intrusi? Non ci toglierete mai i nostri figli."

Poi attacca.`,
          notaDM: `IL ROSPO IN COMBATTIMENTO

Il Rospo è potente, veloce e imprevedibile. Levita grazie all'Amuleto del Volo — non vola in senso stretto, ma si sposta in verticale con rapidità sorprendente, rendendo difficile il corpo a corpo classico.

Prima azione: afferra per il collo il PG più vicino.
Priorità assoluta: se vede qualcuno con l'ampolla o con il globo, abbandona tutto e attacca quello.

PRIMO COLPO RICEVUTO — I RAGNI:
Non appena il Rospo riceve un colpo significativo, i bozzi sulle pareti si aprono. Decine di ibridi ragno/macchina escono dalla pietra — corpo di ragno, zampe di metallo, cheratina indurita sul dorso. Si fiondano sul Rospo e iniziano a ripararlo in tempo reale. Finché i ragni lavorano, il danno inflitto al Rospo si dimezza.

SE I RAGNI VENGONO UCCISI:
Il Rospo non reagisce immediatamente. Dopo pochi secondi esegue un rituale veloce — fonde i cadaveri dei ragni in due copie distinte. Una combatte i PG. L'altra si aggancia al Rospo e riprende le riparazioni.

SE IL ROSPO PRENDE IL GLOBO:
Lo chiude. Ombre emergono dal globo e combattono per lui. Finché il globo rimane chiuso le ombre sono immortali — l'unico modo per fermarle è riaprire il globo o strapparlo al Rospo.

INCANTESIMI E OGGETTI:
Usa la Pergamena del Fuoco quando messo alle strette — evoca fiamme controllabili che può dirigere come un'arma per qualche decina di secondi.
Usa l'Anello della Telecinesi per disarmare, spostare i PG, o richiamare il globo o l'ampolla a sé.
Usa l'Amuleto Solnari per plasmare la pietra — chiudere uscite, creare barriere, intrappolare personaggi sotto roccia.`
        },
        {
          titolo: "Come Sconfiggerlo — Le Risoluzioni",
          tipo: "scena",
          testo: `[Sezione riservata DM]`,
          notaDM: `RISOLUZIONE 1 — LA CANZONE DI DOGTI
Se i PG cantano la canzone di Rahlia (Thriller, la canzone popolare Varlmenn trascritta nel diario del Biondo con l'appunto "l'amata la cantava per richiamare l'amato") con il cuore di Dogti in mano, Dogti risponde. Arriva dalla grotta o emerge dalla torre, attratto dalla melodia. È in grado di sconfiggere il Rospo con la pura violenza — è la sua chiusura dei conti.
Serve almeno un cantante e qualcuno che tenga il ritmo. Il cuore nell'ampolla batte sempre più veloce man mano che cantano.

RISOLUZIONE 2 — RIDARE IL CUORE A DOGTI
Se durante o prima dello scontro i PG riescono a far arrivare il cuore a Dogti (che vaga fuori o è presente nella torre), Dogti lo ingoia. Si immobilizza un momento. Poi si raddrizza. Qualcosa cambia nel suo sguardo vuoto. Attacca il Rospo di propria iniziativa, senza bisogno della canzone.

RISOLUZIONE 3 — DESTABILIZZARE IL ROSPO
Racconti o immagini sul suo passato — i figli morti, Eritha, Dorvek, la vita a Fossolento prima del crollo — lo destabilizzano. Non abbastanza da fermarlo, ma abbastanza da spezzare la sua concentrazione per qualche secondo e aprire una finestra per il colpo finale. Il DM valuta la qualità narrativa del momento e decide l'effetto.

COME MUORE:
Fisicamente tramite Dogti, o sgretolato se privato contemporaneamente del cuore e del globo. Il DM sceglie l'epilogo più soddisfacente in base a come si è svolta la scena.`
        },
        {
          titolo: "Gli Oggetti del Rospo",
          tipo: "oggetto",
          testo: `Fraxximt porta con sé sei oggetti. Ognuno ha un nome, un aspetto e un potere.`,
          notaDM: `1. L'AMPOLLA DI SPINE
Ampolla di vetro circondata da spine di ottone. Contiene il cuore pulsante di Dogti — il tramite arcano che tiene in piedi la torre e gli ibridi. Il cuore batte più veloce in presenza di Dogti o quando viene cantata la sua canzone.

2. L'AMULETO DEL VOLO
Medaglione di pietra nera con incisione di ali stilizzate. Permette al Rospo di spostarsi molto velocemente in levitazione. Non vola — levita, con movimenti rapidi e imprevedibili in verticale.

3. L'ANELLO DELLA TELECINESI
Anello di ferro brunito con piccolo cristallo incastonato. Permette di spostare oggetti e creature a distanza con la sola concentrazione. Usato per disarmare, spostare i PG o richiamare l'ampolla e il globo a sé.

4. L'AMULETO SOLNARI
Pendaglio dorato che rappresenta decine di braccia che incastonano una pietra rosso rubino. Trafugato nell'Impero Solnari — permette al Rospo di plasmare la pietra. Usato per chiudere uscite, creare barriere, intrappolare personaggi.

5. LA PERGAMENA DEL FUOCO
Un rotolo di pergamena tenuto nella manica. Evoca fiamme controllabili dal mago per un breve periodo di tempo. Usa quando messo alle strette. Una sola carica.

6. LA SFERA DELLE OMBRE
Il globo risolto dai PG nella stanza precedente, se il Rospo ne viene in possesso. Può chiuderla, facendo emergere ombre che combattono per lui. Finché rimane chiusa le ombre sono immortali.`
        },
        {
          titolo: "Epilogo — Il Ritorno al Villaggio",
          tipo: "scena",
          testo: `Con la morte del Rospo, la torre non crolla — resta lì, immobile, silenziosa. Ma le stanze non cambiano più. Le creature al suo interno si spengono una a una.

La strada verso il villaggio è lunga. Ma i fuochi della locanda si vedono da lontano — e dentro si sente già la musica.`,
          notaDM: `Il ritorno è una scena libera — il DM lascia che i giocatori raccontino. Cosa dicono ai nativi del villaggio? Cosa omettono? Chi credono loro?

Alexei è ancora vivo — peggio di prima, ma vivo. Se i PG hanno il cuore di Dogti, possono scegliere cosa farne. Se Dogti è ancora in piedi, è fuori dalla torre — libero per la prima volta da quando Rahlia lo incatenò con la canzone.

Non c'è una risposta giusta. La one shot finisce qui.`
        }
      ],
      musica: { titolo: "Overlord", artista: "Guillaume David", descrizione: "Il Rospo si risveglia" }
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
      segreto: "Muore nel corso della scena. Ultima cosa che dice: 'Batteva le dita. Sempre lo stesso ritmo. Mentre mi mangiava.' Il DM sceglie il momento più efficace."
    },
    {
      nome: "Dogti",
      ruolo: "Abominio — creazione di Rahlia",
      descrizione: "Corpo umano in stadio avanzato di decomposizione, petto squarciato e vuoto. Si muove. Batte il moncherino dell'indice sinistro sul pavimento ritmicamente. Sembra aspettare che qualcuno gli dica qualcosa.",
      segreto: "Dogti non è sotto pieno controllo del Rospo. Il ritmo che batte è il tempo di Thriller — la canzone di Rahlia. Se i PG gli ridanno il cuore, attacca il Rospo di propria iniziativa. Se liberato alla fine, è libero per la prima volta da quando Rahlia lo incatenò."
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
      segreto: "Senza corde vocali non può cantare né lanciare grandi incantesimi. All'epoca del diario del Biondo riusciva ancora a fischiettare la melodia di Rahlia abbastanza bene da bloccare Dogti sul posto — è così che gli ha strappato l'ampolla nella grotta. Da allora anche il fischiettare gli riesce sempre peggio: è per questo che nella torre 'ha difficoltà nel controllare Dogti' (vedi lore segreta). Si rigenera bevendo sangue. Diventa ossessivo alla vista del globo. Muore se privato di cuore e globo contemporaneamente, o se Dogti lo attacca in autonomia."
    },
    {
      nome: "La Donna Coniglio",
      ruolo: "Creatura della Torre — La Donna Coniglio",
      descrizione: "Testa e orecchie di coniglio bianco su corpo umano alto tre metri. Ventre gonfio e slabbrato, tubi luminosi agganciati alla carne. Siede sulla scalinata in fondo alla stanza. Parla con voce bassa e affaticata.",
      segreto: "È la moglie di Fraxximt, trasformata in macchina per partorire corpi da usare come contenitori per gli spiriti dei morti. Se i PG sono stati gentili con i bambini, racconta la storia di Fraxximt e spiega come disattivare il globo. Se i PG sono stati crudeli, ordina ai bambini nelle acque di attaccare. Non entra nell'acqua — limite assoluto. Se i tubi vengono recisi si indebolisce gravemente ma il meccanismo della torre non si interrompe."
    },
    {
      nome: "Il Gonogol",
      ruolo: "Creatura dell'Arena — Dorvek trasformato",
      descrizione: "Una massa di carne informe che pulsa e muta continuamente. Cambia tra sei forme abominevoli. Nella massa appaiono e scompaiono quindici volti — tra cui quello di Dorvek (un occhio verde chiaro, uno marrone scuro, mento squadrato, naso leggermente storto).",
      segreto: "È Dorvek — il marito della Donna Coniglio, trasformato da Fraxximt nella sua guardia personale. Non può essere danneggiato normalmente. Il solo bersaglio valido è il suo volto (#12 nella lista) quando appare nelle transizioni tra forme. Quando viene colpito abbastanza volte, collassa e per un istante emerge la forma quasi umana di Dorvek prima di dissolversi."
    }
  ],

  oggetti: [
    {
      nome: "Diario del Biondo",
      descrizione: "Diario in cuoio scuro, pagine ingiallite. Si interrompe a metà frase. Contiene informazioni su Fraxximt, la torre, Rahlia e Dogti.",
      importanza: "Alta — lore fondamentale"
    },
    {
      nome: "Frammenti dello Spartito",
      descrizione: "Fogli manoscritti parzialmente bruciati trovati nel camino. La notazione è arcana. Il ritmo corrisponde a quello che Dogti batte sul pavimento — e alla canzone che i giocatori conoscono come Thriller di Michael Jackson, canzone popolare Varlmenn cantata da Rahlia.",
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
