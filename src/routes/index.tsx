import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
   <div>
        <h1 className="bg-red-600">Home</h1>
   </div>
  )
}
