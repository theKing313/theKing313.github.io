/* Core */
import Stripe from 'stripe';
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export async function POST(req: Request, res: Response) {
  const body = await req.json()
  const { amount = 1, id } = body

  const stripe = new Stripe('sk_test_51Nm9IQLRWAD1wBbdPy1viddRI6Z4YXe8ChAKdfcVTQd9e9hxT5Igf0pB6j7Asx849B4UbREfePPDz24dwBPGA6Bn00vUIN0Q2o', {
    apiVersion: '2023-08-16',
    maxNetworkRetries: 2,
    appInfo: {
      name: 'MyAwesomePlugin',
      version: '1.2.34', // Optional
      url: 'https://myawesomeplugin.info', // Optional
    }
  }
  );

  console.log(body)


  // // simulate IO latency
  // await new Promise((r) => setTimeout(r, 500))

  return NextResponse.json({ data: amount })
}


type ResponseData = {
  message: string
}

export async function GET(req: Request) {
  return NextResponse.json({ message: 'Hello from Next.js!' })
}