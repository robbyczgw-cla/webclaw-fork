import { lazy, Suspense } from 'react'
import { createFileRoute } from '@tanstack/react-router'

const FileExplorerScreen = lazy(() =>
  import('../screens/files/file-explorer-screen').then((m) => ({
    default: m.FileExplorerScreen,
  })),
)

export const Route = createFileRoute('/files')({
  component: FilesRoute,
})

function FilesRoute() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center text-primary-500 text-sm">
          Loading…
        </div>
      }
    >
      <FileExplorerScreen />
    </Suspense>
  )
}
