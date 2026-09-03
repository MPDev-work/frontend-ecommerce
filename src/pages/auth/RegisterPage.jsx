import {
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const submit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <main className="min-h-dvh bg-[#f4f7f3] pt-16">
      <section className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-6xl items-center gap-10 px-5 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <div className="rounded-[2rem] bg-emerald-900 p-8 text-white sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
            Join the ritual
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight">
            A softer way to shop for your skin.
          </h1>
          <ul className="mt-9 space-y-5 text-sm leading-6 text-emerald-50">
            {[
              'Save products and routines you love',
              'Keep your delivery details ready at checkout',
              'Get thoughtful picks matched to your needs',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-900">
                  <Check size={15} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-sm text-emerald-100">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-semibold text-white underline underline-offset-4"
            >
              Sign in
            </Link>
          </p>
        </div>
        <div className="mx-auto w-full max-w-lg">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">
            Create your account
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950">
            Start your skin story
          </h1>
          <p className="mt-3 text-sm leading-6 text-stone-500">
            It only takes a moment. You can tailor your preferences later.
          </p>
          {submitted ? (
            <div
              role="status"
              className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900"
            >
              Your account is ready to be created. We’ll be in touch shortly.
            </div>
          ) : null}
          <form onSubmit={submit} className="mt-7 grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-stone-800"
              >
                Full name
              </label>
              <div className="relative">
                <UserRound
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
                  size={18}
                />
                <input
                  id="name"
                  autoComplete="name"
                  required
                  placeholder="Your name"
                  className="h-12 w-full rounded-xl border border-stone-300 bg-white pl-11 pr-4 text-base outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="new-email"
                className="mb-2 block text-sm font-semibold text-stone-800"
              >
                Email address
              </label>
              <div className="relative">
                <Mail
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
                  size={18}
                />
                <input
                  id="new-email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-xl border border-stone-300 bg-white pl-11 pr-4 text-base outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="new-password"
                className="mb-2 block text-sm font-semibold text-stone-800"
              >
                Create a password
              </label>
              <div className="relative">
                <LockKeyhole
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
                  size={18}
                />
                <input
                  id="new-password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  minLength="8"
                  required
                  placeholder="At least 8 characters"
                  className="h-12 w-full rounded-xl border border-stone-300 bg-white pl-11 pr-12 text-base outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-2 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-lg text-stone-500 hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-emerald-700"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <p className="mt-2 text-xs text-stone-500">
                Use 8 or more characters with a mix of letters and numbers.
              </p>
            </div>
            <label className="sm:col-span-2 flex cursor-pointer items-start gap-2 text-sm leading-5 text-stone-600">
              <input
                required
                type="checkbox"
                className="mt-0.5 size-4 rounded border-stone-300 accent-emerald-800"
              />{' '}
              I agree to receive my order and account updates.
            </label>
            <button
              type="submit"
              className="sm:col-span-2 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-emerald-800 text-sm font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            >
              Create account <ArrowRight size={17} />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default RegisterPage;
