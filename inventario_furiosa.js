// ============================================================
// inventario_furiosa.js — disegna la sezione Inventario di furiosa.html
// Richiede: data_inventario.js (FURIOSA_INVENTARIO),
//           economia_kaelvaran.js (window.ecoKaelvaranParse),
//           data_furiosa.js (colori e iniziali dei PG).
// Uso: renderInventarioFuriosa(elemento, { master: true|false })
// ============================================================
(function () {
  const ORDINE = [
    ['og', 1e8], ['om', 1e7], ['op', 1e6], ['ag', 1e5], ['am', 1e4],
    ['ap', 1e3], ['bg', 100], ['bm', 10], ['bp', 1]
  ];
  const CAT = {
    armi: 'Armi', vestiario: 'Vestiario', viaggio: 'Viaggio', scrittura: 'Scrittura e inchiostri',
    cibo: 'Cibo', reperti: 'Reperti', magia: 'Doni e magia', ricordi: 'Ricordi', animali: 'Animali', cura: 'Cure e igiene', altro: 'Altro'
  };
  const STATO = {
    magico:   { ico: '✦', txt: 'Dono / magico: non in vendita' },
    reperto:  { ico: '◆', txt: 'Reperto: non in vendita' },
    prestito: { ico: '↔', txt: 'In prestito' },
    perso:    { ico: '✕', txt: 'Non più in possesso' }
  };
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const nf = (n, d = 0) => n.toLocaleString('it-IT', { maximumFractionDigits: d });

  // 123456 bp → «1 ag 2 am 3 ap» (al massimo tre tagli, il resto arrotondato)
  function monete(bp) {
    if (!bp) return '0';
    let r = Math.round(bp), out = [];
    for (const [s, v] of ORDINE) {
      if (r >= v) { const q = Math.floor(r / v); out.push(q + ' ' + s); r -= q * v; }
      if (out.length === 3) break;
    }
    return (r > 0 && out.length === 3 ? '≈ ' : '') + out.join(' ');
  }
  function lavoro(bp) {
    const g = bp / 100;
    if (g < 1) return 'meno di una giornata';
    if (g < 300) { const t = nf(g, g < 10 ? 1 : 0); return t + (t === '1' ? ' giornata' : ' giornate'); }
    const a = g / 300;
    const t = nf(a, a < 10 ? 1 : 0); return t + (t === '1' ? ' anno' : ' anni') + ' di lavoro';
  }
  function valore(costo, qta = 1) {
    if (!costo || typeof window.ecoKaelvaranParse !== 'function') return null;
    const p = window.ecoKaelvaranParse(costo);
    if (!p) return null;
    return { min: p.min * qta, max: p.max * qta, mid: (p.min + p.max) / 2 * qta, range: p.min !== p.max };
  }
  const kgTxt = k => nf(k, k < 10 ? 1 : 0) + ' kg';
  const fmtVal = v => !v ? '—' : (v.range ? monete(v.min) + ' – ' + monete(v.max) : monete(v.min));

  const CSS = `
.invF .inv-intro{font-size:14px;color:var(--t2);margin-bottom:1.1rem;max-width:62rem;}
.invF .inv-tot{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:.6rem;margin-bottom:1.2rem;}
.invF .inv-pg{background:var(--bg-card);border:1px solid var(--border);border-radius:4px;padding:.75rem .9rem;cursor:pointer;transition:var(--tr);position:relative;}
.invF .inv-pg:hover{border-color:var(--border-b);}
.invF .inv-pg.on{border-color:var(--gold);background:var(--bg-act);}
.invF .inv-pg-h{display:flex;align-items:center;gap:8px;font-family:var(--font-d);font-size:12px;letter-spacing:.08em;color:var(--t1);text-transform:uppercase;}
.invF .inv-dot{width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;color:#0a0c0f;font-weight:700;flex-shrink:0;}
.invF .inv-pg-v{font-size:18px;color:var(--gold);margin-top:.35rem;font-family:var(--font-d);}
.invF .inv-pg-s{font-size:12px;color:var(--t3);font-style:italic;line-height:1.45;}
.invF .inv-bar{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center;margin:.4rem 0 1rem;}
.invF .inv-bar input[type=search]{flex:1;min-width:200px;background:var(--bg-panel);border:1px solid var(--border-b);border-radius:3px;color:var(--t1);padding:6px 10px;font-family:var(--font-b);font-size:14px;}
.invF .inv-bar label{font-size:13px;color:var(--t2);display:flex;gap:6px;align-items:center;cursor:pointer;}
.invF .inv-grp{margin-bottom:1.4rem;}
.invF .inv-grp-t{display:flex;align-items:center;gap:9px;font-family:var(--font-d);font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);margin-bottom:.45rem;}
.invF .inv-grp-t small{font-family:var(--font-b);font-size:13px;letter-spacing:0;text-transform:none;color:var(--t3);font-style:italic;}
.invF .inv-wrap{overflow-x:auto;border:1px solid var(--border);border-radius:4px;}
.invF table{width:100%;border-collapse:collapse;font-size:14px;}
.invF th{font-family:var(--font-d);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--t3);text-align:left;padding:7px 10px;background:var(--bg-panel);border-bottom:1px solid var(--border);white-space:nowrap;}
.invF td{padding:7px 10px;border-bottom:1px solid var(--border);vertical-align:top;color:var(--t2);}
.invF tr:last-child td{border-bottom:none;}
.invF td.n{color:var(--t1);}
.invF td.v{white-space:nowrap;color:var(--t1);}
.invF td.q{text-align:center;white-space:nowrap;}
.invF .inv-sub{display:block;font-size:12px;color:var(--t3);font-style:italic;}
.invF tr.den td{background:rgba(201,168,76,.05);}
.invF tr.fuori td.n,.invF tr.fuori td.v{color:var(--t2);}
.invF tr.perso td{opacity:.5;}
.invF tr.perso td.n{text-decoration:line-through;}
.invF .b{display:inline-block;margin-left:6px;padding:0 6px;border:1px solid var(--border-b);border-radius:9px;font-size:10px;font-family:var(--font-d);letter-spacing:.05em;color:var(--t2);white-space:nowrap;vertical-align:1px;}
.invF .b.mag{border-color:var(--purple);color:var(--purple);}
.invF .b.rep{border-color:var(--amber);color:var(--amber);}
.invF .b.ver{border-color:var(--red);color:var(--red);}
.invF .b.dur{border-color:var(--green);color:var(--green);}
.invF .inv-cat{font-size:11px;color:var(--t3);white-space:nowrap;}
.invF .inv-leg{font-size:12px;color:var(--t3);margin:.2rem 0 1rem;display:flex;flex-wrap:wrap;gap:.3rem .9rem;}
.invF details{margin-top:1.4rem;}
.invF summary{cursor:pointer;font-family:var(--font-d);font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);margin-bottom:.6rem;}
.invF .inv-dm{border:1px dashed var(--gold-d);border-radius:4px;padding:.8rem 1rem;font-size:13px;color:var(--t2);margin-top:1.2rem;}
.invF .inv-dm b{color:var(--gold);}
@media (max-width:680px){.invF td.c,.invF th.c{display:none;}}
`;

  window.renderInventarioFuriosa = function (root, opts = {}) {
    const INV = typeof FURIOSA_INVENTARIO !== 'undefined' ? FURIOSA_INVENTARIO : null;
    if (!INV) { root.insertAdjacentHTML('beforeend', '<div class="card"><div class="card-body empty">Inventario non trovato: controlla che data_inventario.js sia nella stessa cartella di furiosa.html.</div></div>'); return; }
    if (!document.getElementById('invF-css')) {
      const st = document.createElement('style'); st.id = 'invF-css'; st.textContent = CSS; document.head.appendChild(st);
    }
    // colori e iniziali dai PG dell'archivio
    const pgs = (typeof FURIOSA_DATA !== 'undefined' && FURIOSA_DATA.personaggi?.pg) || [];
    const port = INV.portatori.map(p => {
      const pg = pgs.find(x => x.id === p.id) || {};
      return { ...p, colore: p.colore || pg.colore || '#9a9080', iniziali: p.iniziali || pg.iniziali || p.nome[0], giocatore: pg.giocatore || '' };
    });

    const items = INV.oggetti.map(o => {
      const qta = o.qta || 1;
      const v = valore(o.costo, qta);
      const conta = !o.stato || o.stato === '' ;
      return { ...o, qta, v, conta };
    });
    const soldi = (INV.denaro || []).map(d => ({ ...d, v: valore(d.cifra) }));

    function totali(id) {
      const its = items.filter(o => o.chi === id && o.conta && o.v);
      const ogg = its.reduce((a, o) => a + o.v.mid, 0);
      const den = soldi.filter(d => d.chi === id && d.v).reduce((a, d) => a + d.v.mid, 0);
      const n = items.filter(o => o.chi === id && o.stato !== 'perso').length;
      const ignoti = soldi.some(d => d.chi === id && !d.v);
      const kg = items.filter(o => o.chi === id && o.stato !== 'perso' && o.peso).reduce((a, o) => a + o.peso * o.qta, 0);
      return { ogg, den, n, ignoti, kg };
    }

    const wrap = document.createElement('div'); wrap.className = 'invF';
    wrap.innerHTML = `<div class="inv-intro">${esc(INV.intro)}<br><i>Aggiornato a: ${esc(INV.aggiornato)}.</i></div>`;
    root.appendChild(wrap);

    // ── riquadri dei totali
    const tot = document.createElement('div'); tot.className = 'inv-tot'; wrap.appendChild(tot);
    let filtro = 'tutti';
    const gTot = port.reduce((a, p) => { const t = totali(p.id); return { ogg: a.ogg + t.ogg, den: a.den + t.den }; }, { ogg: 0, den: 0 });
    const box = (id, titolo, dot, val, sub) => `<div class="inv-pg${filtro === id ? ' on' : ''}" data-id="${id}">
        <div class="inv-pg-h">${dot}${esc(titolo)}</div>
        <div class="inv-pg-v">${val}</div><div class="inv-pg-s">${sub}</div></div>`;
    function drawTot() {
      tot.innerHTML = box('tutti', 'Tutti', '<span class="inv-dot" style="background:var(--gold)">∑</span>',
          monete(gTot.ogg + gTot.den),
          `oggetti ${monete(gTot.ogg)} · denaro noto ${monete(gTot.den)}<br>${lavoro(gTot.ogg + gTot.den)}`)
        + port.map(p => {
          const t = totali(p.id);
          return box(p.id, p.nome, `<span class="inv-dot" style="background:${p.colore}">${esc(p.iniziali)}</span>`,
            (t.ogg + t.den) ? monete(t.ogg + t.den) : '—',
            `${t.kg ? 'carico ' + kgTxt(t.kg) + ' · ' : ''}${t.n} ${t.n === 1 ? 'oggetto' : 'oggetti'}${t.ogg ? ' · ' + monete(t.ogg) : ''}${t.den ? (t.ogg ? ' + ' : ' · ') + 'denaro ' + monete(t.den) : ''}${t.ignoti ? ' + denaro da contare' : ''}${(t.ogg + t.den) ? '<br>' + lavoro(t.ogg + t.den) : ''}`);
        }).join('');
      tot.querySelectorAll('.inv-pg').forEach(el => el.onclick = () => { filtro = el.dataset.id; drawTot(); drawList(); });
    }

    // ── barra filtri
    const bar = document.createElement('div'); bar.className = 'inv-bar';
    bar.innerHTML = `<input type="search" placeholder="Cerca un oggetto, una nota, una sessione…">
      <label><input type="checkbox" data-k="persi"> Mostra ciò che non hanno più</label>`;
    wrap.appendChild(bar);
    const q = bar.querySelector('input[type=search]'), cPersi = bar.querySelector('[data-k=persi]');
    q.oninput = () => drawList(); cPersi.onchange = () => drawList();

    const leg = document.createElement('div'); leg.className = 'inv-leg';
    leg.innerHTML = `<span><span class="b mag">✦</span> dono o oggetto magico</span><span><span class="b rep">◆</span> reperto</span><span><span class="b">↔</span> in prestito</span><span><span class="b ver">?</span> da verificare</span><span><span class="b dur">⧗</span> si guasta</span><span>I valori con un intervallo contano nei totali per il valore medio. ✦, ◆ e ↔ non entrano nei totali.</span><span>Il carico comprende finimenti, vestiti e acqua. Un cavallo da sella comune regge circa 120 kg al passo, cavaliere compreso (peso dei cavalieri stimato); verde = margine, ambra = al limite, rosso = troppo.</span>`;
    wrap.appendChild(leg);

    const list = document.createElement('div'); wrap.appendChild(list);

    function riga(o) {
      const st = STATO[o.stato];
      const badges = (o.stato === 'magico' ? `<span class="b mag" title="${st.txt}">✦</span>` : '')
        + (o.stato === 'reperto' ? `<span class="b rep" title="${st.txt}">◆</span>` : '')
        + (o.stato === 'prestito' ? `<span class="b" title="${st.txt}">↔</span>` : '')
        + (o.stato === 'perso' ? `<span class="b" title="${st.txt}">✕ perso</span>` : '')
        + (o.verificare ? `<span class="b ver" title="Quantità, prezzo o possesso da verificare">?</span>` : '');
      const cad = o.v && o.qta > 1 ? esc(o.costo) : '';
      const note = [o.note, o.durata ? `<span class="b dur">⧗</span> ${esc(o.durata)}` : ''].filter(Boolean);
      const valTxt = o.v ? (o.qta === 1 ? esc(o.costo) : fmtVal(o.v)) : (o.stato === 'magico' ? 'non in vendita' : o.stato === 'reperto' ? 'non in vendita' : o.stato === 'perso' ? '—' : 'personale');
      const cls = [o.stato === 'perso' ? 'perso' : '', !o.conta ? 'fuori' : ''].join(' ');
      return `<tr class="${cls}">
        <td class="n">${esc(o.nome)}${badges}<span class="inv-sub">${esc(o.fonte || '')}</span></td>
        <td class="q">${o.qta}</td>
        <td class="v">${valTxt}${cad ? `<span class="inv-sub">${cad} l'uno</span>` : ''}${o.v ? `<span class="inv-sub">${lavoro(o.v.mid)}</span>` : ''}</td>
        <td class="q">${o.peso ? kgTxt(o.peso * o.qta) : ''}</td>
        <td class="c"><span class="inv-cat">${esc(CAT[o.cat] || o.cat || '')}</span></td>
        <td>${note.map((n, i) => i === 0 && !o.durata ? esc(n) : (i === 0 ? esc(n) : n)).join('<br>')}</td></tr>`;
    }
    function rigaSoldi(d) {
      return `<tr class="den"><td class="n">💰 ${esc(d.nome)}${d.verificare ? '<span class="b ver" title="Cifra da verificare">?</span>' : ''}<span class="inv-sub">${esc(d.fonte || '')}</span></td>
        <td class="q">—</td><td class="v">${d.v ? monete(d.v.mid) + `<span class="inv-sub">${lavoro(d.v.mid)}</span>` : 'da contare'}</td>
        <td></td><td class="c"><span class="inv-cat">Denaro</span></td><td>${esc(d.note || '')}</td></tr>`;
    }

    function caricoTxt(p, t) {
      if (!t.kg) return '';
      if (!p.limite) return ' · carico ' + kgTxt(t.kg);
      const tot = t.kg + (p.cavaliere || 0);
      const col = tot > p.limite ? 'var(--red)' : tot > p.limite * 0.92 ? 'var(--amber)' : 'var(--green)';
      return ` · <span style="color:${col}">sul cavallo ${kgTxt(t.kg)}${p.cavaliere ? ' + cavaliere ~' + p.cavaliere + ' kg' : ''} = ${kgTxt(tot)} su ~${p.limite} kg</span>`;
    }
    function drawList() {
      const s = q.value.trim().toLowerCase();
      const match = o => !s || [o.nome, o.note, o.fonte, CAT[o.cat], o.durata].join(' ').toLowerCase().includes(s);
      const chi = filtro === 'tutti' ? port : port.filter(p => p.id === filtro);
      list.innerHTML = chi.map(p => {
        const its = items.filter(o => o.chi === p.id && (cPersi.checked || o.stato !== 'perso') && match(o));
        const den = soldi.filter(d => d.chi === p.id && (!s || (d.nome + ' ' + d.note).toLowerCase().includes(s)));
        if (!its.length && !den.length) return '';
        const t = totali(p.id);
        return `<div class="inv-grp"><div class="inv-grp-t"><span class="inv-dot" style="background:${p.colore}">${esc(p.iniziali)}</span>${esc(p.nome)}
            <small>${p.giocatore ? esc(p.giocatore) + ' · ' : ''}${t.ogg ? 'oggetti ' + monete(t.ogg) : 'oggetti personali'}${t.den ? ' · denaro ' + monete(t.den) : ''}${caricoTxt(p, t)}</small></div>
          <div class="inv-wrap"><table><thead><tr><th>Oggetto</th><th>Q.tà</th><th>Valore</th><th>Peso</th><th class="c">Tipo</th><th>Note</th></tr></thead>
          <tbody>${den.map(rigaSoldi).join('')}${its.map(riga).join('')}</tbody></table></div></div>`;
      }).join('') || '<div class="card"><div class="card-body empty">Nessun oggetto corrisponde alla ricerca.</div></div>';
    }

    // ── movimenti
    if (INV.movimenti?.length) {
      const det = document.createElement('details');
      const nome = id => (port.find(p => p.id === id) || {}).nome || id;
      det.innerHTML = `<summary>Movimenti — acquisti, vendite, doni e perdite</summary>
        <div class="inv-wrap"><table><thead><tr><th>Quando</th><th>Chi</th><th>Cosa</th><th>Cifra</th><th class="c">Fonte</th></tr></thead><tbody>
        ${INV.movimenti.map(m => `<tr><td class="q">${esc(m.quando)}</td><td class="n">${esc(nome(m.chi))}</td><td>${esc(m.cosa)}</td><td class="v">${esc(m.cifra || '')}</td><td class="c"><span class="inv-cat">${esc(m.fonte || '')}</span></td></tr>`).join('')}
        </tbody></table></div>`;
      wrap.appendChild(det);
    }

    if (opts.master) {
      const dm = document.createElement('div'); dm.className = 'inv-dm';
      dm.innerHTML = `<b>Come si aggiorna (solo master).</b> L'inventario sta nel file <code>data_inventario.js</code> e si aggiorna quando si carica la trascrizione di una giocata: si aggiungono gli oggetti comprati, trovati o ricevuti, si segnano come <i>perso</i> quelli venduti, usati o dati via, e si scrive una riga in «movimenti». Il valore va scritto con le sigle del listino (es. «4 am», «24–36 bg»): totali e giornate di lavoro li calcola la pagina. Le voci con <span class="b ver">?</span> aspettano una conferma dal tavolo.`;
      wrap.appendChild(dm);
    }

    drawTot(); drawList();
  };
})();
