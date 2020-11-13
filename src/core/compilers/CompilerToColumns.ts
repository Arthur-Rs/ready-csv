export type CompilerColumnReturn = Array<Array<string | number>>

export const CompilerToColumns = (data: string) => {
  const lines = data.split('\n')

  const columnsSize = lines[0].split(',')

  const rows =  lines.map((line) => line.split(',')) 

  let columns: CompilerColumnReturn  = []

  columnsSize.forEach((_, columnSize) => {   
    const column = lines.map((_, lineIndex) => {

      const value = rows[lineIndex][columnSize]

      if(!value){
        return ''
      }
  
      if(!isNaN(Number(value))){
        return Number(value)
      }
  
      return value.trim().replace(/\"|\'/g, "")
    })

    columns.push(column)
  })

  return columns

}