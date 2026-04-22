'use client';

import { useState } from 'react';
import { completeSignup } from '@/app/actions/auth';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    await completeSignup(email, password);
  }

  return (
    <div style={{ padding: '50px' }}>
      <h1>إنشاء حساب جديد</h1>

      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: 'block', marginBottom: '10px' }}
        />

        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ display: 'block', marginBottom: '10px' }}
        />

        <button type="submit">إنشاء الحساب</button>
      </form>
    </div>
  );
}