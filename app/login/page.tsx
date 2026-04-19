'use client';

import { useState } from 'react';
import { Dumbbell, AlertCircle } from 'lucide-react';
import { signIn } from '@/app/actions/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await signIn(email, password);
    if (res?.error) {
      setError(res.error);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-2xl mb-4 shadow-lg shadow-emerald-500/30">
            <Dumbbell className="w-9 h-9 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">منصة التدريب الشخصي</h1>
          <p className="text-slate-300 text-sm">تسجيل الدخول لحسابك</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-6 space-y-4">
          {error && (
            <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1.5">البريد الإلكتروني</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              dir="ltr"
              className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 focus:bg-white text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1.5">كلمة المرور</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              dir="ltr"
              className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 focus:bg-white text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-300 text-white py-2.5 rounded-lg font-medium transition-colors"
          >
            {loading ? 'جاري الدخول...' : 'تسجيل الدخول'}
          </button>

          <div className="text-xs text-slate-400 text-center leading-relaxed pt-4 border-t border-slate-100">
            العملاء الجدد: استخدم رابط الدعوة الذي أرسله المدرب
          </div>
        </form>
      </div>
    </div>
  );
}