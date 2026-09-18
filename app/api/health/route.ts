import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'github-command-center',
    timestamp: new Date().toISOString(),
  });
}
