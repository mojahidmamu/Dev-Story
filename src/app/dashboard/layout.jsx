import Link from "next/link";
import {
  LayoutDashboard,
  PlusCircle,
  User,
  Settings,
  Home,
} from "lucide-react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-12">
        {/* Sidebar */}
        <aside className="col-span-3 sticky top-0 flex h-screen flex-col bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-xl">
          {/* Logo */}
          <div className="border-b border-slate-700 p-6">
            <h1 className="text-3xl font-bold text-indigo-400">DevStory</h1>
            <p className="text-sm text-slate-400">Developer Dashboard</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4">
            <ul className="space-y-1">
              <li>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-indigo-600"
                >
                  <LayoutDashboard size={20} />
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/add-story"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-indigo-600"
                >
                  <PlusCircle size={20} />
                  Add Story
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/profile"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-indigo-600"
                >
                  <User size={20} />
                  Profile
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/settings"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-indigo-600"
                >
                  <Settings size={20} />
                  Settings
                </Link>
              </li>
            </ul>
          </nav>

          {/* Footer */}
          <div className="border-t border-slate-700 p-5">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-xl bg-indigo-600 px-4 py-3 text-center font-medium transition hover:bg-indigo-700"
            >
              <Home size={20} />
              Back to Home
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="col-span-9 p-8">
          {/* Top Bar */}
          <div className="mb-4 flex items-center justify-between rounded-2xl bg-white p-6 shadow">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>

              <p className="mt-1 text-slate-500">
                Welcome back! Manage your developer stories here.
              </p>
            </div>

            <div className="flex p-2 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white">
              Mojahid
            </div>
          </div>

          {/* Page Content */}
          <div className="rounded-2xl bg-white p-8 shadow-lg">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
