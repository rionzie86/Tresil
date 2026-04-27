// ============================================================
// data_panoramica.js — Lore condivisa tra tutte le One Shot
// ============================================================

const PANORAMICA_DATA = {

  mondo: {
    nome: "Kaelvaran",
    descrizione: `Kaelvaran è un arcipelago sospeso tra mari profondi e cieli spesso coperti da nubi basse. Le isole sono abitate da umani, fatati e creature che sfuggono a ogni classificazione. La magia esiste ma è rara, imprevedibile, e spesso legata a luoghi o oggetti specifici — non è un'arte che si studia facilmente.

Il mondo dei sogni è un piano parallelo reale, accessibile in modi ancora poco compresi. I fatati ne sono le emanazioni più tangibili: creature nate dalle emozioni e dai sogni umani, legate a regole antiche che pochi ricordano.`,
  },

  luoghi: [
    {
      id: "tresil",
      nome: "Tresil",
      sottotitolo: "Città portuale sull'Isola di Tresil",
      testo: `Tresil è la città più grande dell'arcipelago: un porto brulicante di mercanti, pescatori, gilde e sottobosco criminale. È costruita su un'isola rocciosa, con i quartieri alti arroccati sulla collina e i quartieri bassi che si affacciano direttamente sul mare.

La città è governata nominalmente da un consiglio di gilde, ma il potere reale è frammentato tra fazioni in equilibrio precario. Le leggi esistono, ma la loro applicazione dipende molto da chi sei e da chi conosci.`,
      tag: ["Città", "Porto", "Centro politico"]
    },
    {
      id: "fossolento",
      nome: "Fossolento",
      sottotitolo: "Villaggio costiero a nord di Tresil",
      testo: `Fossolento è un piccolo insediamento costiero a nord dell'isola, noto principalmente per la pesca e per una vecchia conceria di balene ora in disuso. Il villaggio ha pochi abitanti stabili e una reputazione discreta — né abbastanza importante da attirare attenzione, né abbastanza remoto da essere dimenticato del tutto.`,
      tag: ["Villaggio", "Costiero"]
    }
  ],

  fatati: {
    titolo: "I Fatati",
    testo: `I fatati sono creature nate dal mondo dei sogni — emanazioni di emozioni e desideri umani che hanno preso forma fisica. Non sono né buoni né cattivi per natura: sono quello che il sogno che li ha generati era.

Ogni fatato è legato a un'emozione primaria o a un concetto: la paura, la speranza, la perdita, la gioia. Questa emozione definisce il loro aspetto, le loro capacità e i loro limiti. I fatati invecchiano lentamente e possono essere legati agli umani tramite rituali antichi — un legame che trasforma entrambi.

I collari d'argento di ichnusite sono il metodo più noto per controllare un fatato con la forza. Chi porta il bracciale abbinato comanda il fatato incollato. È considerato un atto aberrante dalla maggior parte delle culture di Kaelvaran.`,
  },

  mondoDeiSogni: {
    titolo: "Il Mondo dei Sogni",
    testo: `Il mondo dei sogni non è una metafora. È un piano fisico parallelo, accessibile durante il sonno da chiunque abbia la predisposizione — o la sfortuna — giusta. Chi vi entra coscientemente può muoversi tra le bolle oniriche altrui, osservare i sogni, e in rari casi interagire con essi.

Morire nel mondo dei sogni significa morire nella realtà. Le creature che abitano quel piano — tra cui alcune forme di fatati — sono reali quanto qualsiasi cosa nel mondo fisico. La differenza è che le regole che governano lo spazio onirico non sono sempre le stesse che governano il mondo sveglio.`,
  },

  monetazione: {
    titolo: "Monetazione di Kaelvaran",
    nota: "Stessa struttura economica presente nell'archivio di Tresil — vedi data.js per i dettagli completi.",
  }

};
