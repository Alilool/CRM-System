import { AuthGuard } from "@/components/auth/auth-guard"
import { Navbar } from "@/components/layout/navbar"
import { Sidebar } from "@/components/layout/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-background">
        <Sidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <Navbar />
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </div>
      </div>
    </AuthGuard>
  )
}
