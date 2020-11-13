
export type CompilerRowReturn = Array<Array<string | number>>

export const CompilerToRows = (data: string): CompilerRowReturn => {
  const lines = data.split('\n')

  const rows = lines.map((r) => r.split(',').map((r) => {
      if(!isNaN(Number(r))){
        return Number(r)
      }

      return r.trim().replace(/\"|\'/g, "")
    })
  )

  return rows
}