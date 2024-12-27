import {createRootRoute, createRouter} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import {Suspense} from "react";
import Header from "../components/custom/Header.tsx";

export const Route = createRootRoute({
  component: App,
})

function App() {
  return (
      <>
    <div className="container mx-auto px-4">

        <Suspense>
            <Header/>
                <TanStackRouterDevtools router={router} position="bottom-right" />
        </Suspense>
    </div>
    </>
  )
}


const routeTree = Route.addChildren([
    // ... other routes
])

const router = createRouter({
    routeTree,
})


