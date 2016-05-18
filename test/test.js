	var expect = require("chai").expect;

	describe("A Basic test", function() {
	    it('should check types', function() {
	        expect('1').to.be.a('string');
	        expect(1).to.be.a('number');
	        expect(true).to.be.a('boolean');
	        expect({}).to.be.an('object');
	        expect(null).to.be.a('null');
	        expect(undefined).to.be.a('undefined');
	        expect(null).to.be.a('null');
	        expect([]).to.be.an('array');
	        expect(0 / 0).to.be.a('number');
	    });

	    it('should handle negation', function() {
	        expect(5).to.not.be.a('string');
	    });

	    it('should check equality', function() {
	        var o = {};
	        o.o = o;

	        expect(2 * 2).to.equal(4);
	        expect(NaN).to.not.equal(NaN);
	        expect(5).to.not.equal('5');
	        // different object references are not equal
	        expect({
	            a: 3
	        }).to.not.equal({
	            a: 3
	        });
	        // references pointing at the same object are equal
	        expect(o.o).to.equal(o);
	    });

	    it('should check object properties', function() {
	        var player = {
	            name: 'Mario',
	            coins: 55,
	            inventory: {
	                mushrooms: 2,
	                stars: 3
	            }
	        };

	        // check the existence of a key
	        expect(player).to.have.property('coins');
	        // check the existence of a key + check its value
	        expect(player).to.have.property('name', 'Mario');
	        // deep properties
	        expect(player).to.have.deep.property('inventory.stars', 3);
	    });

	    it('should match regular expressions', function() {
	        expect('John').to.match(/^(John|Jack)$/);
	    });

	    it('should contain a substring', function() {
	        expect('John').to.have.string('hn');
	    });


	});