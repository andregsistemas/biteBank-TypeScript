let saldo: number = 3000;

const elementoSaldo = document.querySelector( ".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

if (elementoSaldo != null) {
  elementoSaldo.textContent = formatarMoeda(saldo);
}

if (elementoSaldo != null) {
    const dataAcesso: Date = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMAMA_DIA_MES_ANO);
  }