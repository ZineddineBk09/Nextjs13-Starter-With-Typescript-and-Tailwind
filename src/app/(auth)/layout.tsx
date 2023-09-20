import AuthSide from "@/common/widget/auth-side"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main className="flex gap-3 p-4">
         <aside>
            <AuthSide />
         </aside>

         {children} 
      </main>
    </>
  )
}
