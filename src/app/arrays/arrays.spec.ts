import { getRobots } from './arrays';


describe("Pruebas arrays", () => {


    it( "Debe devolver al menos 3 elementos", () => {


        const res = getRobots();

        expect( res.length ).toBeGreaterThanOrEqual(3);
    })

    it( "Debe contener Ultrón y Jarvis", () => {


        const res = getRobots();

        expect( res ).toContain("Ultrón");
        expect( res ).toContain("Jarvis");
    })
})