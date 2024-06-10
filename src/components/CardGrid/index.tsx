import Card from './Card'
import { Robos } from '../../types'


type Robo =  {
  robos: Robos[]
}

export function CardGrid({robos}: Robo) {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {
          robos.map((robo) => {
            return <Card key={robo.id} robo={robo} />
          })
        }
    </section>
  )
}
