import { Robos } from "../../types"

type robo = {
    robo: Robos
}
export default function Card({robo}: robo) {
  return (
    <a href={`http://${robo.website}`} target="_blank" className="bg-light-green p-4 rounded-md shadow-md flex flex-col items-center truncate overflow-hidden hover:hover:scale-105 transition-all duration-100 cursor-pointer">
        <img alt='robots' src={`https://robohash.org/${robo.id}?size=200x200`} />
        <h1 className="text-xl font-bold">{robo.name}</h1>
        <p className="text-base">{robo.email}</p>
    </a>
  )
}
