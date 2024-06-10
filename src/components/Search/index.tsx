import { SearchIcon } from "lucide-react"
import { ChangeEvent } from "react"

type SearchProps = {
    onSearch: (e: ChangeEvent<HTMLInputElement>) => void
}
export  function Search({onSearch}: SearchProps) {
  return (
  <div className="rounded px-2 bg-white/80 border-2  shadow-md flex items-center gap-2 focus-visible:border-emerald-400 focus-visible:scale-125 duration-100 translate-x-2" 
    title="search"  
    >
        <SearchIcon className="size-6 text-emerald-400" />
        <input onChange={onSearch} 
            type="search" 
            name="search" 
            placeholder="Search..." 
            className="outline-none bg-transparent w-full py-3 px-2" 
        />
  </div>)
  
  
}
