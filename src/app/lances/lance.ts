import { Jogo } from '../jogos/jogo';

export interface Lance {
    id?: number;
    jogador?: string;
    jogo: Jogo;
    golsA?: number;
    golsB?: number;
    lanceDetail?: LanceDetail;
}

export interface LanceDetail {
    id: number;
    ultimaAtualizacao: Date;
}
