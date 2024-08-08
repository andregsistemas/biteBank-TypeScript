import { formatarData, formatarMoeda } from "../utils/formatters.js";

export enum FormatoData {
    PADRAO = "DD/MM/AAAA",
    DIA_SEMAMA_DIA_MES_ANO = "DIA_SEMANA, DD/MM/AAAA",
    DIA_MES = "DD/MM"
}

function formatarInformacoes(valor: number, data: Date, formatoData: FormatoData): string {
    const dataFormatada = formatarData(data, formatoData);
    const valorFormatado = formatarMoeda(valor);
    return `${dataFormatada} - ${valorFormatado}`;
}