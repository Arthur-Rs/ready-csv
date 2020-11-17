
export type CompiledRow = Array<Array<string | number>>

export const compileToRow = (data: string): CompiledRow => {
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