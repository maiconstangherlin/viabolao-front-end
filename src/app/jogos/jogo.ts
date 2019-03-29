import { Time } from '../times/time';

export interface Jogo {
    id: number; 
    data: Date;
    timeA: Time;
    timeB: Time;
    golsA?: number;
    golsB?: number;
}
