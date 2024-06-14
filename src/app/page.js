import { Button } from "@/components/ui/button"
import SearchComponent from "@/components/mycomponets/searchcomponent"

export default function Home() {
  return (
    <div className="flex gap-2 flex-col">

      <SearchComponent placeholder="Search for something" type="textadd" />

      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">Icon</Button>

    </div>
  )
}
