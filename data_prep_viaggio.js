// ═══════════════════════════════════════════════════════════════
// PREP. SESSIONE — Il viaggio verso est (dal 18 del Terzo mese)
// Rifatta il 17/11/2026 dai doc «Preparazione — La mattina del 18 e la carovana»,
// «Trama Libro Primo — Ossatura», «Equipaggiamento — Viaggio verso est»
// e «Torre Est — Planimetria». (proposta) = inventato, da confermare.
// 24/11/2026: ritratti dei PNG (images/carovana), Linda e Sara allineate alla Sessione 13.
// 24/11/2026: Yuen (ragazza) → Yuel (ragazzo), allineato alla Sessione 13.
// La vecchia prep (viaggio di ritorno a Tresil, già giocata) resta in
// data_furiosa.js → prepProssimaSessione e compare in fondo come archivio.
// ═══════════════════════════════════════════════════════════════
const FURIOSA_PREP = {
  titolo: "Il viaggio verso est",
  sottotitolo: "Da Tresil alla Torre Est e al villaggio senza furia · Terzo mese, giorni 18–28",
  apertura: "La giocata parte all'alba del 18, nella zona del porto: la carovana di Miss Eria parte in mattinata. È soprattutto una giocata di viaggio: otto giorni di strada con una ventina di sconosciuti, poi la Torre Est, poi la valle. Le caselle si spuntano e restano salvate su questo dispositivo.",

  promemoria: [
    ["Stagione", "Primissimi giorni di primavera. Freddo vivo in quota, disgelo sui sentieri, piedi bagnati. Rei teme la neve tardiva."],
    ["Il gruppo", "A cavallo: quattro cavalli comuni (7 am l'uno). Equipaggiamento per tutti e quattro, cibo per 10 giorni. Wvrewvrol non ha bisogno di niente."],
    ["La paga", "1 bronzo grande al giorno a testa (4 bg al giorno per il gruppo), pagata a Pozdefer e all'arrivo alla Torre. Pasti esclusi. Le ragazze non si toccano."],
    ["Il ritmo", "4–5 leghe al giorno, il passo lo fanno i buoi. Partenza all'alba, sosta a mezzogiorno, campo prima del buio."],
    ["La notte", "Tre turni di guardia. La sergente Marrow mette in ogni turno una guardia e uno del gruppo: si fida a metà."],
    ["I soldi", "Spendere quasi 4 argenti grandi all'alba, al porto, si nota (il sacchetto di Whilliam)."],
    ["Calendario", "18 partenza · 20 sera Pozdefer · 25 sera Torre Est · 26 sosta · 27–28 la valle · 28 sera il villaggio («sedici notti fa» = Fonte Verde, notte 11→12)."]
  ],

  // ── Il gruppo: che cosa portano in viaggio ──
  gruppo: [
    { nome: "Karl", img: "images/karl.webp", righe: [
      "Porta la borsa comune e il fagotto di Greta (salami e formaggi: un di più).",
      "Al collo la catenella d'argento del nonno, ali e spazio vuoto; nella sacca lo scalpello e il martelletto da incisione, primo regalo di Thomas.",
      "Il guanto Berta, rifatto a protezione dell'avambraccio. Nella sacca anche i pezzi della maschera di Larasha.",
      "Vede le aure di chi è legato a un dio. Mirela gli ricorda Hetel."] },
    { nome: "Rei", img: "images/rei.webp", righe: [
      "Le guardie cercano ancora una ragazza dai capelli rossi: viaggia sotto il velo.",
      "La sfera è piena del nero delle creature-guscio: la tengono senza usarla.",
      "Ozzie le ha insegnato a pregare. Ha una lanterna e un pagliericcio suoi.",
      "Non sa di aver ucciso l'ubriacone, la notte vuota. Agnes è sul carro dei viveri."] },
    { nome: "Nikla", img: "images/nikla.webp", righe: [
      "Ha le ricette della biblioteca, 10 boccette d'inchiostro, pergamena.",
      "Uscita dalla biblioteca senza vestiti suoi: Linda può prestargliene.",
      "Se esamina i pezzi della maschera, riconosce la mano di Percival Mirr."] },
    { nome: "Zoraya", img: "images/zoraya.webp", righe: [
      "Quando canta sente le menzogne: la preghiera di Sara è sincera, la bestia-uomo prigioniera non mente.",
      "Il velo che copre Rei è il suo.",
      "Compagna naturale di Nesse e Mirela per insegnare un canto."] },
    { nome: "Wvrewvrol", img: "", righe: [
      "Ingiallisce quando trattiene un non detto che conosce (non quando mente): Fosco che dice «tutto in ordine».",
      "Nesse lo tempesta di domande.",
      "La pipa è sua."] }
  ],

  // ── La mattina del 18 ──
  mattina: [
    { id: "pv-m1", titolo: "Le ultime compere all'alba", testo: "I negozi la sera prima hanno chiuso. Stivali, i quattro cavalli comuni con sella e finimenti, ferratura, corda, olio per le lame, avena (metà sul carro della carovana). Il maniscalco e il sellaio del porto si ricorderanno di chi ha pagato in argento." },
    { id: "pv-m2", titolo: "Il velo verde (proposta)", testo: "Al varco del porto una guardia della Città Vecchia controlla i carri: cercano ancora una ragazza dai capelli rossi. Rei passa sotto il velo di Zoraya. Tensione, nessuna conseguenza. Il caporale Ostric, però, era lì e ha visto." },
    { id: "pv-m3", titolo: "Horlen (proposta)", testo: "Passa al porto con il liuto ancora a due corde rotte. Conosce la Torre: «Lassù fa freddo anche d'estate, e i soldati contano i giorni»." },
    { id: "pv-m4", titolo: "Greta (proposta)", testo: "Se Karl si volta prima di partire, la vede in fondo alla banchina; Thomas non c'è. Non si avvicina: alza la mano e indica il piede destro." },
    { id: "pv-m5", titolo: "Il raduno", testo: "Orsolo passa in rassegna carri, bestie e persone. Madama Corvina ripete le regole di Miss Eria. La sergente Marrow guarda i quattro come un carico in più che qualcun altro ha pagato." }
  ],

  // ── La carovana ──
  carovanaIntro: "È il convoglio di rifornimento che sale alla Torre Est ogni mese: sale, farina, ferro, frecce, olio per le lanterne, medicine, la posta e la paga del presidio. Porta anche le sei guardie del cambio, che restano alla Torre al posto di sei uomini che tornano a Tresil con i carri vuoti. Miss Eria ci ha aggiunto un carro suo, per un contratto con la Guardia del Muro: cinque ragazze e un ragazzo dell'Ostrica Bianca, Yuel, passano un periodo al presidio, «per il morale». Non si fida delle guardie quando si tratta delle sue ragazze, per questo paga una scorta sua: il gruppo. Miss Eria non viaggia: al suo posto c'è Madama Corvina.",
  carri: [
    ["Carro dei viveri e del ferro", "Coperto e pesante, due buoi. Ci viaggiano Tobio e Nesse, Crispo Vell e Fosco, e Agnes con il suo sacco di stracci."],
    ["Carro della Guardia", "Tre muli. Armi di ricambio, frecce, la posta, la cassa con la paga del presidio. Metà dell'avena del gruppo."],
    ["Carro dell'Ostrica Bianca", "Telonato di bianco, l'ostrica dipinta sulla sponda, due muli. Le ragazze ci dormono dentro o in una tenda loro."],
    ["Bestie", "Due buoi, sette muli (uno di riserva), quattro cavalli delle guardie, i quattro cavalli del gruppo."]
  ],
  // gruppi di personaggi: ogni persona ha nome, ruolo, aspetto, carattere, voce, funzione, segreto
  carovana: [
    { gruppo: "Il capocarovana e i carrettieri", img: "images/carovana/gruppo-carrettieri-e-funzionari.webp", persone: [
      { nome: "Orsolo Dent", img: "images/carovana/orsolo.webp", ruolo: "Capocarovana", p: true,
        aspetto: "Cinquantenne, cotto dal sole, cappello di feltro sformato, un bastone che non usa per camminare.",
        carattere: "Parla del tempo e dei buoi più che delle persone. Conosce ogni sorgente della strada: l'ha fatta trenta volte.",
        voce: "«Di solito a quest'ora si sentono i lupi. Quest'anno non si sente niente.»",
        funzione: "La memoria della strada: è il primo ad accorgersi che qualcosa non va. Il 23 ferma il caporale che vuole tirare alle bestie-uomo.",
        segreto: "A Pozdefer ha un debito con l'oste del Secchio Rosso, che vuole trattenergli un mulo." },
      { nome: "Tobio", img: "images/carovana/tobio.webp", ruolo: "Carrettiere dei buoi", p: true,
        aspetto: "Mani enormi, schiena curva, sempre un filo di paglia in bocca.",
        carattere: "Placido, fatalista. Vede la figlia crescere troppo in fretta e non sa come fermarla.",
        voce: "«I buoi non hanno fretta. E manco io.»",
        funzione: "Il padre di Nesse: se lei si mette nei guai con le domande, è lui che viene a riprenderla." },
      { nome: "Nesse", img: "images/carovana/nesse.webp", ruolo: "Carrettiera, figlia di Tobio, 15 anni", p: true,
        aspetto: "Lentigginosa, treccia mezza disfatta, scarpe del padre imbottite di paglia.",
        carattere: "Curiosa fino alla sfacciataggine. Fa mille domande, soprattutto a Wvrewvrol.",
        voce: "«Ma le rane fumano tutte, o solo tu?»",
        funzione: "Porta leggerezza e fa le domande che il gruppo eviterebbe. Zoraya può insegnarle un canto." },
      { nome: "Gherd", img: "images/carovana/gerd.webp", ruolo: "Mulattiere", p: true,
        aspetto: "Magro, barba nera, un orecchio mozzato.",
        carattere: "Taciturno: canta solo agli animali, mai alle persone.",
        voce: "(canticchia ai muli; alle persone risponde con un cenno)",
        funzione: "Se i muli si rifiutano di andare avanti, c'è un motivo. Gli animali sentono prima degli uomini quello che scende da nord." }
    ]},
    { gruppo: "Le guardie di Tresil (il cambio per la Torre)", img: "images/carovana/gruppo-guardie.webp", nota: "Sei guardie in giubba di panno blu scuro con tre bande bianche sul petto e cappello d'arme di ferro brunito; quattro a cavallo, due sui carri. Sono il cambio mensile: restano alla Torre (riallineato alla planimetria del 17/11).", persone: [
      { nome: "Ilda Marrow", img: "images/carovana/hilda-marrow.webp", ruolo: "Sergente, comanda la scorta", p: true,
        aspetto: "Quarant'anni, capelli grigio ferro tagliati corti, voce bassa, nessun gesto in più.",
        carattere: "Ha l'ordine di portare carico e paga alla Torre. Il gruppo per lei è un rischio pagato da altri.",
        voce: "«A Tresil non siete importanti quanto credete. Nessuno lo è, questa settimana.»",
        funzione: "Il 19 sera, al fuoco, racconta le indagini del Consiglio: il fatato liberato in città come diversivo, il colpo ai Cantieri, l'ultima nave della città sparita, pirati o rivali politici.",
        segreto: "Ha un figlio nella marina: la nave rubata le pesa più di quanto dica." },
      { nome: "Benn Ostric", img: "images/carovana/benn-ostric.webp", ruolo: "Caporale, vice", p: true,
        aspetto: "Giovane, rasato con cura, la giubba più pulita della scorta.",
        carattere: "Ambizioso, vuole farsi notare da qualcuno che conta.",
        voce: "«Da dove hai detto che vieni, tu col velo?»",
        funzione: "La minaccia silenziosa del viaggio: ha letto il rapporto sulla «rossa» ricercata e guarda Rei un po' troppo a lungo. Non ha prove e non dice niente. Il 23 vuole tirare alle bestie-uomo.",
        segreto: "Tessaly lo distrae, e lui ci casca." },
      { nome: "Caleb e Tamsin", img: "images/carovana/caleb-e-tamsin.webp", ruolo: "Gemelli, guardie a cavallo", p: true,
        aspetto: "Uguali tranne per un dente scheggiato (Tamsin).",
        carattere: "Scherzano su tutto, scommettono su tutto.",
        voce: "«Un bronzo che non lo alzi.» «Due che sì.»",
        funzione: "Scommettono con Karl su chi solleva il sacco più pesante, e perdono. Valvola di sfogo e alleati facili." },
      { nome: "Old Wim", img: "images/carovana/old-wim.webp", ruolo: "Guardia anziana", p: true,
        aspetto: "Sessant'anni, mani nodose, fischietta fra i denti mancanti.",
        carattere: "A un anno dalla pensione. Ha servito alla Torre vent'anni fa e torna lassù per l'ultimo turno.",
        voce: "«Ai miei tempi a Spinaferma ti tiravano dietro le pecore, e i teschi sulla porta li lucidavano.»",
        funzione: "Racconta la valle «com'era una volta»: la siepe di rovi, la Leva, la gente dura. Prepara il villaggio senza furia: il lettore sa com'era prima." },
      { nome: "Dara", img: "images/carovana/dara.webp", ruolo: "Arciera", p: true,
        aspetto: "Minuta, occhi chiarissimi, l'arco sempre incordato.",
        carattere: "Silenziosa, la vista migliore della scorta.",
        voce: "«Lassù. Tre. No, cinque. Uno piccolo.»",
        funzione: "Dal 23 vede per prima i gruppetti di bestie-uomo sulle creste, che vanno verso sud senza avvicinarsi." }
    ]},
    { gruppo: "Gli addetti ai viveri", persone: [
      { nome: "Crispo Vell", img: "images/carovana/crispo-vell.webp", ruolo: "Mastro contabile del Consiglio", p: true,
        aspetto: "Magro, occhiali legati con lo spago, un registro sempre sotto il braccio.",
        carattere: "Pignolo, conta i sacchi ogni sera. Ha paura di tutto ciò che sta fuori dalle mura.",
        voce: "«Quarantadue. Ieri erano quarantadue. Sono quarantadue.»",
        funzione: "Il cittadino fuori posto: ogni rumore notturno è la fine del mondo." },
      { nome: "Fosco", img: "images/carovana/fosco.webp", ruolo: "Aiutante del contabile", p: true,
        aspetto: "Grasso e rubicondo, sorriso facile, tasche gonfie.",
        carattere: "Simpatico con tutti, ruba un po' su tutto: un pugno di sale qui, una candela là.",
        voce: "«Tutto in ordine, mastro Crispo!»",
        funzione: "Un dilemma piccolo: lo sa solo Wvrewvrol, che ingiallisce ogni volta che Fosco dice «tutto in ordine». Il gruppo deve decidere se dirlo." }
    ]},
    { gruppo: "L'Ostrica Bianca", img: "images/carovana/gruppo-ostrica-bianca.webp", nota: "Cinque ragazze e un ragazzo, Yuel, che guida i muli. Viaggiano sul carro telonato e dormono nel carro o in una tenda loro. Mangiano a parte.", persone: [
      { nome: "Madama Corvina", img: "images/carovana/madame-corvina.webp", ruolo: "Donna di fiducia di Miss Eria", p: true,
        aspetto: "Sui cinquanta, ex ragazza dell'Ostrica, scialle nero e anelli a ogni dito.",
        carattere: "Pratica, senza illusioni. Tratta lei con il gruppo e con la sergente.",
        voce: "«Al presidio non vanno per amore. Vanno perché è pagato il doppio e si dorme da sole.»",
        funzione: "La datrice di lavoro sul posto: paga, decide, protesta.",
        segreto: "Ha preso soldi da Brina per farla salire sul carro." },
      { nome: "Linda", img: "images/carovana/linda.webp", ruolo: "Ragazza dell'Ostrica (Sessione 12)",
        aspetto: "Bianchissima, quasi albina: capelli bianchi, ciglia quasi trasparenti (Sessione 13). Sorriso furbo, mani veloci con le carte.",
        carattere: "Allegra e chiacchierona (proposta). Gioca a carte meglio delle guardie: il 18 sera le batte tutte.",
        voce: "«Chi perde lava le ciotole. Tutte.»",
        funzione: "Prende in simpatia Nikla e le presta dei vestiti." },
      { nome: "Sara", img: "images/carovana/sara.webp", ruolo: "Ragazza dell'Ostrica (Sessione 12)",
        aspetto: "Pelle nera e lucida, un occhio così nero che non si distingue la pupilla (Sessione 13). Viene dalle montagne di Shizenka, sopra le nubi (proposta).",
        carattere: "Il freddo non la spaventa (proposta): a Pozdefer è l'unica che si lava nel pozzo gelato.",
        voce: "(prega ogni sera in una lingua che nessuno capisce)",
        funzione: "Zoraya, cantando, sente che quella preghiera è sincera: un'altra fede, vissuta, accanto a quella che i quattro non hanno ancora provato." },
      { nome: "Mirela", img: "images/carovana/mirella.webp", ruolo: "La più giovane, 18 anni", p: true,
        aspetto: "Minuta, capelli castani, si mangia le unghie.",
        carattere: "Al primo viaggio, ha paura della valle.",
        voce: "«Karl, tu resti sveglio stanotte? Allora dormo.»",
        funzione: "Si attacca a Karl come a un padre: lo specchio di Hetel che lui non vuole guardare. Pell Avern, alla Torre, si innamora di lei." },
      { nome: "Yuel", img: "images/carovana/yuel.webp", ruolo: "L'unico ragazzo dell'Ostrica Bianca, guida i muli del carro (Sessione 13)",
        aspetto: "Sui vent'anni, spalle squadrate da uomo e faccia da bambino, sguardo vuoto che passa attraverso le cose. Fascia bianca al braccio (lutto) e capelli rasati di fresco (proposta).",
        carattere: "Non alza mai gli occhi. Alla sosta del 18 disegna con un dito sull'acqua: l'acqua cancella, lui ridisegna. Shizenka come Sara, suo fratello di montagna; muto per scelta, in lutto (proposta).",
        voce: "(gesti)",
        funzione: "Comunica a gesti, con Rei: due che non dicono quello che sentono (proposta).",
        segreto: "Una guardia sui sessant'anni lo fissa a lungo (Sessione 13): chi è, e perché? Da decidere." },
      { nome: "Tessaly", img: "images/carovana/tessaly.webp", ruolo: "Ragazza dell'Ostrica, 26 anni", p: true,
        aspetto: "Bella e lo sa, nastro rosso nei capelli.",
        carattere: "Annoiata, cerca un marito fra i soldati della Torre.",
        voce: "«Un caporale. Non è un capitano, ma si comincia.»",
        funzione: "Prova a sedurre il caporale Ostric e lo distrae dalle sue domande su Rei." },
      { nome: "Brina", img: "images/carovana/brina.webp", ruolo: "Ragazza dell'Ostrica (non proprio)", p: true,
        aspetto: "La più dura, un taglio fresco sulla mano destra, guarda sempre la strada alle spalle.",
        carattere: "Non va al presidio per lavoro: scappa da qualcuno a Tresil e ha pagato Corvina per salire sul carro.",
        voce: "«Non sono affari tuoi. Davvero.»",
        funzione: "Un piccolo mistero tutto umano per la paranoia del gruppo. A Pozdefer un uomo chiede di lei.",
        segreto: "Che cosa ha visto e chi la cerca: da decidere." }
    ]},
    { gruppo: "La vedova", persone: [
      { nome: "Agnes Pell", ruolo: "Vedova, va dai parenti nella valle", p: true,
        aspetto: "Sacco di stracci, cappello da uomo che non toglie mai: quello del marito.",
        carattere: "I primi giorni non parla con nessuno. Dopo Pozdefer parla con chiunque.",
        voce: "«Cantava quella delle anguille. Tutte le sere. Non faceva male a una mosca.»",
        funzione: "Dal 23 racconta: il marito, ubriacone innocuo, trovato in fondo alla salita dei Tintori la notte del fatato, «con due buchi puliti, come fa un professionista». Rei riconosce dettagli che non dovrebbe conoscere (l'immagine della preghiera, il 22) e deve scegliere se parlarle. Alla Torre chiede di scendere nella valle con il gruppo.",
        segreto: "È l'ubriacone ucciso dalla parte di Rei oltre il velo, nella notte vuota. Lo sa il lettore, non Rei." }
    ]}
  ],

  // ── Il viaggio giorno per giorno ──
  giorni: [
    { id: "pv-g18", giorno: "18", tappa: "Partenza, la strada lungo il fiume", scena: "Presentazioni, regole, prima sera al fuoco. Linda vince a carte. Nesse scopre Wvrewvrol.", filo: "" },
    { id: "pv-g19", giorno: "19", tappa: "Campo all'aperto", scena: "La sergente Marrow racconta del fatato e della nave rubata.", filo: "Nave rubata" },
    { id: "pv-g20", giorno: "20, sera", tappa: "Pozdefer", scena: "Arrivo, la paga, il pozzo che sa di ferro. Un carrettiere che scende dalle alture parla di bestie-uomo con i piccoli: nessuno gli crede. Un uomo chiede di Brina. Il debito di Orsolo.", filo: "Primo segno da nord" },
    { id: "pv-g21", giorno: "21", tappa: "La salita dopo Pozdefer", scena: "Nikla chiede a Karl i pezzi della maschera e ci riconosce la mano di Percival Mirr: la donna di Larasha è stata preparata dal suo maestro e ha «qualcosa dentro». Il Tikan non si nomina.", filo: "Maschera e maestro" },
    { id: "pv-g22", giorno: "22", tappa: "Campo sotto la prima dorsale", scena: "Notte di guardia: Rei prega come le ha insegnato Ozzie. Il peso sotto lo sterno si allenta, ma arriva un'immagine non sua: una faccia gonfia di vino, una strada in salita, un respiro che si ferma sotto la sua mano.", filo: "Preghiera di Rei" },
    { id: "pv-g23", giorno: "23", tappa: "Le alture", scena: "Dara vede gruppetti di bestie-uomo sulle creste, verso sud, senza avvicinarsi. Ostric vuole tirare, Orsolo lo ferma. Agnes comincia a parlare del marito.", filo: "Mostri in fuga · Vedova" },
    { id: "pv-g24", giorno: "24", tappa: "L'ultimo tratto", scena: "Un accampamento abbandonato in fretta: fuochi spenti, ossa rosicchiate, un giocattolo di legno e osso, nessuna arma.", filo: "Mostri in fuga" },
    { id: "pv-g25", giorno: "25, sera", tappa: "Arrivo alla Torre Est", scena: "Vedi la Torre Est, più sotto.", filo: "" }
  ],
  pozdefer: {
    intro: "Borgo di sosta di una trentina di case attorno a un pozzo profondo, l'acqua sa di ferro: da qui il nome (proposta). Una ferriera che lavora il ferro della collina, una stazione di posta con stalla, la locanda Il Secchio Rosso. Ultimo letto prima della Torre. Gli abitanti non salgono più alle alture «da quando la neve si è sciolta»: sentono rumori di notte, nessuno è stato attaccato.",
    spunti: [
      "Il debito di Orsolo: l'oste vuole trattenere un mulo.",
      "Un uomo chiede di Brina, la ragazza in fuga.",
      "Il pozzo di ferro: Karl sente Berta rispondere al ferro dell'acqua, con un formicolio.",
      "Sara si lava nel pozzo gelato; mezzo borgo si affaccia.",
      "Stalla e foraggio per i cavalli (2,5 bg a cavallo); si compra l'altra metà dell'avena."
    ]
  },
  imprevisti: [
    "Un bue zoppica: bisogna alleggerire il carro, e qualcuno deve portare i sacchi.",
    "Pioggia: ci si ferma prima, sotto un riparo di pastori. Stretti, bagnati, tutti insieme.",
    "Zoraya insegna un canto a Nesse, o a Mirela. Gherd, dai muli, lo riprende a bocca chiusa.",
    "Fosco ruba (sale, una candela): Wvrewvrol ingiallisce.",
    "Tessaly e il caporale Ostric: lui si dimentica per una sera di guardare Rei.",
    "Le scommesse con Caleb e Tamsin.",
    "Un cavallo del gruppo perde un ferro sulle pietre: per fortuna ci sono i ricambi (proposta).",
    "I muli si piantano davanti a un guado e Gherd non li forza: «Aspettiamo». Dopo un'ora passano (proposta)."
  ],

  // ── La Torre Est ──
  torre: {
    intro: "Chiude l'imbocco della valle dove la strada lascia le alture e scende verso il torrente. Torre quadrata di pietra grigia del primo secolo di Tresil (cantina e cinque piani, tetto piatto), con un corpo basso aggiunto dopo per le camerate. Un recinto murato con una porta sola. Presidio di 35 guardie della Guardia del Muro; il capitano risponde alla Custode del Muro, Selani Vrash. Ogni mese arriva la carovana con sei guardie che danno il cambio a sei uomini. Sul tetto la lanterna azzurra e una falconeria con quattro falchi per le notizie a Tresil.",
    luoghi: [
      ["Cantina", "Dispensa fredda, una cella."],
      ["Piano terra", "Armeria, magazzino di frecce e rifornimenti."],
      ["Primo piano", "Sala comune con il camino (ingresso originale, sopraelevato)."],
      ["Secondo piano", "Infermeria e scrittoio del registro (Ysolde)."],
      ["Terzo piano", "Stanze del capitano, stanza dei sergenti."],
      ["Quarto piano", "Sala dei segnali: tamburi, lanterne di ricambio, olio."],
      ["Tetto", "Lanterna azzurra, falconeria, feritoie: la vista su tutta la valle fino al fumo del villaggio, quando c'è."],
      ["Corpo basso", "Cucina, refettorio, camerate da 35 brande, lavatoio."],
      ["Cortile", "Portone con corpo di guardia e tamburo, stalla e fienile, fucina, forno, granaio, cisterna, conigliera e colombaia (prede per i falchi), legnaia, latrine. La baracca degli ospiti: ci dormono il gruppo, le ragazze e le guardie del cambio finché i sei che rientrano non partono."]
    ],
    segnali: "Lanterne azzurre e tamburi (proposta): una lanterna, tutto bene; due, pericolo nella valle; la lanterna che lampeggia, richiesta di aiuto. Per Tresil si usano i falchi.",
    stato: "Da una decina di giorni il presidio vede passare gruppetti di bestie-uomo verso sud. Nessuno ha attaccato la Torre, nessuno dorme bene. Il capitano ha già mandato un falco a Tresil per chiedere rinforzi: nessuna risposta (proposta).",
    presidio: [
      ["Orven Malsk", "Capitano di Torre", "Sessant'anni, all'ultimo mese prima del congedo. Scrupoloso, non vuole sbagliare adesso. Chiama le bestie-uomo «avanguardie»: «Prima arrivano i pochi, poi arrivano i tanti». La lettura sbagliata, in buona fede."],
      ["Tessa Vrolle", "Sergente, vice", "Dura, pratica. Ha visto i piccoli e non crede all'esercito. Davanti agli altri non contraddice il capitano; al gruppo lo dice di notte. L'alleata possibile."],
      ["Dagan Hesk", "Sergente, maestro d'arco", "Vuole tirare a tutto ciò che si muove sulle creste. Ha già ucciso due bestie-uomo «in avanscoperta» e ne tiene i denti in un sacchetto. Il prezzo della paranoia, già in atto."],
      ["Lirien Ashvel", "Caporale, falconiere (proposta)", "Ha mandato i falchi a Tresil. Conta i giorni, e i falchi rimasti."],
      ["Bram Toller", "Caporale segnalatore", "Ossessionato da lanterne e tamburi. Ha visto luci verdi a nord, oltre le montagne, tre notti di fila: nessuno gli crede. Primo accenno alla ferita del mondo. Karl, concentrandosi, non ci vede nessuna aura."],
      ["Neva Cordis", "Guardia scelta, arciera", "La vista migliore. Ha visto un gruppo di bestie-uomo da vicino: «Portavano i vecchi in braccio»."],
      ["Korrin Vahl", "Guardia scelta, staffetta", "Conosce ogni sentiero della valle. Ha chiesto di restare un secondo turno perché è innamorato di una ragazza dei Varra, nel villaggio. Torna turbato: «Non mi hanno aperto la porta. Mi hanno sorriso dalla finestra.» Il ponte verso il villaggio e la guida del gruppo."],
      ["Mattis Orr", "Guardia, sentinella di notte", "Il più spaventato. Giura di aver sentito le bestie-uomo piangere."],
      ["Sefa Lunn", "Guardia, sentinella al cancello", "Registra chi passa e fa domande ai nuovi. Il nome di Rei la incuriosisce."],
      ["Ulric Tamsel", "Maestro di Pietra", "Cura mura e segnali; ha inciso nelle pietre del cancello la memoria di ogni presidio. Con Nikla trova un terreno comune: lui incide, lei dipinge."],
      ["Ysolde Pram", "Guaritrice e scriba", "Tiene il registro dei passaggi. Ha una pagina con le bestie-uomo viste, date e numeri: vanno tutte verso sud, con vecchi e piccoli. Nessuno l'ha letta davvero. Può farla leggere al gruppo."],
      ["Pell Avern", "Recluta, stalliere", "Diciassette anni, al primo turno lontano da Tresil. Si innamora di Mirela al primo sguardo."],
      ["… e altri 23", "Guardie", "Sei di loro ripartono con i carri vuoti: da scegliere fra i non nominati."]
    ],
    scene: [
      { id: "pv-t1", titolo: "25 sera — L'arrivo", testo: "Il presidio accoglie la carovana come una festa: viveri freschi, posta, le ragazze. Si mangia nel refettorio. Il capitano Malsk racconta delle «avanguardie» e chiede al gruppo di restare qualche giorno. Old Wim ritrova vecchi compagni e chiede del villaggio: Korrin cambia discorso." },
      { id: "pv-t2", titolo: "25 notte", testo: "Bram mostra a chi vuole le luci verdi a nord. Tessa Vrolle parla con il gruppo: «Non credo che sia un esercito.»" },
      { id: "pv-t3", titolo: "26 — Il registro di Ysolde", testo: "Date, numeri, direzioni. Tutti i gruppi vanno verso sud, e ci sono vecchi e piccoli." },
      { id: "pv-t4", titolo: "26 — Dagan e il prigioniero", testo: "Una pattuglia porta una giovane bestia-uomo ferita, presa sulle creste. Dagan vuole interrogarla «come si deve» e il capitano lo lascia fare. Il gruppo deve scegliere se intervenire, difendendo un mostro davanti ai soldati di Tresil. Zoraya, cantando, sente che non mente quando dice, a gesti o nella sua lingua, che «a nord la terra si mangia»." },
      { id: "pv-t5", titolo: "26 — Korrin e Agnes", testo: "Korrin chiede al gruppo di scendere con lui nella valle: «Là c'è qualcosa che non va, e il capitano non mi lascia andare da solo.» Agnes chiede di scendere con loro: i suoi parenti sono laggiù." },
      { id: "pv-t6", titolo: "27 — La carovana si separa", testo: "I carri ripartono per Tresil con i sei uomini che rientrano. Le guardie del cambio e le ragazze restano alla Torre. Il gruppo è pagato e libero." }
    ]
  },

  // ── Il villaggio senza furia ──
  villaggio: {
    nome: "Spinaferma — il villaggio senza furia (proposta)",
    intro: "In fondo alla valle oltre la Torre, dove il torrente fa un'ansa. Circa 110 abitanti, 26 case. Fondato una sessantina d'anni fa da otto famiglie di Tresil guidate dal carradore Aldo Brenn, stanche di dazi, registri e sigilli. Il nome viene dalla siepe di rovi e pali del primo inverno: «la spina che tiene». Ogni primavera i rovi si ripiantano: è un rito.",
    blocchi: [
      ["Com'era (quello che racconta Old Wim)", "Famiglie Brenn, Ossel, Varra, Kettle, Dunmore, Pask, Hollin, Sarre, quasi tutte imparentate. Pecore e capre, orzo e rape, un mulino ad acqua, una forgia, una concia. La Spina: palizzata con fossato, rovi e pali inclinati in fuori, due porte. La Gazza: torretta con campana (1 rintocco bestia, 3 mostri, a martello tutti alla Casa Lunga). La Leva: ogni adulto dai 15 anni ha un posto sulla Spina e un'arma sopra la porta. Trofei di teschi e zanne sulla porta verso valle. Gente dura e ospitale a modo suo: ti offrono da mangiare prima di chiederti chi sei, ma ti guardano le mani finché non esci."],
      ["Com'è adesso (proposta)", "Da «sedici notti fa» nessuno lotta più contro la morte. Le porte della Spina sono aperte. Quest'anno i rovi non sono stati ripiantati: il rito saltato è la prima cosa che Old Wim, o Korrin, noterebbe. La campana della Gazza tace. Le armi sopra le porte ci sono ancora, impolverate. La gente è serena, gentile, sorride dalle finestre; i malati non cercano cure. Rei ci si sente stranamente a casa."],
      ["La data che torna", "Gli abitanti dicono che la quiete è cominciata «sedici notti fa», la notte fra l'11 e il 12 del Terzo mese, e la ricordano per un fatto preciso: la vecchia del mulino ha smesso di chiedere le sue erbe. I quattro fanno il conto da soli: è la notte di Fonte Verde. Nessuno glielo conferma."],
      ["Personaggi", "• Nonna Maddala Brenn (~80) — figlia del fondatore; quando parla gli altri tacciono.\n• Corwen Ossel — capo della Leva, cicatrice d'artiglio dalla spalla al fianco, prudente fino all'esasperazione (prima).\n• Ilse Varra — fabbra; tiene in un baule le parti di mostro che non bruciano. Una ragazza della sua famiglia è quella di Korrin.\n• Tobb Kettle — cacciatore; a volte torna con cose che non sa spiegare.\n• Sora Dunmore — levatrice e guaritrice: erbe, grappa e poche parole.\n• Fennick Pask — il mugnaio, tramite con la Torre.\n• I gemelli Hollin (14 anni) — smaniavano per un posto sulla Spina."],
      ["Spunti", "• Nel baule di Ilse c'è un resto che di notte è tiepido.\n• Nonna Maddala sa perché le famiglie si fermarono proprio lì e non più avanti, e non l'ha mai detto.\n• La sera si sente solo il torrente; quando smette, una volta tutti alzavano la testa. Adesso no.\n• I parenti di Agnes la accolgono con un sorriso, e basta."],
      ["Dopo (non per questa giocata)", "Il tempio antico dei cantanti, il servitore della Fame, lo scontro, l'agente del Tikan: vedi «Trama Libro Primo — Ossatura»."]
    ]
  },

  // ── Fili da seminare durante il viaggio ──
  fili: [
    { id: "pv-f1", testo: "La nave rubata e il fatato come diversivo (Marrow, 19)." },
    { id: "pv-f2", testo: "Primo segno da nord: il carrettiere di Pozdefer (20)." },
    { id: "pv-f3", testo: "La maschera e Percival Mirr (Nikla, 21)." },
    { id: "pv-f4", testo: "La preghiera di Rei e l'immagine dell'ubriacone (22)." },
    { id: "pv-f5", testo: "Le bestie-uomo sulle creste, verso sud (23) e l'accampamento abbandonato (24)." },
    { id: "pv-f6", testo: "Agnes e il marito: Rei riconosce i dettagli (dal 23)." },
    { id: "pv-f7", testo: "Il caporale Ostric e la «rossa»." },
    { id: "pv-f8", testo: "Brina e l'uomo che la cerca." },
    { id: "pv-f9", testo: "Fosco ruba, Wvrewvrol ingiallisce." },
    { id: "pv-f10", testo: "Le luci verdi a nord e «a nord la terra si mangia» (Torre)." }
  ],

  // ── Da decidere ──
  daDecidere: [
    "Nome, aspetto e usanze delle bestie-uomo (con il Custode del mondo).",
    "Se il villaggio senza furia è Spinaferma.",
    "Con la carovana mensile: le ragazze restano un mese, fino al convoglio dopo, o tornano prima? (la prep diceva «due settimane»).",
    "Che cosa ha visto Brina a Tresil, e chi la cerca.",
    "Se la giovane bestia-uomo prigioniera sopravvive, e se torna più avanti.",
    "Quali sei uomini del presidio ripartono con i carri.",
    "Nomi da controllare: la sergente Ilda Marrow ha lo stesso cognome della falsa archivista «Ilvia Marrow» della vecchia prep; Tessa Vrolle / Tessaly / Tamsin si somigliano."
  ]
};
