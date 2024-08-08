import { FormatoData } from '../types/FormatoData.js';
import { formatarData, formatarMoeda } from "../utils/formatters.js";
import Conta from '../types/conta.js';
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoSaldo != null) {
    elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMAMA_DIA_MES_ANO);
}
renderizarSaldo();
function renderizarSaldo() {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}
const SaldoConponent = {
    atualizar() {
        renderizarSaldo();
    }
};
export default SaldoConponent;
