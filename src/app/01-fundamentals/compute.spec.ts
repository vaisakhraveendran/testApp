import {compute} from './compute'

//Suit relative tes('compute')t
describe('compute',()=>{
//define mutiple test cases 
    it('test name',()=>{

 const result= compute(-1);
 expect(result).toBe(0);
    })

    it('increment by 1',()=>{

        const result= compute(0);
        expect(result).toBe(1);
           })

}) 