// Tipos Primitivos

let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";

qualquer = 22;

//Arrays

const lista: number[] = [];
lista.push(13, 22.5, 38, 1.58);

//Tipos personalizados (type Alias)

type Transacao = {
  tipoTransacao: TipoTransacao;
  data: Date;
  valor: number;
};

//ENUM

enum TipoTransacao {
  DEPOSITO = "Depósito",
  TRANSFERENCIA = "Transferência",
  PAGAMENTO_BOLETO = "Pagamento de Boleto",
}

const novaTransacao: Transacao = {
  tipoTransacao: TipoTransacao.DEPOSITO,
  data: new Date(),
  valor: 0,
};
