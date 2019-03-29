export interface Classificacao {
    ranking: JogadorPontos[];
    lideres: JogadorPontos[];
}

export interface JogadorPontos {
    jogador: string;
    pontos: number;
}  

