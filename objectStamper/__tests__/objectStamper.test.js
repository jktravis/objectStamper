const { objectStamper } = require('../objectStamper');

describe('objectStamper', () => {
  it("should be a function", () => {
    expect(typeof objectStamper).toEqual('function');
  });

  describe('when executed with a config', () => {
    it("should return a function", () => {
      expect(typeof objectStamper({props: {foo: null}})).toEqual('function');
    });
  });

  describe('returned function', () => {
    it("should return an object with the props specified", () => {
      const myObjectStamp = objectStamper({
        props: {
          foo: null
        }
      });

      expect(myObjectStamp()).toHaveProperty('foo');
    });

    it("should return an object with the specified methods", () => {
      const myObjectStamp = objectStamper({
        methods: {
          sayHi: jest.fn()
        }
      });

      expect(typeof myObjectStamp().sayHi).toEqual('function');
    });

    it("should have the correct 'this' context", () => {
      const myObjectStamp = objectStamper({
        props: {
          foo: 'foo'
        },
        methods: {
          getFoo: function () {
            return this.foo;
          }
        }
      });


      expect(myObjectStamp.getFoo).toEqual(myObjectStamp.foo);
    });

    it("should return an object using the specified initializer", () => {
      const myObjectStamp = objectStamper({
        props: {
          foo: null
        },
        init: function(foo) {
          this.foo = foo;
        }
      });
      const foo = 'bar';
      const myObject = myObjectStamp(foo);
      expect(myObject.foo).toEqual(foo);
    });

  });

});