const { objectStamper } = require('./objectStamper');

const fooStamp = objectStamper({
  props: {
    Foo: 'foo'
  },
  init({ Foo } = {}) {
    this.Foo = Foo ? Foo : this.Foo;
  },
  methods: {
    sayFoo() {
      console.log(this.Foo);
    }
  }
});

const firstFoo = fooStamp();
firstFoo.sayFoo();

const secondFoo = fooStamp({ Foo: 'Fooey oey oo' });
secondFoo.sayFoo();

console.log('same foo? ', firstFoo === secondFoo);

const barStamp = objectStamper({
  props: {
    Bar: 'bar'
  },
  init({ Bar } = {}) {
    this.Bar = Bar ? Bar : this.Bar;
  },
  methods: {
    sayBar() {
      console.log(this.Bar);
    }
  }
});

const firstBar = barStamp();
firstBar.sayBar();

const secondBar = barStamp({ Bar: 'Bar-e-ar-e-ar' });
secondBar.sayBar();

console.log('same bar? ', firstBar === secondBar);
