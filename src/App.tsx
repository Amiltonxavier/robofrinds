import { ChangeEvent, useEffect, useState } from "react"
import { Robos } from "./types";
import { CardGrid } from "./components/CardGrid";
import { Search } from "./components/Search";
import { Spinner } from "./components/Spinner";
import { API } from "./api";

function App() {
  const [robos, setRobos] = useState<Robos[]>([]);
  const [search, setSearch] = useState("");

  const listRobo = async() => {
    const api = new API("https://jsonplaceholder.typicode.com/users");
    const data = await api.list();
    setRobos(data)
  }
  useEffect(() => {
     listRobo();
  }, [])
  const onSearch = (e: ChangeEvent<HTMLInputElement>)=> {
   setSearch(e.target.value);
  }

  const filteredRobos = robos.filter((robo) => {
    return robo.name.toLowerCase().includes(search.toLowerCase()) || robo.email.toLowerCase().includes(search.toLowerCase());
  })
 
  return (
    <>
      <main className="min-h-screen w-full bg-robos-gradient">
        <div className=" mx-2 sm:mx-8 py-4 flex flex-col gap-4">
        <section className="mx-auto py-2 w-full flex gap-8 flex-col justify-center">
          <header>
            <h1 className="text-5xl text-center font-bold text-light-green">RoboFriends</h1>
          </header>
          <div className="flex justify-center">
            <Search onSearch={onSearch} />
          </div>
        </section>
          {
            robos.length === 0 && <Spinner />
          }
          {
            filteredRobos.length === 0 && <p className="text-center text-white">Nenhum resultado foi encontrado</p>
          }
            <CardGrid robos={filteredRobos} />
        </div>
      </main>
    </>
  )
}

export default App
