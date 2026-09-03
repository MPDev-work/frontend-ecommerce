import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BannerLogin from '../../assets/banner/phkabanner.webp';

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const submit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-dvh bg-stone-100 pt-16">
      <section className="grid min-h-[calc(100dvh-4rem)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative hidden overflow-hidden lg:block">
          <img
            src={BannerLogin}
            alt="Skincare products displayed in warm light"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-transparent" />
          <div className="absolute bottom-12 left-12 max-w-md text-white">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
              Made for your ritual
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.03] tracking-tight">
              Good skin days start with a thoughtful routine.
            </h1>
            <p className="mt-5 text-base leading-7 text-white/80">
              Keep your discoveries, favourites, and orders in one calm place.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center px-5 py-12 sm:px-8">
          <div className="w-full max-w-md">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">
              Welcome back
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950">
              Sign in to Weyoung
            </h1>
            <p className="mt-3 text-sm leading-6 text-stone-500">
              Your saved products and a more personal skincare journey are
              waiting.
            </p>
            {submitted ? (
              <div
                role="status"
                className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900"
              >
                Thanks — your sign-in request has been received.
              </div>
            ) : null}
            <form onSubmit={submit} className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="email"
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
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className="h-12 w-full rounded-xl border border-stone-300 bg-white pl-11 pr-4 text-base text-stone-950 outline-none transition placeholder:text-stone-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-stone-800"
                  >
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-xs font-semibold text-emerald-800 underline-offset-4 hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <LockKeyhole
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
                    size={18}
                  />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    placeholder="Enter your password"
                    className="h-12 w-full rounded-xl border border-stone-300 bg-white pl-11 pr-12 text-base text-stone-950 outline-none transition placeholder:text-stone-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
                  />
                  <button
                    type="button"
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                    onClick={() => setShowPassword((current) => !current)}
                    className="absolute right-2 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-lg text-stone-500 hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-emerald-700"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              <label className="flex cursor-pointer items-center gap-2 text-sm text-stone-600">
                <input
                  type="checkbox"
                  className="size-4 rounded border-stone-300 accent-emerald-800"
                />{' '}
                Keep me signed in
              </label>
              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-emerald-800 text-sm font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              >
                Sign in <ArrowRight size={17} />
              </button>
            </form>
            <p className="mt-7 text-center text-sm text-stone-600">
              New to Weyoung?{' '}
              <Link
                to="/register"
                className="font-semibold text-emerald-800 underline-offset-4 hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
