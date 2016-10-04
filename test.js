import {expect} from 'chai';

import word from './index';

describe('Word function', function () {
    it('should return "some string"', () => {
        expect(word()).to.equal('some string');
    })
});