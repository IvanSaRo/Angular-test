import { Player } from './class';







describe("Pruebas de clase", () => {
    let player = new Player
    //beforeAll( );
    beforeEach( () => {
        player = new Player;
    });

    //afterAll();
    /* afterEach(  () => {
        player.hp = 100;
    }); */
    
    
    
    it(" Si recibe 20 de daño ha de devolver 80hp", () => {

        //const player = new Player;
        const res = player.getHurt(20);

        expect( res ).toBe(80);

    })

    it(" Si recibe 50 de daño ha de devolver 50hp", () => {

       // const player = new Player;
        const res = player.getHurt(50);

        expect( res ).toBe(50);

    })

    it(" Si recibe 100 de daño o mas ha de devolver 0hp", () => {

        // const player = new Player;
         const res = player.getHurt(120);
 
         expect( res ).toBe(0);
 
     })
})