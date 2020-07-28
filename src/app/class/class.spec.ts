import { Player } from './class';

describe("Pruebas de clase", () => {

    it(" Si recibe 20 de daño ha de devolver 80hp", () => {

        const player = new Player;
        const res = player.getHurt(20);

        expect( res ).toBe(80);

    })

    it(" Si recibe 50 de daño ha de devolver 50hp", () => {

        const player = new Player;
        const res = player.getHurt(50);

        expect( res ).toBe(50);

    })
})