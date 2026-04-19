'use client';

import { useState } from 'react';
import { completeSignup } from '@/app/actions/auth';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(formData: FormData) {
    const result = await completeSignup(
      formData.get('email') as string,
      formData.get('password') as string
    );

    if (result?.error) {
      setError(result.error);
    }
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '40px',
        background: '#0f172a',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '500px',
          background: 'white',
          color: 'black',
          padding: '32px',
          borderRadius: '16px',
        }}
      >
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '12px' }}>
          إنشاء حساب جديد
        </h1>

        <p style={{ marginBottom: '20px', color: '#666' }}>
          سجل حسابك للبدء
        </p>

        {error && (
          <div
            style={{
              marginBottom: '16px',
              padding: '12px',
              border: '1px solid red',
              color: 'red',
              borderRadius: '8px',
            }}
          >
            {error}
          </div>
        )}

        <form action={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px' }}>البريد الإلكتروني</label>
            <input
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px' }}>كلمة المرور</label>
            <input
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '8px',
              border: 'none',
              background: '#22c55e',
              color: 'white',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            إنشاء الحساب
          </button>
        </form>
      </div>
    </main>
  );
}