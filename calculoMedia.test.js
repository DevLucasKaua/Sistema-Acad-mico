const calcularMedia = require("./calculoMedia")
const funcaoDeMedia = require("./calculoMedia")

describe("Esta é a função para calcular a media", () => {
    test('Deve retornar a media entre dois números', () => {
        expect(calcularMedia(3, 3)).toBe(3);
    });
    test('Deve retonar a media entre dois números', () => {
        expect(calcularMedia(7, 5)).toBe(6);
    })
})