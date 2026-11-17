// ============================================================
// data_economia.js — DISMESSO il 31 ottobre 2026
// Il listino di Tresil, della Torre, di Furiosa e del Manuale è ora
// unico: data_economia_kaelvaran.js (+ economia_kaelvaran.js per
// disegnarlo). Il vecchio contenuto è in data_economia.js.bak-2026-10-31.
// Questo file resta solo per compatibilità: se KAELVARAN_ECO è caricato,
// TRESIL_ECO punta allo stesso listino.
// ============================================================
var TRESIL_ECO = (typeof KAELVARAN_ECO !== 'undefined') ? KAELVARAN_ECO : null;
