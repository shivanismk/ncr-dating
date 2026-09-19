import { NextRequest, NextResponse } from "next/server";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ state: string }> }
) {
  const { state } = await params;
  const value = decodeURIComponent(state);

  const res = await fetch(`${API}/api/cities/${encodeURIComponent(value)}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return NextResponse.json(
      { message: "Failed to load cities" },
      { status: res.status }
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
