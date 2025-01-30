import { NextResponse } from "next/server";
import books from "../data.json";

//filtering through quotes using keywords
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  const filteredBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(query.toLowerCase());
  });

  return NextResponse.json(filteredQuotes);
}

//creating a new quote
export async function POST(req) {
  const { quote, by } = await req.json();
  const newQuote = {
    id: quotes.length + 1,
    quote,
    by,
  };
  quotes.push(newQuote);

  return NextResponse.json("Quote added successfully");
}
