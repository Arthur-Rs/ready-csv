export type CompilerObjectReturn = {
  [key: string]: Array<string | number>
}

export const CompilerToObject = (data: string): CompilerObjectReturn => {
  const lines = data.split('\n')
  let columns: CompilerObjectReturn = {}
  let keys: Array<string> = []

  lines[0].split(',').forEach((keyName) => {
    const keyNameParsed = keyName.replace(/\"|\'/g, "").trim()
    
    keys.push(keyNameParsed)

    columns[keyNameParsed] = []
  }) 
  
  lines.shift()

  keys.forEach((keyName, index) => {
    columns[keyName] = lines.map((line) => {
      const value = line.split(',')
        .find((_, valueIndex) => valueIndex === index)

      if(!value){
        return ''
      }

      if(!isNaN(Number(value))){
        return Number(value)
      }
  
      return value.trim().replace(/\"|\'/g, "")
    })
  })


  console.log(columns)

  return columns
}