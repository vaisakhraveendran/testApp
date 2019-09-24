import {greet} from './greet';

describe('greet',()=>{

    it('string testing',()=>{


        expect(greet('vaisakh')).toContain('vaisakh');
    })
})