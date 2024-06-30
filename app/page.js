import Image from "next/image";
import { Button } from "@/components/ui/button";
import Book from "@/lib/models/bookModel"
import db, { clearDbCache } from "@/lib/db";
import mongoose from "mongoose";
export default async function Home() {
  const data = await getData();
  async function getData() {
    await db();
    const books = await Book.find();
    return books
    clearDbCache();
    return true
  }
  return (
    <div>HomePage

      <div>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.rank}</td>
                <td>{item.title}</td>
              </tr>
            ))}

          </tbody>
        </table>

      </div>
    </div >
  );
}

