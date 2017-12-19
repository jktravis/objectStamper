const {createNode} = require('../createNode');

describe("createNode", () => {
  it("should be a function", () => {
    expect(typeof createNode).toEqual('function');
  });

  describe('when executed', () => {
    it("should return an object", () => {
      expect(typeof createNode()).toEqual('object');
    });

    describe('and passed type is LineNode', () => {
      it("should create a Line Node", () => {
        expect(createNode('LineNode').Type).toEqual('LineNode');
      });

      it("should have a Coherence property", () => {
        expect(createNode('LineNode')).toHaveProperty('Coherence');
      });
    });

    describe('and passed type is FormulaNode', () => {
      it("should create a formula node", () => {
        expect(createNode('FormulaNode').Type).toEqual('FormulaNode');
      });
    });

    describe('and passed type is LinkNode', () => {
      it("should create a link node", () => {
        expect(createNode('LinkNode').Type).toEqual('LinkNode');
      });
    });
  });

});