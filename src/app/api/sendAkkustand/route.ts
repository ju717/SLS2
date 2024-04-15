import { NextResponse } from "next/server";
import io from "socket.io-client";
const socket = io("http://localhost:3001");

export async function POST(request: Request) {
  const data = await request.json();

  const akkustand: number = parseFloat(data.akkustand);

  socket.emit("akkustand", akkustand);
  console.log(akkustand);
  return NextResponse.json({ akkustand: akkustand }, { status: 200 });
}
