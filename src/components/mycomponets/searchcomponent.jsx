import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Search } from "lucide-react"

const SearchComponent = ({placeholder, type}) => {
  return (
    <div className="border rounded-lg flex justify-between items-center">
        <Input
        type={type}
        placeholder={placeholder}
        className="border-none "
        />
        <Button variant="ghost" size="icon">
            <Search />
        </Button>
    </div>
  )
}

export default SearchComponent