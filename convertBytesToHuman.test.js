import convertBytesToHuman from "./convertBytesToHuman.js"
/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== 1,
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === 5
 */


test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(NaN)).toBe(false)
  expect(convertBytesToHuman(null)).toBe(false)
  expect(convertBytesToHuman(-349012)).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(743178127997832470120712)).toBe("644604.27 EB")
  expect(convertBytesToHuman(1024)).toBe("1.00 kB")
  expect(convertBytesToHuman(23112423412)).toBe("21.53 GB")
});
