import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '40px',
        background: '#0f172a',
        color: 'white',
      }}
    >
      <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>
        Dashboard
      </h1>

      <p style={{ fontSize: '18px' }}>
        Welcome {user.email}
      </p>

      <form action="/api/logout" method="post">
        <button>Logout</button>
      </form>
    </main>
  )
}