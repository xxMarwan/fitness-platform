'use client';

import { useState } from 'react';
import { completeSignup } from '@/app/actions/auth';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{ padding: '50px' }}>
      <h1>إنشاء حساب جديد</h1>

      <form action={async () => {
        await completeSignup(email, password);
      }}>
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">إنشاء الحساب</button>
      </form>
    </div>
  );
}