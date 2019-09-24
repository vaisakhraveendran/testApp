import {getCurrencies} from './getCurrencies'

describe('getCurrencies',()=>{

    it('string testing',()=>{

        const result=getCurrencies()
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
        expect(result).toContain('USD');
    })
})