import { Player2 } from './player2';


describe( "Player 2 Emit", () => {
    let player: Player2;

    beforeEach( () => player = new Player2() );

    it( "Debe emititr un evento cuando recibe daño", () => {
      
        let newHp = 0;
        
        player.hpChanges.subscribe( hp => {
            newHp = hp;
        })

        player.getHurt( 1000 );

        expect( newHp).toBe(0);
    })

    it( "Debe emititr un evento cuando recibe daño y sobrevivit si es menos de 100", () => {
      
        let newHp = 0;
        
        player.hpChanges.subscribe( hp => {
            newHp = hp;
        })

        player.getHurt( 50 );

        expect( newHp).toBe(50);
    })
})