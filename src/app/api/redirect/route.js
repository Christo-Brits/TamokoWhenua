import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  let to = searchParams.get('to');
  
  if (!to) {
    return new NextResponse('Missing destination', { status: 400 });
  }
  
  // Handle the (landing) group path
  if (to.startsWith('/(landing)')) {
    // Remove the (landing) group from the path
    to = to.replace('/\(landing)', '');
  }
  
  return NextResponse.redirect(new URL(to, request.nextUrl.origin));
}
