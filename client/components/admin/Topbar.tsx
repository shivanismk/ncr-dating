import { UserCircle } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-8">

      <h2 className="text-2xl font-bold">
        Dashboard
      </h2>

      <div className="flex items-center gap-3">

        <UserCircle size={34} />

        <div>

          <h4 className="font-semibold">
            Administrator
          </h4>

          <p className="text-sm text-gray-500">
            Online
          </p>

        </div>

      </div>

    </header>
  );
}


