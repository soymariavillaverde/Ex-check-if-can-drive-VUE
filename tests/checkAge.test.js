import {checkIfOver18} from '../../src/fundamentals-ex/checkAge'

describe('Should return if you can drive', () => {

    test('checking if age is 18', () => {
        /* Comprobar que es mayor de edad  */

        //given
        let age = 18;

        //when
        let result= checkIfOver18(age)

        //then
        expect(result).toEqual("This person can drive");
    });

    test('checking age is over 18', () => {
        /* Comprobar que es mayor de edad  */

        //given
        let age = 30;

        //when
        let result= checkIfOver18(age)

        //then
        expect(result).toEqual("This person can drive");
    });

    test('checking underage', () => {
        /* Comprobar que es menor de edad */

        //given
        let age = 13;

        //when
        let result= checkIfOver18(age)
        
        //then
        expect(result).toEqual("This person can't drive");
    });
});