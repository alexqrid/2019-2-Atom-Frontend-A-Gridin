/*
 * Функция `convertBytesToHuman` должна принимать
 * аргумент `bytes` только числового типа.
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
  
 */

function convertBytesToHuman(bytes) {
  if (!Number.isInteger(bytes)){
    return false
  }
  let divider = 1024
  let prefix = [" Bytes"," kB"," MB"," GB"," TB"," PB"," EB"]
  if (bytes<divider){
    let result = (bytes<0)?false: bytes + prefix[0]
    return result
  }else{
    let i = Math.floor(Math.log(bytes) / Math.log(divider))
    i = (i<prefix.length) ? i :prefix.length - 1
    return (bytes/Math.pow(divider,i)).toFixed(2) + prefix[i]
  }
}
export default convertBytesToHuman
