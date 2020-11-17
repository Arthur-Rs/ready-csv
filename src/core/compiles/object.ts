export type CompiledObject = {
  [key: string]: Array<string | number>
}

export const compileToObject = (data: string): CompiledObject => {
  const lines = data.split('\n')
  let columns: CompiledObject = {}
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